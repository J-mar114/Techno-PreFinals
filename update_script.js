const fs = require('fs');

let js = fs.readFileSync('script.js', 'utf8');

// The replacement script to update script.js
const updatedStateAndLogic = `    // =========================================================================
    // APPLICATION STATE & SETTINGS
    // =========================================================================
    const state = {
      mode: "practice", // 'practice' | 'exam'
      activeDeckKey: null,
      questions: [],
      currentIndex: 0,
      userAnswers: {}, // index -> optionIndex
      flagged: new Set(),
      timerSeconds: 0,
      timerInterval: null,
      isSubmitted: false,
      settings: {
        shuffleQuestions: true,
        shuffleOptions: true,
        sound: true,
        vibrate: true
      }
    };

    const LETTERS = ["A", "B", "C", "D"];

    // =========================================================================
    // AUDIO (Web Audio API Synthesizer - No External Files Required)
    // =========================================================================
    let audioCtx = null;

    function getAudioContext() {
      if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          audioCtx = new AudioContextClass();
        }
      }
      if (audioCtx && audioCtx.state === "suspended") {
        audioCtx.resume();
      }
      return audioCtx;
    }

    const SoundEffects = {
      click() {
        if (!state.settings.sound) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        try {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(440, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.04);
          gain.gain.setValueAtTime(0.08, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.05);
        } catch (e) {}
      },

      correct() {
        if (!state.settings.sound) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        try {
          const now = ctx.currentTime;
          // Pleasant major arpeggio chime (C5 -> E5 -> G5)
          [523.25, 659.25, 783.99].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);
            gain.gain.setValueAtTime(0, now + idx * 0.08);
            gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.08 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.28);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.3);
          });
        } catch (e) {}
      },

      incorrect() {
        if (!state.settings.sound) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        try {
          const now = ctx.currentTime;
          // Low buzzing error tone
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(160, now);
          osc.frequency.linearRampToValueAtTime(110, now + 0.22);
          gain.gain.setValueAtTime(0.18, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.26);
        } catch (e) {}
      },

      complete() {
        if (!state.settings.sound) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        try {
          const now = ctx.currentTime;
          // Victory fanfare
          const notes = [
            { f: 523.25, t: 0.0, d: 0.12 },
            { f: 659.25, t: 0.12, d: 0.12 },
            { f: 783.99, t: 0.24, d: 0.14 },
            { f: 1046.50, t: 0.38, d: 0.35 }
          ];
          notes.forEach(({ f, t, d }) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(f, now + t);
            gain.gain.setValueAtTime(0, now + t);
            gain.gain.linearRampToValueAtTime(0.2, now + t + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, now + t + d);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + t);
            osc.stop(now + t + d + 0.02);
          });
        } catch (e) {}
      }
    };

    // =========================================================================
    // HAPTIC VIBRATION (Navigator Vibrate API + Fallback CSS Shake)
    // =========================================================================
    const HapticFeedback = {
      light() {
        if (!state.settings.vibrate) return;
        if ("vibrate" in navigator) {
          try { navigator.vibrate(25); } catch (e) {}
        }
      },
      correct() {
        if (!state.settings.vibrate) return;
        if ("vibrate" in navigator) {
          try { navigator.vibrate([40, 50, 60]); } catch (e) {}
        }
      },
      incorrect(element) {
        if (!state.settings.vibrate) return;
        if ("vibrate" in navigator) {
          try { navigator.vibrate([90, 60, 90]); } catch (e) {}
        }
        if (element) {
          element.classList.remove("shake");
          void element.offsetWidth; // trigger reflow
          element.classList.add("shake");
          setTimeout(() => element.classList.remove("shake"), 450);
        }
      }
    };

    // =========================================================================
    // SHUFFLE HELPER (Fisher-Yates)
    // =========================================================================
    function shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    function prepareQuestionData(rawItem, shuffleOpts) {
      if (!shuffleOpts) {
        return {
          ...rawItem,
          options: [...rawItem.options],
          answer: rawItem.answer
        };
      }

      // Map options with original indices to retain the correct answer
      const mapped = rawItem.options.map((text, idx) => ({
        text,
        isCorrect: idx === rawItem.answer
      }));

      const shuffled = shuffleArray(mapped);
      const newAnswerIndex = shuffled.findIndex(item => item.isCorrect);

      return {
        ...rawItem,
        options: shuffled.map(item => item.text),
        answer: newAnswerIndex
      };
    }`;

// Find start of APPLICATION STATE and replace up to START & NAVIGATION HANDLERS
const appStateIndex = js.indexOf('// APPLICATION STATE');
const startNavIndex = js.indexOf('// START & NAVIGATION HANDLERS');

if (appStateIndex === -1 || startNavIndex === -1) {
  console.error('Markers not found');
  process.exit(1);
}

// Read DOM elements block from existing script
const domBlockStart = js.indexOf('// DOM ELEMENTS');
const domBlock = js.substring(domBlockStart, startNavIndex);

console.log('App state index:', appStateIndex, 'Dom block start:', domBlockStart);

fs.writeFileSync('test_marker.txt', 'OK');
