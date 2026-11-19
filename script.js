// =========================================================================
    // COMPLETE QUESTION BANK (VERBATIM FROM 07 QUIZ 1 & 08 QUIZ 1 PDFs)
    // =========================================================================
    const QUIZ_DATA = {
      quiz1: [
        {
          id: "q1-1",
          source: "07 Quiz 1",
          origNum: 1,
          question: "An entrepreneur evaluates whether marketing expenses are justified by comparing campaign revenue to total promotional costs. Which metric is applied?",
          options: [
            "Customer Lifetime Value",
            "Customer Acquisition Cost",
            "Conversion Rate",
            "Return on Investment"
          ],
          answer: 3,
          keywords: ["campaign revenue vs. promotional costs", "expenses justified", "ROI"],
          explanation: "Kinukumpara ng entrepreneur kung sulit ba ang ginastos sa marketing (promotional costs) kumpara sa kinita nito (campaign revenue). Ang tawag sa sukat ng balik ng puhunan o gastos ay Return on Investment (ROI)."
        },
        {
          id: "q1-2",
          source: "07 Quiz 1",
          origNum: 2,
          question: "A start-up notices many website visitors leave after viewing only one page. Which metric best explains this behavior?",
          options: [
            "Bounce rate",
            "Engagement rate",
            "Click-through rate",
            "Net promoter score"
          ],
          answer: 0,
          keywords: ["leave after viewing only one page", "tumalbog agad", "Bounce rate"],
          explanation: "Ang Bounce rate ay ang porsyento ng mga bisita sa website na umalis agad ('tumalbog') pagkatapos tingnan ang isang page lang nang hindi nagki-click sa iba pang bahagi ng site."
        },
        {
          id: "q1-3",
          source: "07 Quiz 1",
          origNum: 3,
          question: "A company sells directly through its own website and through Shopee to increase reach. Which channel strategy is being applied?",
          options: [
            "Indirect channel strategy",
            "Pure digital channel strategy",
            "Hybrid channel strategy",
            "Exclusive distribution strategy"
          ],
          answer: 2,
          keywords: ["own website AND Shopee", "pinagsamang direct at third-party", "Hybrid"],
          explanation: "Pinagsama ng kumpanya ang sarili nilang direct channel (sariling website) at third-party marketplace (Shopee). Kapag dalawa o higit pang magkaibang channel ang pinagsama para mas maraming maabot na customer, Hybrid channel strategy ito."
        },
        {
          id: "q1-4",
          source: "07 Quiz 1",
          origNum: 4,
          question: "During a product launch, a firm focuses on educating a broad audience without attempting immediate sales. Which funnel stage is addressed?",
          options: [
            "Bottom of the Funnel conversion stage",
            "Middle of the Funnel evaluation stage",
            "Post-purchase retention stage",
            "Top of the Funnel awareness stage"
          ],
          answer: 3,
          keywords: ["educating a broad audience", "no immediate sales", "Top of the Funnel (TOFU)"],
          explanation: "Sa pinakataas na bahagi ng funnel—Top of the Funnel (Awareness stage)—ang goal ay magpakilala at mag-educate muna sa malawak na audience para malaman nilang nage-exist ang brand mo, hindi pa hard selling."
        },
        {
          id: "q1-5",
          source: "07 Quiz 1",
          origNum: 5,
          question: "Prospects actively compare alternatives, attend demos, and request case studies before deciding. Which funnel stage best describes this behavior?",
          options: [
            "Awareness stage",
            "Engagement and consideration stage",
            "Conversion and closing stage",
            "Retention and advocacy stage"
          ],
          answer: 1,
          keywords: ["compare alternatives", "attend demos & case studies", "Consideration stage"],
          explanation: "Kapag nagkukumpara na ng options, uma-attend ng product demos, at nagbabasa ng case studies ang prospect, nasa gitna na sila ng funnel—ito ang Engagement and consideration stage."
        },
        {
          id: "q1-6",
          source: "07 Quiz 1",
          origNum: 6,
          question: "A sales representative focuses on removing final objections and finalizing payment terms. This activity aligns with which funnel stage?",
          options: [
            "Awareness development",
            "Lead qualification",
            "Engagement nurturing",
            "Conversion stage"
          ],
          answer: 3,
          keywords: ["removing final objections", "finalizing payment terms", "Conversion stage"],
          explanation: "Ang pagsagot sa mga huling pag-aalinlangan (final objections) at pag-aayos ng bayaran (payment terms) ay ginagawa kapag bibili na ang customer—ito ang Conversion stage."
        },
        {
          id: "q1-7",
          source: "07 Quiz 1",
          origNum: 7,
          question: "A start-up aligns messaging so marketing educates prospects while sales focuses on closing qualified leads. What primary benefit does this alignment provide?",
          options: [
            "Reduced product development costs",
            "Faster employee onboarding",
            "Clear role definition and efficiency",
            "Increased reliance on advertising"
          ],
          answer: 2,
          keywords: ["marketing educates, sales closes", "hatiaan ng trabaho", "Clear role definition"],
          explanation: "Kapag malinaw na marketing ang bahala mag-educate at sales ang bahala mag-close ng deal, walang agawan o kalituhan sa trabaho—nagreresulta ito sa Clear role definition and efficiency."
        },
        {
          id: "q1-8",
          source: "07 Quiz 1",
          origNum: 8,
          question: "A founder launches a product assuming customers will naturally recognize its value without promotion. Which GTM challenge does this reflect?",
          options: [
            "Overuse of performance metrics",
            "Fear of experimentation",
            "Limited distribution planning",
            "Build-it-and-they-will-come mindset"
          ],
          answer: 3,
          keywords: ["assuming customers will naturally recognize", "without promotion", "Build-it-and-they-will-come"],
          explanation: "Isang classic startup mistake ang mag-assume na dahil maganda ang produkto mo ay kusang dadagsa ang buyers kahit walang marketing. Ang tawag dito ay 'Build-it-and-they-will-come mindset'."
        },
        {
          id: "q1-9",
          source: "07 Quiz 1",
          origNum: 9,
          question: "A company defines its value proposition, target market, pricing, and sales channels before launch. Which GTM component is being emphasized?",
          options: [
            "Operational scalability",
            "Product positioning and market entry",
            "Customer service standardization",
            "Internal team restructuring"
          ],
          answer: 1,
          keywords: ["value proposition, target market, pricing, channels", "before launch", "Product positioning"],
          explanation: "Ang pagtatakda ng value proposition, target market, presyo, at kung saan ibebenta ang produkto bago mag-launch ay bahagi ng Product positioning and market entry."
        },
        {
          id: "q1-10",
          source: "07 Quiz 1",
          origNum: 10,
          question: "A company tracks likes and impressions but ignores customer acquisition and revenue metrics. Which GTM mistake is evident?",
          options: [
            "Poor differentiation of the product",
            "Excessive segmentation of the market",
            "Focus on vanity metrics over performance",
            "Overinvestment in sales training"
          ],
          answer: 2,
          keywords: ["likes and impressions", "ignores revenue", "vanity metrics"],
          explanation: "Ang likes, views, at impressions ay tinatawag na 'vanity metrics' dahil maganda lang tingnan sa surface pero hindi direktang nagpapakita ng aktwal na benta o kita."
        },
        {
          id: "q1-11",
          source: "07 Quiz 1",
          origNum: 11,
          question: "A sales team documents each step from prospecting to closing to ensure consistency. What is the main purpose of mapping a sales process?",
          options: [
            "Eliminate marketing need",
            "Build a scalable framework",
            "Shorten development cycles",
            "Reduce customer contact"
          ],
          answer: 1,
          keywords: ["documents each step", "ensure consistency", "scalable framework"],
          explanation: "Idinodokumento ang bawat hakbang mula prospecting hanggang closing para paulit-ulit itong magamit nang maayos kahit lumaki ang team—ito ay para makabuo ng scalable framework."
        },
        {
          id: "q1-12",
          source: "07 Quiz 1",
          origNum: 12,
          question: "A sales representative evaluates whether a lead has budget, authority, need, and timeline. Which stage is being applied?",
          options: [
            "Prospecting",
            "Engagement",
            "Presentation",
            "Qualification"
          ],
          answer: 3,
          keywords: ["Budget, Authority, Need, Timeline (BANT)", "pagsala kung bibili ba", "Qualification"],
          explanation: "Ang BANT (Budget, Authority, Need, Timeline) ay ginagamit para salain kung ang isang lead ay qualified ba talaga at may kakayahang bumili—ito ang Qualification stage."
        },
        {
          id: "q1-13",
          source: "07 Quiz 1",
          origNum: 13,
          question: "Providing tailored demonstrations that address a prospect's specific pain points occurs during which sales stage?",
          options: [
            "Prospecting",
            "Lead qualification",
            "Solution presentation",
            "Post-sale follow-up"
          ],
          answer: 2,
          keywords: ["tailored demonstrations", "address specific pain points", "Solution presentation"],
          explanation: "Kapag ipinapakita mo na sa demo kung paano eksaktong masosolusyunan ng produkto mo ang problema (pain points) ng prospect, nasa Solution presentation stage ka na."
        },
        {
          id: "q1-14",
          source: "07 Quiz 1",
          origNum: 14,
          question: "Discussing pricing concerns and contract terms to reach a mutual agreement reflects which sales stage?",
          options: [
            "Engagement",
            "Negotiation",
            "Prospecting",
            "Qualification"
          ],
          answer: 1,
          keywords: ["pricing concerns & contract terms", "mutual agreement", "Negotiation"],
          explanation: "Ang tawaran sa presyo (pricing concerns) at pag-uusap sa detalye ng kontrata hanggang magkasundo ang parehong panig ay ang Negotiation stage."
        },
        {
          id: "q1-15",
          source: "07 Quiz 1",
          origNum: 15,
          question: "Ensuring customer satisfaction after purchasing and seeking referrals is part of which sales stage?",
          options: [
            "Post-sale follow-up",
            "Lead qualification",
            "Pitch delivery",
            "Closing the sale"
          ],
          answer: 0,
          keywords: ["after purchasing", "seeking referrals", "Post-sale follow-up"],
          explanation: "Hindi nagtatapos ang sales sa bayaran. Ang pagkumusta sa customer pagkatapos nilang bumili (after purchasing) at paghingi ng referrals ay tinatawag na Post-sale follow-up."
        },
        {
          id: "q1-16",
          source: "07 Quiz 1",
          origNum: 16,
          question: "A sales funnel differs from a sales pipeline because the funnel primarily emphasizes:",
          options: [
            "Internal reporting requirements",
            "Visualizing customer drop-off by stage",
            "Employee performance evaluation",
            "Financial forecasting accuracy"
          ],
          answer: 1,
          keywords: ["sales funnel vs. pipeline", "visualizing customer drop-off", "conversion rates per stage"],
          explanation: "Ang sales pipeline ay nakapokus sa mga ginagawa ng salesperson, habang ang sales funnel ay ipinapakita kung ilang customers ang nalalagas o bumibitaw (customer drop-off) sa bawat stage."
        },
        {
          id: "q1-17",
          source: "07 Quiz 1",
          origNum: 17,
          question: "A start-up improves conversion rates after standardizing follow-ups and lead qualification. Which benefit of a mapped sales process is demonstrated?",
          options: [
            "Faster onboarding",
            "Enhanced customer experience",
            "Reduced operational costs",
            "Increased brand awareness"
          ],
          answer: 1,
          keywords: ["standardizing follow-ups", "improves conversion rates", "Enhanced customer experience"],
          explanation: "Dahil maayos at hindi sabog ang follow-ups at qualification, nagiging mas maganda ang karanasan ng mga buyer (Enhanced customer experience), kaya mas marami ang natutuloy bumili."
        },
        {
          id: "q1-18",
          source: "07 Quiz 1",
          origNum: 18,
          question: "A pitch that focuses on benefits, pain points, and a clear call to action reflects which best practice?",
          options: [
            "Feature-heavy explanation",
            "Technical jargon emphasis",
            "Value-driven communication",
            "Aggressive price comparison"
          ],
          answer: 2,
          keywords: ["benefits, pain points, clear CTA", "hindi puro technical features", "Value-driven"],
          explanation: "Sa halip na puro technical specs ang ibida, nakatutok ang pitch sa kung paano gagaan ang buhay ng customer (benefits & pain points). Ito ang Value-driven communication."
        },
        {
          id: "q1-19",
          source: "07 Quiz 1",
          origNum: 19,
          question: "A company adjusts its GTM strategy after testing channels and receiving market feedback. What is the GTM principle?",
          options: [
            "Fixed execution",
            "Continuous iteration",
            "Budget restriction",
            "Market saturation"
          ],
          answer: 1,
          keywords: ["adjusts after testing", "market feedback", "Continuous iteration"],
          explanation: "Ang pag-test, pagkuha ng feedback sa market, at pag-adjust ng strategy nang paulit-ulit hanggang makuha ang pinakaepektibong paraan ay tinatawag na Continuous iteration."
        },
        {
          id: "q1-20",
          source: "07 Quiz 1",
          origNum: 20,
          question: "Marketing builds demand, while sales convert it into revenue. What does this relationship highlight?",
          options: [
            "Their alignment drives sustainable growth",
            "Marketing replaces sales in early stages",
            "Sales operate independently of marketing",
            "Both functions must work in isolation"
          ],
          answer: 0,
          keywords: ["Marketing builds demand + Sales converts", "magkatuwang", "alignment drives growth"],
          explanation: "Magkatuwang ang dalawa: si Marketing ang nagdadala ng interest (demand), at si Sales ang nagsasara nito para maging kita (revenue). Ang pagtutulungan nila ay nagdudulot ng sustainable growth."
        },
        {
          id: "q1-21",
          source: "07 Quiz 1",
          origNum: 21,
          question: "A venture uses the GTM Canvas to outline audience, messaging, channels, and metrics. What is the primary purpose of this tool?",
          options: [
            "Automate digital ad campaigns",
            "Replace the full business plan",
            "Organize GTM into actionable steps",
            "Forecast long-term financial returns"
          ],
          answer: 2,
          keywords: ["GTM Canvas", "outline audience, messaging, channels", "actionable steps"],
          explanation: "Ang GTM Canvas ay isang visual one-page framework para madaling ma-organize ang buong Go-To-Market plan sa malilinaw at actionable steps."
        },
        {
          id: "q1-22",
          source: "07 Quiz 1",
          origNum: 22,
          question: "A GTM strategy is best described as which of the following?",
          options: [
            "A long-term branding philosophy without execution steps",
            "A structured plan for introducing and selling a product",
            "A financial projection focused on break-even analysis",
            "A sales pitch designed for closing negotiations"
          ],
          answer: 1,
          keywords: ["Go-To-Market (GTM) strategy", "structured plan", "introducing and selling"],
          explanation: "Ang Go-To-Market (GTM) strategy ay isang detalyado at structured na plano kung paano ipapakilala, iaabot, at ibebenta ang isang produkto sa target customers nito."
        },
        {
          id: "q1-23",
          source: "07 Quiz 1",
          origNum: 23,
          question: "A start-up has built a technically strong product but struggles to generate revenue despite high website visits. Which business function is most directly responsible for converting this interest into income?",
          options: [
            "Marketing strategy development and brand positioning",
            "Sales execution through direct customer engagement",
            "Product development focused on feature expansion",
            "Operations management for cost optimization"
          ],
          answer: 1,
          keywords: ["high website visits pero walang kita", "converting interest into income", "Sales execution"],
          explanation: "May traffic na sa website (ibig sabihin gumagana ang awareness), pero walang pumapasok na kita. Ang direktang responsable sa pag-convert ng interest patungong aktwal na benta ay Sales execution."
        },
        {
          id: "q1-24",
          source: "07 Quiz 1",
          origNum: 24,
          question: "A founder invests heavily in advertising but notices that customers do not clearly understand how the product solves their problem. Which marketing responsibility is most likely weak?",
          options: [
            "Channel diversification across digital platforms",
            "Brand awareness through repeated exposure",
            "Value communication and problem articulation",
            "Lead volume expansion through paid campaigns"
          ],
          answer: 2,
          keywords: ["customers do not understand how it solves their problem", "malabong mensahe", "Value communication"],
          explanation: "Malakas ang ads (exposure), pero hindi maintindihan ng tao kung ano ang silbi ng produkto sa problema nila. Ibig sabihin, mahina ang Value communication and problem articulation."
        },
        {
          id: "q1-25",
          source: "07 Quiz 1",
          origNum: 25,
          question: "A SaaS start-up publishes blogs, hosts webinars, and offers free tools to educate users before pitching its paid solution. This activity primarily supports which marketing objective?",
          options: [
            "Brand repositioning within a mature market",
            "Lead generation and nurturing over time",
            "Sales negotiation and objection handling",
            "Revenue collection through subscription billing"
          ],
          answer: 1,
          keywords: ["blogs, webinars, free tools", "educate before pitching", "Lead generation & nurturing"],
          explanation: "Sa pamamagitan ng libreng educational content (blogs, webinars, free tools), nakakaipon sila ng contacts (lead generation) at inaalagaan ang tiwala ng mga ito bago bentahan (nurturing)."
        }
      ],

      quiz2: [
        {
          id: "q2-1",
          source: "08 Quiz 1",
          origNum: 1,
          question: "What refers to the total expenditure required to establish and operate a new business?",
          options: [
            "Operating revenue",
            "Financial leverage",
            "Dividend policy",
            "Startup costs"
          ],
          answer: 3,
          keywords: ["total expenditure", "establish and operate a new business", "Startup costs"],
          explanation: "Ang kabuuang gastos na kailangan para itayo at simulan ang operasyon ng isang bagong negosyo ay tinatawag na Startup costs."
        },
        {
          id: "q2-2",
          source: "08 Quiz 1",
          origNum: 2,
          question: "Which startup cost occurs before the business begins operations?",
          options: [
            "Growth cost",
            "Launch cost",
            "Operating cost",
            "Pre-launch cost"
          ],
          answer: 3,
          keywords: ["BEFORE the business begins operations", "bago magbukas", "Pre-launch cost"],
          explanation: "Tandaan ang prefix na 'Pre-' (bago). Lahat ng gastos bago pa magsimula ang aktwal na operasyon ng negosyo ay Pre-launch cost."
        },
        {
          id: "q2-3",
          source: "08 Quiz 1",
          origNum: 3,
          question: "Which startup cost occurs when the business begins serving customers?",
          options: [
            "Pre-venture cost",
            "Growth cost",
            "At-launch cost",
            "Shutdown cost"
          ],
          answer: 2,
          keywords: ["WHEN the business begins serving customers", "pagbubukas mismo", "At-launch cost"],
          explanation: "Kapag nagsimula na mismong magbukas at magserbisyo sa mga unang customer, ang gastos sa yugtong ito ay At-launch cost."
        },
        {
          id: "q2-4",
          source: "08 Quiz 1",
          origNum: 4,
          question: "Which financial statement shows revenues, expenses, and profit over a period?",
          options: [
            "Balance sheet",
            "Cash flow statement",
            "Income statement",
            "Budget report"
          ],
          answer: 2,
          keywords: ["revenues, expenses, and profit", "over a period", "Income statement"],
          explanation: "Ang Income statement (kilala rin bilang Profit & Loss Statement) ang nagpapakita kung kumita ba o nalugi ang negosyo sa loob ng isang period (Revenues minus Expenses = Profit)."
        },
        {
          id: "q2-5",
          source: "08 Quiz 1",
          origNum: 5,
          question: "Which financial statement shows assets, liabilities, and equity at a specific date?",
          options: [
            "Income statement",
            "Balance sheet",
            "Cash flow statement",
            "Budget report"
          ],
          answer: 1,
          keywords: ["assets, liabilities, and equity", "at a specific date", "Balance sheet"],
          explanation: "Ang Balance sheet ay parang 'snapshot' sa isang eksaktong petsa na nagpapakita ng ari-arian (Assets), utang (Liabilities), at puhunan (Equity)."
        },
        {
          id: "q2-6",
          source: "08 Quiz 1",
          origNum: 6,
          question: "What term refers to the direct costs of producing goods or services?",
          options: [
            "Operating expenses",
            "Cost of goods sold",
            "Capital expenditures",
            "Fixed operational costs"
          ],
          answer: 1,
          keywords: ["direct costs of producing goods", "puhunan sa mismong produkto", "Cost of goods sold (COGS)"],
          explanation: "Ang direktang gastos sa paggawa ng produkto o serbisyo (gaya ng raw materials at direct labor) ay tinatawag na Cost of goods sold (COGS)."
        },
        {
          id: "q2-7",
          source: "08 Quiz 1",
          origNum: 7,
          question: "A startup spends money conducting surveys, analyzing competitors, and identifying target customers before launching the business. Which type of startup cost does this represent?",
          options: [
            "Startup costs - initial operations",
            "Prelaunch costs - before operations",
            "Expansion costs - entering markets",
            "Launch costs - start of revenue"
          ],
          answer: 1,
          keywords: ["surveys & market research", "before launching", "Prelaunch costs"],
          explanation: "Ang market research, surveys, at competitor analysis ay ginagawa habang nagpaplano pa lang at hindi pa nagbubukas ang negosyo—kaya ito ay Prelaunch costs - before operations."
        },
        {
          id: "q2-8",
          source: "08 Quiz 1",
          origNum: 8,
          question: "A new business pays for a grand opening event and promotional discounts to attract customers on its first day of operation. Which cost category does this fall under?",
          options: [
            "Prelaunch costs - before operations",
            "Launch costs - at start of operations",
            "Expansion costs - during growth",
            "Capacity costs - new operations"
          ],
          answer: 1,
          keywords: ["grand opening event", "first day of operation", "Launch costs"],
          explanation: "Ang gastos sa grand opening at opening day promos ay nangyayari sa mismong araw ng pagbubukas—kaya ito ay Launch costs - at start of operations."
        },
        {
          id: "q2-9",
          source: "08 Quiz 1",
          origNum: 9,
          question: "An entrepreneur prepares financial projections to estimate future revenues and expenses before launching a venture. What is the main purpose of this activity?",
          options: [
            "To determine future financial performance and capital needs",
            "To eliminate all risks associated with starting a business",
            "To guarantee immediate profitability after operations begin",
            "To replace the need for strategic planning in a venture"
          ],
          answer: 0,
          keywords: ["financial projections", "estimate future revenues & expenses", "capital needs"],
          explanation: "Hindi kayang alisin o i-guarantee ng financial projections ang kita, pero tinutulungan nito ang entrepreneur na tantyahin ang magiging performance at kung magkanong puhunan (capital needs) ang kakailanganin."
        },
        {
          id: "q2-10",
          source: "08 Quiz 1",
          origNum: 10,
          question: "A startup forecasts monthly sales, expenses, and profits for the next three years. Which financial planning component is being developed?",
          options: [
            "Financial projection for evaluating future performance",
            "Historical analysis of past financial statements",
            "Financial audit for regulatory compliance",
            "Dividend policy for shareholder distribution"
          ],
          answer: 0,
          keywords: ["forecasts monthly sales for next 3 years", "future performance", "Financial projection"],
          explanation: "Kapag tinatantya ang benta, gastos, at kita sa hinaharap (next three years), ang ginagawa ay Financial projection for evaluating future performance."
        },
        {
          id: "q2-11",
          source: "08 Quiz 1",
          origNum: 11,
          question: "A manager ensures that sufficient cash is available to pay suppliers and employees even when sales fluctuate. Which financial management function is applied?",
          options: [
            "Investment management for long-term growth",
            "Cash flow management for maintaining liquidity",
            "Revenue recognition for financial reporting",
            "Dividend distribution for shareholder returns"
          ],
          answer: 1,
          keywords: ["sufficient cash available to pay suppliers & employees", "liquidity", "Cash flow management"],
          explanation: "Ang pagtitiyak na laging may pambayad na pera (liquidity) para sa sweldo at suppliers kahit mahina ang benta ay tinatawag na Cash flow management."
        },
        {
          id: "q2-12",
          source: "08 Quiz 1",
          origNum: 12,
          question: "A startup estimates how many units must be sold before revenues equal total costs. Which analytical tool is being used?",
          options: [
            "Break-even - minimum sales",
            "Ratio financial leverage",
            "Sensitivity - impact of changes",
            "Variance - budget deviations"
          ],
          answer: 0,
          keywords: ["revenues equal total costs", "tabla / walang lugi pero wala pang tubo", "Break-even"],
          explanation: "Kapag ang benta (revenues) ay kapantay na ng kabuuang gastos (total costs)—ibig sabihin 'tabla' na at wala nang lugi—ang tawag dito ay Break-even analysis."
        },
        {
          id: "q2-13",
          source: "08 Quiz 1",
          origNum: 13,
          question: "A company analyzes how changes in pricing or costs affect projected profits. Which analytical technique is being applied?",
          options: [
            "Break-even analysis for sales targets",
            "Profit margin analysis for profitability",
            "Sensitivity analysis for financial assumptions",
            "Liquidity analysis for financial stability"
          ],
          answer: 2,
          keywords: ["how changes in pricing or costs affect profits", "'what-if' testing", "Sensitivity analysis"],
          explanation: "Sinusukat ng Sensitivity analysis kung gaano kalaki ang epekto sa kita kapag binago ang isang variable gaya ng presyo o gastos ('what-if' analysis)."
        },
        {
          id: "q2-14",
          source: "08 Quiz 1",
          origNum: 14,
          question: "A startup notices that it is spending large amounts of money acquiring customers compared to the revenue those customers generate. Which metric should be compared?",
          options: [
            "Operating income and net profit margin",
            "Cash burn rate and revenue growth",
            "Customer acquisition cost and lifetime value",
            "Budget variance and operating expenses total"
          ],
          answer: 2,
          keywords: ["money acquiring customers vs. revenue they generate", "CAC vs. LTV"],
          explanation: "Para malaman kung sulit ba ang ginagastos sa pagkuha ng customer, ikinukumpara ang gastos sa pag-acquire sa kanila (Customer Acquisition Cost - CAC) laban sa kabuuang kita na ibabalik nila (Lifetime Value - LTV)."
        },
        {
          id: "q2-15",
          source: "08 Quiz 1",
          origNum: 15,
          question: "A business estimates the cost of materials used to produce goods sold to customers. Which financial terms describe this cost?",
          options: [
            "Capital expenditures on asset purchases",
            "Fixed costs for administrative operations",
            "Operating expenses for daily operations",
            "Cost of goods sold for production"
          ],
          answer: 3,
          keywords: ["cost of materials used to produce goods", "raw materials", "Cost of goods sold"],
          explanation: "Ang halaga ng materyales na direktang ginamit sa paggawa ng ibinebentang produkto ay bahagi ng Cost of goods sold (COGS)."
        },
        {
          id: "q2-16",
          source: "08 Quiz 1",
          origNum: 16,
          question: "A company allocates financial resources to different departments for the upcoming year. Which financial tool is being prepared?",
          options: [
            "Cash flow statement reporting past transactions",
            "Balance sheet summarizing financial position",
            "Income statement measuring profitability levels",
            "Budget outlining projected revenues and expenditures"
          ],
          answer: 3,
          keywords: ["allocates financial resources to departments", "upcoming year", "Budget"],
          explanation: "Ang paghahati-hati ng pondo para sa iba't ibang departamento sa susunod na taon ay ang paggawa ng Budget."
        },
        {
          id: "q2-17",
          source: "08 Quiz 1",
          origNum: 17,
          question: "A firm tracks the rate at which it uses its available cash reserves each month while still generating minimal revenue. Which metric is monitored?",
          options: [
            "Cash burn rate measuring cash consumption",
            "Profit margin measuring profitability efficiency",
            "Net revenue measuring total sales",
            "Operating income measuring operational earnings"
          ],
          answer: 0,
          keywords: ["rate it uses cash reserves each month", "gaano kabilis nauubos ang pera", "Cash burn rate"],
          explanation: "Ang Cash burn rate ang nagsusukat kung gaano kabilis 'nasusunog' o nauubos ang cash reserves ng isang startup kada buwan habang maliit pa ang pumapasok na benta."
        },
        {
          id: "q2-18",
          source: "08 Quiz 1",
          origNum: 18,
          question: "A company measures profit before interest, taxes, depreciation, and amortization to evaluate operating performance. Which metric is this?",
          options: [
            "EBITDA reflecting operational performance efficiency",
            "Net income reflecting final profitability results",
            "Gross margin reflecting product pricing efficiency",
            "Operating expenses reflecting administrative costs"
          ],
          answer: 0,
          keywords: ["Earnings Before Interest, Taxes, Depreciation, Amortization", "EBITDA"],
          explanation: "Literal na acronym ito: Earnings Before Interest, Taxes, Depreciation, and Amortization = EBITDA. Ginagamit ito para makita ang purong kita ng operasyon."
        },
        {
          id: "q2-19",
          source: "08 Quiz 1",
          origNum: 19,
          question: "An entrepreneur compares the total revenue generated per customer with the cost required to acquire that customer. Which concept is being evaluated?",
          options: [
            "Unit economics measuring profitability per customer",
            "Revenue diversification measuring income sources",
            "Cost management measuring operational expenses",
            "Liquidity analysis measuring short-term obligations"
          ],
          answer: 0,
          keywords: ["revenue per customer vs. cost per customer", "profitability per unit/customer", "Unit economics"],
          explanation: "Sinusuri ng Unit economics kung kumikita ba ang negosyo sa bawat isang customer o unit (LTV vs. CAC) bago pa palakihin ang kumpanya."
        },
        {
          id: "q2-20",
          source: "08 Quiz 1",
          origNum: 20,
          question: "A startup evaluates the timing of cash inflows from customers and outflows for supplier payments. Which projection is being analyzed?",
          options: [
            "Cash flow projection for liquidity planning",
            "Revenue projection for profitability planning",
            "Budget projection for operational planning",
            "Capital projection for investment planning"
          ],
          answer: 0,
          keywords: ["timing of cash inflows and outflows", "pasok at labas ng pera", "Cash flow projection"],
          explanation: "Nakatuon ito sa eksaktong timing ng pagpasok ng pera (inflows) at paglabas ng pambayad (outflows)—ito ang Cash flow projection para sa liquidity planning."
        },
        {
          id: "q2-21",
          source: "08 Quiz 1",
          origNum: 21,
          question: "A firm studies how quickly its revenue is increasing over time as the business expands. Which indicator is being monitored?",
          options: [
            "Revenue growth rate indicating expansion potential",
            "Profit margin indicating profitability efficiency",
            "Cash burn rate indicating liquidity consumption",
            "Operating expense ratio indicating cost structure"
          ],
          answer: 0,
          keywords: ["how quickly revenue is increasing over time", "bilis ng paglaki ng benta", "Revenue growth rate"],
          explanation: "Ang bilis ng pagtaas o paglaki ng benta ng negosyo mula sa isang period patungo sa susunod ay ang Revenue growth rate."
        },
        {
          id: "q2-22",
          source: "08 Quiz 1",
          origNum: 22,
          question: "A startup increases marketing campaigns to attract more customers while monitoring acquisition costs. Which financial metric is being analyzed?",
          options: [
            "Customer acquisition cost measuring marketing efficiency",
            "Net profit margin measuring profitability efficiency",
            "Gross revenue growth measuring sales expansion",
            "Cash flow ratio measuring liquidity position"
          ],
          answer: 0,
          keywords: ["attract more customers", "monitoring acquisition costs", "Customer acquisition cost (CAC)"],
          explanation: "Sinusukat ng Customer Acquisition Cost (CAC) kung magkano ang nagagastos sa marketing at sales para makakuha ng isang bagong customer."
        },
        {
          id: "q2-23",
          source: "08 Quiz 1",
          origNum: 23,
          question: "An entrepreneur calculates the expected revenue generated by a customer throughout the entire relationship with the business. Which metric is this?",
          options: [
            "Customer lifetime value - total revenue",
            "Average revenue per user - monthly revenue",
            "Customer acquisition cost - marketing cost",
            "Operating margin - operating profit"
          ],
          answer: 0,
          keywords: ["expected revenue throughout entire relationship", "habang suki ang customer", "Customer lifetime value (LTV)"],
          explanation: "Ang kabuuang kita na inaasahang maiaambag ng isang customer habang tumatangkilik siya sa negosyo ay tinatawag na Customer Lifetime Value (LTV)."
        },
        {
          id: "q2-24",
          source: "08 Quiz 1",
          origNum: 24,
          question: "A startup analyzes projected profits under optimistic, moderate, and pessimistic business conditions. What process is being applied?",
          options: [
            "Scenario planning for outcomes",
            "Financial auditing",
            "Ratio analysis for financial performance",
            "Capital budgeting for asset evaluation"
          ],
          answer: 0,
          keywords: ["optimistic, moderate, and pessimistic conditions", "best-case vs. worst-case", "Scenario planning"],
          explanation: "Ang paghahanda ng projection para sa best-case (optimistic), normal (moderate), at worst-case (pessimistic) situations ay tinatawag na Scenario planning."
        },
        {
          id: "q2-25",
          source: "08 Quiz 1",
          origNum: 25,
          question: "Investors review a startup's market size, team capability, and customer demand before providing capital. What is this process?",
          options: [
            "Investor evaluation of venture potential",
            "Financial auditing of accounting accuracy",
            "Budget planning of operational efficiency",
            "Dividend planning of shareholder returns"
          ],
          answer: 0,
          keywords: ["Investors review market size, team, demand", "before providing capital", "Investor evaluation"],
          explanation: "Bago maglabas ng puhunan ang mga investors, sinusuri muna nila kung may potensyal bang lumaki ang startup (market size, team, at demand)—ito ang Investor evaluation of venture potential."
        }
      ]
    };

    // =========================================================================

    // =========================================================================
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
    // AUDIO (Web Audio API Synthesizer - Self-contained, No External MP3s)
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
          gain.gain.setValueAtTime(0.06, ctx.currentTime);
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
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(160, now);
          osc.frequency.linearRampToValueAtTime(110, now + 0.22);
          gain.gain.setValueAtTime(0.16, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.25);
        } catch (e) {}
      },

      complete() {
        if (!state.settings.sound) return;
        const ctx = getAudioContext();
        if (!ctx) return;
        try {
          const now = ctx.currentTime;
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
    // HAPTIC VIBRATION (Navigator Vibrate API + Screen Shake Fallback)
    // =========================================================================
    const HapticFeedback = {
      light() {
        if (!state.settings.vibrate) return;
        if ("vibrate" in navigator) {
          try { navigator.vibrate(20); } catch (e) {}
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
          try { navigator.vibrate([80, 50, 80]); } catch (e) {}
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
    // SHUFFLE ALGORITHMS (Fisher-Yates)
    // =========================================================================
    function shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    function prepareQuestions(rawList, shuffleQ, shuffleO) {
      let list = rawList.map(raw => {
        if (!shuffleO) {
          return {
            ...raw,
            options: [...raw.options],
            answer: raw.answer
          };
        }
        const mapped = raw.options.map((opt, idx) => ({
          text: opt,
          isCorrect: idx === raw.answer
        }));
        const shuffled = shuffleArray(mapped);
        return {
          ...raw,
          options: shuffled.map(o => o.text),
          answer: shuffled.findIndex(o => o.isCorrect)
        };
      });

      if (shuffleQ) {
        list = shuffleArray(list);
      }
      return list;
    }

    // =========================================================================
    // DOM ELEMENTS
    // =========================================================================
    const homeView = document.getElementById("homeView");
    const quizView = document.getElementById("quizView");
    const resultsView = document.getElementById("resultsView");
    const exitQuizBtn = document.getElementById("exitQuizBtn");
    const homeLogoBtn = document.getElementById("homeLogoBtn");

    // Audio / Vibrate Nav Controls
    const soundToggleBtn = document.getElementById("soundToggleBtn");
    const soundIcon = document.getElementById("soundIcon");
    const vibrateToggleBtn = document.getElementById("vibrateToggleBtn");
    const vibrateIcon = document.getElementById("vibrateIcon");

    // Settings Card Toggles
    const shuffleQuestionsToggle = document.getElementById("shuffleQuestionsToggle");
    const shuffleOptionsToggle = document.getElementById("shuffleOptionsToggle");
    const soundSettingToggle = document.getElementById("soundSettingToggle");
    const vibrateSettingToggle = document.getElementById("vibrateSettingToggle");

    // Mode controls
    const modeButtons = document.querySelectorAll(".segment-btn[data-mode]");
    const modeDescription = document.getElementById("modeDescription");

    // Quiz workspace elements
    const activeDeckTitle = document.getElementById("activeDeckTitle");
    const answeredCounter = document.getElementById("answeredCounter");
    const timerDisplay = document.getElementById("timerDisplay");
    const progressFill = document.getElementById("progressFill");
    const questionNumberLabel = document.getElementById("questionNumberLabel");
    const questionSourceLabel = document.getElementById("questionSourceLabel");
    const flagQuestionBtn = document.getElementById("flagQuestionBtn");
    const flagBtnText = document.getElementById("flagBtnText");
    const questionText = document.getElementById("questionText");
    const optionsContainer = document.getElementById("optionsContainer");
    const feedbackBanner = document.getElementById("feedbackBanner");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const submitQuizBtn = document.getElementById("submitQuizBtn");
    const sidebarSubmitBtn = document.getElementById("sidebarSubmitBtn");
    const navGrid = document.getElementById("navGrid");
    const navProgressText = document.getElementById("navProgressText");
    const navigatorCard = document.getElementById("navigatorCard");
    const mobileGridToggleBtn = document.getElementById("mobileGridToggleBtn");
    const mobileAnsweredCounter = document.getElementById("mobileAnsweredCounter");
    const mobileGridChevron = document.getElementById("mobileGridChevron");

    if (mobileGridToggleBtn && navigatorCard) {
      mobileGridToggleBtn.addEventListener("click", () => {
        SoundEffects.click();
        const isOpen = navigatorCard.classList.toggle("show-mobile");
        if (mobileGridChevron) {
          mobileGridChevron.textContent = isOpen ? "▲" : "▼";
        }
      });
    }

    // Results elements
    const scoreRing = document.getElementById("scoreRing");
    const scorePercent = document.getElementById("scorePercent");
    const scoreFraction = document.getElementById("scoreFraction");
    const resultHeadline = document.getElementById("resultHeadline");
    const resultSubtext = document.getElementById("resultSubtext");
    const statCorrect = document.getElementById("statCorrect");
    const statIncorrect = document.getElementById("statIncorrect");
    const statTime = document.getElementById("statTime");
    const reviewListContainer = document.getElementById("reviewListContainer");

    // =========================================================================
    // INITIALIZATION & PERSISTED SETTINGS & BEST SCORES
    // =========================================================================
    function loadSavedSettings() {
      const savedSound = localStorage.getItem("bm2506_sound");
      if (savedSound !== null) {
        state.settings.sound = savedSound === "true";
      }
      const savedVibrate = localStorage.getItem("bm2506_vibrate");
      if (savedVibrate !== null) {
        state.settings.vibrate = savedVibrate === "true";
      }
      const savedShuffleQ = localStorage.getItem("bm2506_shuffle_q");
      if (savedShuffleQ !== null) {
        state.settings.shuffleQuestions = savedShuffleQ === "true";
      }
      const savedShuffleO = localStorage.getItem("bm2506_shuffle_o");
      if (savedShuffleO !== null) {
        state.settings.shuffleOptions = savedShuffleO === "true";
      }

      updateSettingsUI();
    }

    function updateSettingsUI() {
      if (soundIcon) soundIcon.textContent = state.settings.sound ? "🔊" : "🔇";
      if (soundToggleBtn) soundToggleBtn.classList.toggle("muted", !state.settings.sound);
      if (soundSettingToggle) soundSettingToggle.checked = state.settings.sound;

      if (vibrateIcon) vibrateIcon.textContent = state.settings.vibrate ? "📳" : "📴";
      if (vibrateToggleBtn) vibrateToggleBtn.classList.toggle("muted", !state.settings.vibrate);
      if (vibrateSettingToggle) vibrateSettingToggle.checked = state.settings.vibrate;

      if (shuffleQuestionsToggle) shuffleQuestionsToggle.checked = state.settings.shuffleQuestions;
      if (shuffleOptionsToggle) shuffleOptionsToggle.checked = state.settings.shuffleOptions;
    }

    function toggleSound() {
      state.settings.sound = !state.settings.sound;
      localStorage.setItem("bm2506_sound", state.settings.sound);
      updateSettingsUI();
      if (state.settings.sound) SoundEffects.click();
    }

    function toggleVibrate() {
      state.settings.vibrate = !state.settings.vibrate;
      localStorage.setItem("bm2506_vibrate", state.settings.vibrate);
      updateSettingsUI();
      if (state.settings.vibrate) HapticFeedback.light();
    }

    if (soundToggleBtn) soundToggleBtn.addEventListener("click", toggleSound);
    if (vibrateToggleBtn) vibrateToggleBtn.addEventListener("click", toggleVibrate);

    if (soundSettingToggle) {
      soundSettingToggle.addEventListener("change", (e) => {
        state.settings.sound = e.target.checked;
        localStorage.setItem("bm2506_sound", state.settings.sound);
        updateSettingsUI();
        if (state.settings.sound) SoundEffects.click();
      });
    }

    if (vibrateSettingToggle) {
      vibrateSettingToggle.addEventListener("change", (e) => {
        state.settings.vibrate = e.target.checked;
        localStorage.setItem("bm2506_vibrate", state.settings.vibrate);
        updateSettingsUI();
        if (state.settings.vibrate) HapticFeedback.light();
      });
    }

    if (shuffleQuestionsToggle) {
      shuffleQuestionsToggle.addEventListener("change", (e) => {
        state.settings.shuffleQuestions = e.target.checked;
        localStorage.setItem("bm2506_shuffle_q", state.settings.shuffleQuestions);
        SoundEffects.click();
      });
    }

    if (shuffleOptionsToggle) {
      shuffleOptionsToggle.addEventListener("change", (e) => {
        state.settings.shuffleOptions = e.target.checked;
        localStorage.setItem("bm2506_shuffle_o", state.settings.shuffleOptions);
        SoundEffects.click();
      });
    }

    function loadBestScores() {
      ["quiz1", "quiz2", "all"].forEach(key => {
        const saved = localStorage.getItem(`bm2506_best_${key}`);
        const el = document.getElementById(`best-${key}`);
        if (saved && el) {
          el.textContent = `Best Score: ${saved}`;
        }
      });
    }

    function saveBestScore(key, score, total) {
      const pct = Math.round((score / total) * 100);
      const prevPct = parseInt(localStorage.getItem(`bm2506_best_pct_${key}`) || "-1", 10);
      if (pct >= prevPct) {
        localStorage.setItem(`bm2506_best_pct_${key}`, pct);
        localStorage.setItem(`bm2506_best_${key}`, `${score}/${total} (${pct}%)`);
      }
      loadBestScores();
    }

    // =========================================================================
    // MODE SWITCHING
    // =========================================================================
    modeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        SoundEffects.click();
        HapticFeedback.light();
        modeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.mode = btn.dataset.mode;
        if (state.mode === "practice") {
          modeDescription.textContent = "Practice Mode: Reveals the correct answer immediately after you pick an option.";
        } else {
          modeDescription.textContent = "Exam Mode: Simulates an actual test. Answers are graded only after you submit.";
        }
      });
    });

    // =========================================================================
    // START & NAVIGATION HANDLERS
    // =========================================================================
    document.querySelectorAll(".start-deck-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        SoundEffects.click();
        HapticFeedback.light();
        startQuiz(btn.dataset.deck);
      });
    });

    function startQuiz(deckKey) {
      state.activeDeckKey = deckKey;
      state.currentIndex = 0;
      state.userAnswers = {};
      state.flagged = new Set();
      state.timerSeconds = 0;
      state.isSubmitted = false;

      let rawSet = [];
      if (deckKey === "quiz1") {
        rawSet = QUIZ_DATA.quiz1;
        activeDeckTitle.textContent = "07 Quiz 1 — Go-To-Market & Sales Funnel";
      } else if (deckKey === "quiz2") {
        rawSet = QUIZ_DATA.quiz2;
        activeDeckTitle.textContent = "08 Quiz 1 — Startup Costs & Financial Projections";
      } else {
        rawSet = [...QUIZ_DATA.quiz1, ...QUIZ_DATA.quiz2];
        activeDeckTitle.textContent = "Master Review — Combined (07 Quiz 1 + 08 Quiz 1)";
      }

      // Apply Shuffle Settings
      state.questions = prepareQuestions(
        rawSet,
        state.settings.shuffleQuestions,
        state.settings.shuffleOptions
      );

      switchView("quiz");
      buildNavigator();
      renderQuestion();
      startTimer();
    }

    function switchView(viewName) {
      homeView.classList.add("hidden");
      quizView.classList.add("hidden");
      resultsView.classList.add("hidden");
      exitQuizBtn.classList.add("hidden");

      if (viewName === "home") {
        stopTimer();
        homeView.classList.remove("hidden");
      } else if (viewName === "quiz") {
        quizView.classList.remove("hidden");
        exitQuizBtn.classList.remove("hidden");
      } else if (viewName === "results") {
        stopTimer();
        resultsView.classList.remove("hidden");
        exitQuizBtn.classList.remove("hidden");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function startTimer() {
      stopTimer();
      timerDisplay.textContent = "00:00";
      state.timerInterval = setInterval(() => {
        state.timerSeconds++;
        timerDisplay.textContent = formatTime(state.timerSeconds);
      }, 1000);
    }

    function stopTimer() {
      if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
      }
    }

    function formatTime(secs) {
      const m = String(Math.floor(secs / 60)).padStart(2, "0");
      const s = String(secs % 60).padStart(2, "0");
      return `${m}:${s}`;
    }

    // =========================================================================
    // RENDER QUESTION & OPTIONS
    // =========================================================================
    function renderQuestion() {
      const total = state.questions.length;
      const idx = state.currentIndex;
      const item = state.questions[idx];
      const chosen = state.userAnswers[idx];
      const hasAnswered = chosen !== undefined;

      // Update Top Meta
      questionNumberLabel.textContent = `Question ${idx + 1} of ${total}`;
      questionSourceLabel.textContent = `${item.source} • Item #${item.origNum}`;
      questionText.textContent = `${idx + 1}. ${item.question}`;

      // Flag button state
      if (state.flagged.has(idx)) {
        flagQuestionBtn.classList.add("flagged");
        flagBtnText.textContent = "Flagged";
      } else {
        flagQuestionBtn.classList.remove("flagged");
        flagBtnText.textContent = "Flag";
      }

      // Render Options
      optionsContainer.innerHTML = "";
      item.options.forEach((optText, optIdx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option-item";

        let statusIcon = "";

        if (state.mode === "practice" && hasAnswered) {
          btn.classList.add("locked");
          if (optIdx === item.answer) {
            btn.classList.add("correct");
            statusIcon = "✓";
          } else if (optIdx === chosen && chosen !== item.answer) {
            btn.classList.add("incorrect");
            statusIcon = "✕";
          }
        } else if (hasAnswered && chosen === optIdx) {
          btn.classList.add("selected");
        }

        btn.innerHTML = `
          <span class="option-letter">${LETTERS[optIdx]}</span>
          <span class="option-text">${optText}</span>
          <span class="option-status-icon">${statusIcon}</span>
        `;

        btn.addEventListener("click", () => handleSelectOption(optIdx, btn));
        optionsContainer.appendChild(btn);
      });

      // Instant Feedback Banner (Practice Mode)
      if (state.mode === "practice" && hasAnswered) {
        const keywordsHtml = (item.keywords || [])
          .map(kw => `<span class="keyword-tag">${kw}</span>`)
          .join("");

        feedbackBanner.className = `feedback-banner show ${chosen === item.answer ? "is-correct" : "is-incorrect"}`;
        feedbackBanner.innerHTML = `
          <div class="feedback-header-row">
            ${chosen === item.answer
              ? `<span>✓ Tama! Ang sagot ay <strong>${LETTERS[item.answer]}. ${item.options[item.answer]}</strong>.</span>`
              : `<span>✕ Mali. Ang pinili mo ay <strong>${LETTERS[chosen]}</strong>. Ang tamang sagot ay <strong>${LETTERS[item.answer]}. ${item.options[item.answer]}</strong>.</span>`
            }
          </div>
          <div class="explanation-box">
            <strong>Paliwanag:</strong> ${item.explanation}
          </div>
          <div class="keyword-pill-wrap">
            <span class="keyword-label">Key Words / Clue:</span>
            ${keywordsHtml}
          </div>
        `;
      } else {
        feedbackBanner.className = "feedback-banner";
        feedbackBanner.innerHTML = "";
      }

      // Navigation Buttons
      prevBtn.disabled = idx === 0;
      if (idx === total - 1) {
        nextBtn.classList.add("hidden");
        submitQuizBtn.classList.remove("hidden");
      } else {
        nextBtn.classList.remove("hidden");
        submitQuizBtn.classList.add("hidden");
      }

      updateProgressUI();
      updateNavigatorUI();
    }

    function handleSelectOption(optIdx, element) {
      const idx = state.currentIndex;
      const item = state.questions[idx];

      // In practice mode, lock answer once selected so user learns immediately
      if (state.mode === "practice" && state.userAnswers[idx] !== undefined) {
        return;
      }

      state.userAnswers[idx] = optIdx;

      // Audio & Vibration feedback
      if (state.mode === "practice") {
        const isRight = optIdx === item.answer;
        if (isRight) {
          SoundEffects.correct();
          HapticFeedback.correct();
          if (element) {
            element.classList.add("pop-correct");
          }
        } else {
          SoundEffects.incorrect();
          HapticFeedback.incorrect(element || optionsContainer);
        }
      } else {
        SoundEffects.click();
        HapticFeedback.light();
      }

      renderQuestion();
    }

    function updateProgressUI() {
      const total = state.questions.length;
      const answeredCount = Object.keys(state.userAnswers).length;
      const pct = Math.round((answeredCount / total) * 100);

      answeredCounter.textContent = `Answered: ${answeredCount} / ${total}`;
      navProgressText.textContent = `${answeredCount}/${total}`;
      if (mobileAnsweredCounter) {
        mobileAnsweredCounter.textContent = `${answeredCount}/${total}`;
      }
      progressFill.style.width = `${pct}%`;
    }

    // =========================================================================
    // NAVIGATOR SIDEBAR
    // =========================================================================
    function buildNavigator() {
      navGrid.innerHTML = "";
      state.questions.forEach((_, idx) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "nav-dot";
        dot.textContent = idx + 1;
        dot.addEventListener("click", () => {
          SoundEffects.click();
          HapticFeedback.light();
          state.currentIndex = idx;
          renderQuestion();
        });
        navGrid.appendChild(dot);
      });
    }

    function updateNavigatorUI() {
      const dots = navGrid.querySelectorAll(".nav-dot");
      dots.forEach((dot, idx) => {
        dot.className = "nav-dot";
        if (idx === state.currentIndex) dot.classList.add("current");
        if (state.flagged.has(idx)) dot.classList.add("flagged-dot");

        const ans = state.userAnswers[idx];
        if (ans !== undefined) {
          if (state.mode === "practice") {
            const isRight = ans === state.questions[idx].answer;
            dot.classList.add(isRight ? "correct-dot" : "incorrect-dot");
          } else {
            dot.classList.add("answered");
          }
        }
      });
    }

    // =========================================================================
    // CONTROLS & KEYBOARD SHORTCUTS
    // =========================================================================
    prevBtn.addEventListener("click", () => {
      SoundEffects.click();
      HapticFeedback.light();
      if (state.currentIndex > 0) {
        state.currentIndex--;
        renderQuestion();
      }
    });

    nextBtn.addEventListener("click", () => {
      SoundEffects.click();
      HapticFeedback.light();
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        renderQuestion();
      }
    });

    flagQuestionBtn.addEventListener("click", () => {
      SoundEffects.click();
      HapticFeedback.light();
      const idx = state.currentIndex;
      if (state.flagged.has(idx)) {
        state.flagged.delete(idx);
      } else {
        state.flagged.add(idx);
      }
      renderQuestion();
    });

    function confirmAndSubmit() {
      SoundEffects.click();
      HapticFeedback.light();
      const total = state.questions.length;
      const answeredCount = Object.keys(state.userAnswers).length;
      if (answeredCount < total) {
        const unanswered = total - answeredCount;
        const proceed = confirm(`You still have ${unanswered} unanswered question(s). Do you want to submit anyway?`);
        if (!proceed) return;
      }
      gradeQuiz();
    }

    submitQuizBtn.addEventListener("click", confirmAndSubmit);
    sidebarSubmitBtn.addEventListener("click", confirmAndSubmit);

    exitQuizBtn.addEventListener("click", () => {
      SoundEffects.click();
      HapticFeedback.light();
      if (!state.isSubmitted && Object.keys(state.userAnswers).length > 0) {
        if (!confirm("Exit current quiz? Your current progress will be lost.")) return;
      }
      switchView("home");
    });

    homeLogoBtn.addEventListener("click", () => {
      SoundEffects.click();
      HapticFeedback.light();
      if (!quizView.classList.contains("hidden") && !state.isSubmitted && Object.keys(state.userAnswers).length > 0) {
        if (!confirm("Return to main menu? Your current progress will be lost.")) return;
      }
      switchView("home");
    });

    // Keyboard navigation (A/B/C/D and Left/Right arrows)
    document.addEventListener("keydown", (e) => {
      if (quizView.classList.contains("hidden")) return;
      const key = e.key.toUpperCase();
      if (["A", "B", "C", "D"].includes(key)) {
        handleSelectOption(LETTERS.indexOf(key));
      } else if (e.key === "ArrowRight") {
        if (state.currentIndex < state.questions.length - 1) {
          SoundEffects.click();
          state.currentIndex++;
          renderQuestion();
        }
      } else if (e.key === "ArrowLeft") {
        if (state.currentIndex > 0) {
          SoundEffects.click();
          state.currentIndex--;
          renderQuestion();
        }
      }
    });

    // =========================================================================
    // GRADING & RESULTS REVIEW
    // =========================================================================
    function gradeQuiz() {
      state.isSubmitted = true;
      stopTimer();

      const total = state.questions.length;
      let correctCount = 0;

      state.questions.forEach((item, idx) => {
        if (state.userAnswers[idx] === item.answer) {
          correctCount++;
        }
      });

      const incorrectCount = total - correctCount;
      const pct = Math.round((correctCount / total) * 100);

      saveBestScore(state.activeDeckKey, correctCount, total);

      // Sound & vibration on finish
      SoundEffects.complete();
      if (pct >= 75) {
        HapticFeedback.correct();
      } else {
        HapticFeedback.incorrect();
      }

      // Populate Results UI
      scorePercent.textContent = `${pct}%`;
      scoreFraction.textContent = `${correctCount} / ${total}`;
      statCorrect.textContent = correctCount;
      statIncorrect.textContent = incorrectCount;
      statTime.textContent = formatTime(state.timerSeconds);

      scoreRing.className = "score-ring " + (pct >= 75 ? "pass" : "fail");
      if (pct >= 90) {
        resultHeadline.textContent = "Outstanding Mastery!";
        resultSubtext.textContent = "You nailed almost every question. You're well-prepared for your BM2506 exam.";
      } else if (pct >= 75) {
        resultHeadline.textContent = "Great Job, You Passed!";
        resultSubtext.textContent = "Solid understanding of the material. Review the missed items below to aim for 100%.";
      } else {
        resultHeadline.textContent = "Keep Practicing!";
        resultSubtext.textContent = "Review the answer key below and retake the quiz to boost your retention.";
      }

      renderReviewList("all");
      switchView("results");
    }

    function renderReviewList(filter) {
      reviewListContainer.innerHTML = "";

      state.questions.forEach((item, idx) => {
        const userChoice = state.userAnswers[idx];
        const isCorrect = userChoice === item.answer;

        if (filter === "correct" && !isCorrect) return;
        if (filter === "incorrect" && isCorrect) return;

        const card = document.createElement("div");
        card.className = `review-card ${isCorrect ? "is-right" : "is-wrong"}`;

        let optionsHtml = "";
        item.options.forEach((optText, optIdx) => {
          let cls = "review-opt";
          let badge = "";

          if (optIdx === item.answer) {
            cls += " opt-correct";
            badge = `<span class="badge-mini badge-correct">Correct Answer</span>`;
          } else if (optIdx === userChoice && !isCorrect) {
            cls += " opt-user-wrong";
            badge = `<span class="badge-mini badge-wrong">Your Answer</span>`;
          }

          optionsHtml += `
            <div class="${cls}">
              <span><strong>${LETTERS[optIdx]}.</strong> ${optText}</span>
              ${badge}
            </div>
          `;
        });

        const skippedNote = userChoice === undefined
          ? `<div style="font-size:0.8rem; color:var(--danger); font-weight:600; margin-bottom:0.5rem;">Unanswered</div>`
          : "";

        const keywordsHtml = (item.keywords || [])
          .map(kw => `<span class="keyword-tag">${kw}</span>`)
          .join("");

        card.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
            <span style="font-size:0.78rem; font-weight:700; color:var(--text-muted);">${item.source} • Item #${item.origNum}</span>
            <span style="font-size:0.78rem; font-weight:700; color:${isCorrect ? "var(--success)" : "var(--danger)"};">
              ${isCorrect ? "✓ Correct (1/1 pt)" : "✕ Incorrect (0/1 pt)"}
            </span>
          </div>
          <div class="review-q-title">${idx + 1}. ${item.question}</div>
          ${skippedNote}
          <div class="review-options">${optionsHtml}</div>
          <div class="review-explanation">
            <div style="margin-bottom:0.45rem;"><strong>Paliwanag:</strong> ${item.explanation}</div>
            <div class="keyword-pill-wrap">
              <span class="keyword-label">Key Words / Clue:</span>
              ${keywordsHtml}
            </div>
          </div>
        `;

        reviewListContainer.appendChild(card);
      });

      if (!reviewListContainer.innerHTML) {
        reviewListContainer.innerHTML = `<div class="review-card" style="text-align:center; color:var(--text-muted);">No items match this filter.</div>`;
      }
    }

    // Filter tabs on results page
    document.querySelectorAll(".segment-btn[data-filter]").forEach(btn => {
      btn.addEventListener("click", () => {
        SoundEffects.click();
        document.querySelectorAll(".segment-btn[data-filter]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderReviewList(btn.dataset.filter);
      });
    });

    document.getElementById("retakeQuizBtn").addEventListener("click", () => {
      SoundEffects.click();
      HapticFeedback.light();
      startQuiz(state.activeDeckKey);
    });

    document.getElementById("backToMenuFromResultsBtn").addEventListener("click", () => {
      SoundEffects.click();
      HapticFeedback.light();
      switchView("home");
    });

    // Boot
    loadSavedSettings();
    loadBestScores();
