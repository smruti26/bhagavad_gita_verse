export interface Verse {
  id: number;
  chapter: number;
  verse: number;
  sanskrit: string;
  translation: string;
  meaning: string;
  practicalGuidance: string;
  tags: string[];
}

export const verses: Verse[] = [
  {
    id: 1,
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty.",
    meaning: "This verse teaches us to focus on our efforts and actions, not on the outcomes. Anxiety often comes from being too attached to results. By focusing on what we can control - our actions - we free ourselves from the burden of worrying about what we cannot control.",
    practicalGuidance: "When feeling overwhelmed by expectations or fear of failure, remind yourself to focus on the process. Do your best in your work, studies, or relationships without obsessing over outcomes. This mindset reduces anxiety and brings peace.",
    tags: ["anxiety", "work stress", "perfectionism", "letting go"]
  },
  {
    id: 2,
    chapter: 2,
    verse: 14,
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः। आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    translation: "O son of Kunti, the contact between the senses and the sense objects gives rise to fleeting perceptions of happiness and distress. These are non-permanent, and come and go like the winter and summer seasons. O descendant of Bharat, one must learn to tolerate them without being disturbed.",
    meaning: "Life is filled with ups and downs, pleasure and pain. These experiences are temporary and will pass. Understanding this helps us navigate difficult times with patience and resilience.",
    practicalGuidance: "When going through depression or hard times, remember: this too shall pass. Just as winter gives way to spring, your current pain will transform. Don't identify yourself with your temporary feelings. Weather the storm with patience.",
    tags: ["depression", "grief", "impermanence", "resilience"]
  },
  {
    id: 3,
    chapter: 6,
    verse: 5,
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    translation: "A person should uplift themselves by their own mind, not degrade themselves. For the mind can be the friend and also the enemy of the self.",
    meaning: "You are your own best friend or worst enemy, depending on how you use your mind. Your thoughts have the power to either lift you up or bring you down.",
    practicalGuidance: "Practice self-compassion. When negative thoughts arise, consciously replace them with kind, encouraging words. Talk to yourself as you would to a dear friend. Your inner dialogue shapes your reality.",
    tags: ["self-worth", "negative thoughts", "self-compassion", "mental health"]
  },
  {
    id: 4,
    chapter: 2,
    verse: 56,
    sanskrit: "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः। वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते॥",
    translation: "One who is not disturbed in mind even amidst the threefold miseries, who is not elated when there is happiness, and who is free from attachment, fear and anger, is called a sage of steady mind.",
    meaning: "True peace comes from maintaining equanimity in all situations. Not being overly excited by success or devastated by failure creates inner stability.",
    practicalGuidance: "Build emotional resilience by practicing mindfulness. When good things happen, enjoy them but don't cling. When difficulties arise, face them calmly without panic. This balanced approach reduces emotional suffering.",
    tags: ["equanimity", "emotional balance", "peace", "mindfulness"]
  },
  {
    id: 5,
    chapter: 18,
    verse: 78,
    sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
    translation: "Wherever there is Krishna, the master of all mystics, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality.",
    meaning: "When we align ourselves with divine consciousness and act with righteousness, success and well-being naturally follow.",
    practicalGuidance: "Combine spiritual practice (meditation, prayer) with dedicated action. When you feel lost, reconnect with your values and higher purpose. This combination brings clarity and success.",
    tags: ["purpose", "spirituality", "success", "alignment"]
  },
  {
    id: 6,
    chapter: 6,
    verse: 35,
    sanskrit: "श्रीभगवानुवाच असंशयं महाबाहो मनो दुर्निग्रहं चलम्। अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते॥",
    translation: "Lord Krishna said: O mighty-armed son of Kunti, it is undoubtedly very difficult to curb the restless mind, but it is possible by suitable practice and by detachment.",
    meaning: "The mind is naturally restless and difficult to control, but through consistent practice and letting go of attachments, we can master it.",
    practicalGuidance: "Don't be discouraged if your mind wanders during meditation or if anxious thoughts persist. With daily practice of mindfulness, meditation, or prayer, you will gradually gain control. Be patient with yourself.",
    tags: ["meditation", "restless mind", "practice", "patience"]
  },
  {
    id: 7,
    chapter: 3,
    verse: 30,
    sanskrit: "मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा। निराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः॥",
    translation: "Therefore, O Arjuna, surrender all your works unto Me, with full knowledge of Me, without desires for profit, with no claims to proprietorship, and free from lethargy, fight.",
    meaning: "Surrender the fruits of your actions to a higher power. Act without being driven by ego, desire, or laziness.",
    practicalGuidance: "When overwhelmed by responsibilities, offer your work as service to something greater than yourself. This removes the burden of personal anxiety and brings lightness to your tasks.",
    tags: ["surrender", "service", "ego", "overwhelm"]
  },
  {
    id: 8,
    chapter: 2,
    verse: 62,
    sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्संजायते कामः कामात्क्रोधोऽभिजायते॥",
    translation: "While contemplating the objects of the senses, a person develops attachment for them, and from such attachment lust develops, and from lust anger arises.",
    meaning: "Our suffering often begins with dwelling on desires. This creates attachment, which leads to frustration and anger when we don't get what we want.",
    practicalGuidance: "Be mindful of what you feed your mind. Limit time on social media comparing yourself to others. Reduce consumption of content that triggers envy or dissatisfaction. Protect your mental space.",
    tags: ["attachment", "desire", "social media", "comparison"]
  },
  {
    id: 9,
    chapter: 2,
    verse: 63,
    sanskrit: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः। स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
    translation: "From anger, delusion arises, and from delusion bewilderment of memory. When memory is bewildered, intelligence is lost, and when intelligence is lost, one falls down again into the material pool.",
    meaning: "Anger clouds our judgment and leads to poor decisions. It creates a downward spiral affecting our memory, intelligence, and ultimately our well-being.",
    practicalGuidance: "When you feel anger rising, pause before reacting. Take deep breaths, walk away if needed, and return to the situation when calm. Anger management protects your relationships and peace of mind.",
    tags: ["anger", "emotional control", "relationships", "decision making"]
  },
  {
    id: 10,
    chapter: 6,
    verse: 17,
    sanskrit: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु। युक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥",
    translation: "He who is temperate in his habits of eating, sleeping, working and recreation can mitigate all sorrows by practicing the yoga system.",
    meaning: "Balance in daily habits is essential for mental and physical well-being. Moderation in all aspects of life reduces suffering.",
    practicalGuidance: "Create a balanced routine: regular sleep schedule, healthy meals, moderate exercise, and time for relaxation. These simple habits are foundational to managing depression and anxiety.",
    tags: ["routine", "balance", "self-care", "lifestyle"]
  },
  {
    id: 11,
    chapter: 12,
    verse: 13,
    sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च। निर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥",
    translation: "One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, who is tolerant.",
    meaning: "Cultivating friendliness, compassion, humility, and tolerance towards all beings brings inner peace and reduces conflict.",
    practicalGuidance: "Practice kindness not just to others, but to yourself. Release grudges and practice forgiveness. This lightens your emotional burden and opens your heart to peace.",
    tags: ["compassion", "forgiveness", "kindness", "peace"]
  },
  {
    id: 12,
    chapter: 4,
    verse: 38,
    sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते। तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥",
    translation: "In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism. And one who has achieved this enjoys the self within himself in due course of time.",
    meaning: "True wisdom and self-knowledge are the most purifying forces. Through dedicated spiritual practice, you will eventually find peace within yourself.",
    practicalGuidance: "Invest time in learning about yourself through reflection, therapy, or spiritual study. Self-knowledge is the key to lasting happiness and peace. The journey takes time, but it's worth it.",
    tags: ["self-knowledge", "wisdom", "growth", "patience"]
  },
  {
    id: 13,
    chapter: 5,
    verse: 21,
    sanskrit: "बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम्। स ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते॥",
    translation: "Such a liberated person is not attracted to material sense pleasure or external objects but is always in trance, enjoying the pleasure within. In this way, the self-realized person enjoys unlimited happiness.",
    meaning: "True, lasting happiness comes from within, not from external possessions or circumstances. Inner peace is independent of what's happening around you.",
    practicalGuidance: "When feeling empty or seeking happiness through shopping, relationships, or achievements, turn inward. Practice meditation or activities that connect you to your inner self. External things provide temporary joy; inner peace is permanent.",
    tags: ["inner peace", "happiness", "materialism", "contentment"]
  },
  {
    id: 14,
    chapter: 6,
    verse: 19,
    sanskrit: "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता। योगिनो यतचित्तस्य युञ्जतो योगमात्मनः॥",
    translation: "As a lamp in a windless place does not waver, so the transcendentalist, whose mind is controlled, remains always steady in his meditation on the transcendent self.",
    meaning: "A focused, controlled mind remains steady and undisturbed, just like a flame protected from the wind.",
    practicalGuidance: "Create a calm mental space through regular meditation. Find a quiet time each day to sit in stillness. This practice builds mental stability that helps you remain centered during life's storms.",
    tags: ["meditation", "focus", "stability", "calmness"]
  },
  {
    id: 15,
    chapter: 9,
    verse: 22,
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    translation: "But those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have.",
    meaning: "When you connect with the divine with sincere devotion and faith, you are taken care of. Your needs are met, and you are protected.",
    practicalGuidance: "When feeling alone or unsupported, develop a relationship with the divine through prayer or meditation. Faith provides comfort and the assurance that you're not alone in your struggles.",
    tags: ["faith", "support", "divine connection", "loneliness"]
  },
  {
    id: 16,
    chapter: 18,
    verse: 66,
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    translation: "Abandon all varieties of dharmas and simply surrender unto Me alone. I shall liberate you from all sinful reactions; do not fear.",
    meaning: "Let go of all your worries and surrender to the divine. You will be freed from your burdens and there's nothing to fear.",
    practicalGuidance: "When anxiety about past mistakes or future outcomes overwhelms you, practice surrender. Release your grip on control and trust that things will work out. This surrender brings immense relief.",
    tags: ["surrender", "fear", "guilt", "trust"]
  },
  {
    id: 17,
    chapter: 3,
    verse: 42,
    sanskrit: "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः। मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः॥",
    translation: "The working senses are superior to dull matter; mind is higher than the senses; intelligence is still higher than the mind; and he [the soul] is even higher than the intelligence.",
    meaning: "There's a hierarchy in our being: senses, mind, intelligence, and soul. Understanding this helps us not be controlled by our senses and emotions.",
    practicalGuidance: "When impulses or emotions threaten to control you, activate your higher intelligence. Pause, reflect, and make conscious choices rather than reacting automatically. You are more than your emotions.",
    tags: ["self-control", "awareness", "impulses", "consciousness"]
  },
  {
    id: 18,
    chapter: 2,
    verse: 40,
    sanskrit: "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते। स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्॥",
    translation: "In this endeavor there is no loss or diminution, and a little advancement on this path can protect one from the most dangerous type of fear.",
    meaning: "Every small step on the spiritual path counts. Even a little progress protects you from great fear and brings benefit.",
    practicalGuidance: "Don't be discouraged if you can't meditate for long or if your spiritual practice feels small. Every moment of mindfulness, every prayer, every kind act counts. Small steps lead to big changes.",
    tags: ["progress", "encouragement", "small steps", "hope"]
  },
  {
    id: 19,
    chapter: 6,
    verse: 22,
    sanskrit: "यं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः। यस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते॥",
    translation: "Upon gaining this, one thinks there is no greater gain. Being situated in this position, one is never shaken, even in the midst of greatest difficulty.",
    meaning: "When you find true inner peace and spiritual connection, nothing external can shake you. This is the ultimate treasure.",
    practicalGuidance: "Seek the treasure of inner peace above all external achievements. Once you have it, no external crisis can truly disturb you. This is true security.",
    tags: ["inner peace", "security", "unshakeable", "spiritual goal"]
  },
  {
    id: 20,
    chapter: 16,
    verse: 1,
    sanskrit: "श्रीभगवानुवाच अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः। दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥",
    translation: "The Supreme Personality of Godhead said: Fearlessness, purification of one's existence, cultivation of spiritual knowledge, charity, self-control, performance of sacrifice, study of the scriptures, austerity, simplicity...",
    meaning: "Divine qualities include fearlessness, purity, knowledge, charity, self-control, and simplicity. Cultivating these brings you closer to your highest self.",
    practicalGuidance: "Choose one quality to work on each month: practice fearlessness in facing challenges, simplicity in lifestyle, or self-control in habits. Gradually building these qualities transforms your character.",
    tags: ["self-improvement", "virtues", "character", "fearlessness"]
  },
  {
    id: 21,
    chapter: 16,
    verse: 2,
    sanskrit: "अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम्। दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम्॥",
    translation: "Nonviolence, truthfulness, freedom from anger, renunciation, tranquility, aversion to faultfinding, compassion, freedom from covetousness, gentleness, modesty, steady determination...",
    meaning: "More divine qualities: non-violence, truthfulness, freedom from anger, compassion, and gentleness. These create harmonious relationships and inner peace.",
    practicalGuidance: "In relationships and daily interactions, practice these qualities. Speak truth with kindness, be gentle in your approach, show compassion. These transform both your inner world and external relationships.",
    tags: ["relationships", "compassion", "gentleness", "truth"]
  },
  {
    id: 22,
    chapter: 13,
    verse: 8,
    sanskrit: "अमानित्वमदम्���ित्वमहिंसा क्षान्तिरार्जवम्। आचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः॥",
    translation: "Humility, pridelessness, nonviolence, tolerance, simplicity, approaching a bona fide spiritual master, cleanliness, steadiness, self-control...",
    meaning: "Knowledge begins with humility and being free from pride. Add tolerance, cleanliness, steadiness, and self-control.",
    practicalGuidance: "Stay humble in success and don't let pride create distance in relationships. Maintain physical and mental cleanliness through good habits. These practices keep you grounded and peaceful.",
    tags: ["humility", "self-control", "cleanliness", "steadiness"]
  },
  {
    id: 23,
    chapter: 4,
    verse: 39,
    sanskrit: "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः। ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥",
    translation: "A faithful man who is dedicated to transcendental knowledge and who subdues his senses is eligible to achieve such knowledge, and having achieved it he quickly attains the supreme spiritual peace.",
    meaning: "Those who approach wisdom with faith, dedication, and self-control gain knowledge, which quickly leads to supreme peace.",
    practicalGuidance: "Approach your healing journey with faith. Be dedicated to learning and growing. Control impulses that harm you. Peace will come faster than you think.",
    tags: ["faith", "dedication", "peace", "healing"]
  },
  {
    id: 24,
    chapter: 17,
    verse: 15,
    sanskrit: "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्। स्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते॥",
    translation: "Austerity of speech consists in speaking words that are truthful, pleasing, beneficial, and not agitating to others, and also in regularly reciting Vedic literature.",
    meaning: "Speak truth that is kind and helpful. Words should uplift, not disturb. Regular study of wisdom texts purifies the mind.",
    practicalGuidance: "Before speaking, ask: Is it true? Is it kind? Is it necessary? This practice improves all your relationships and reduces conflict. Also, read uplifting spiritual or philosophical texts regularly.",
    tags: ["communication", "speech", "kindness", "truth"]
  },
  {
    id: 25,
    chapter: 6,
    verse: 25,
    sanskrit: "शनैः शनैरुपरमेद्बुद्ध्या धृतिगृहीतया। आत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत्॥",
    translation: "Gradually, step by step, one should become situated in trance by means of intelligence sustained by full conviction, and thus the mind should be fixed on the self alone and should think of nothing else.",
    meaning: "Progress in meditation happens gradually. Through sustained practice and intelligence, fix your mind on the self and let go of scattered thoughts.",
    practicalGuidance: "Don't expect instant results in meditation or healing. Progress comes step by step. Be patient with yourself. Each day of practice, even if imperfect, brings you closer to peace.",
    tags: ["meditation", "gradual progress", "patience", "persistence"]
  },
  {
    id: 26,
    chapter: 2,
    verse: 20,
    sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥",
    translation: "For the soul there is neither birth nor death at any time. He has not come into being, does not come into being, and will not come into being. He is unborn, eternal, ever-existing and primeval. He is not slain when the body is slain.",
    meaning: "Your true self, the soul, is eternal and unchanging. Understanding this removes the fear of death and gives perspective on life's challenges.",
    practicalGuidance: "When facing mortality anxiety or existential dread, remember you are more than your body. Your essence is eternal. This perspective can ease fear and bring profound peace.",
    tags: ["mortality", "eternal soul", "existential", "fear of death"]
  },
  {
    id: 27,
    chapter: 2,
    verse: 22,
    sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि। तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही॥",
    translation: "As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.",
    meaning: "Just as we change worn-out clothes, the soul takes on new bodies. This metaphor helps us understand death and reincarnation naturally.",
    practicalGuidance: "Don't cling too tightly to your current identity or circumstances. Life is about growth and transformation. Embrace change as a natural part of existence, like changing clothes.",
    tags: ["change", "transformation", "letting go", "reincarnation"]
  },
  {
    id: 28,
    chapter: 2,
    verse: 38,
    sanskrit: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ। ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि॥",
    translation: "Do thou fight for the sake of fighting, without considering happiness or distress, loss or gain, victory or defeat—and by so doing you shall never incur sin.",
    meaning: "Engage in life's battles with equanimity, not swayed by outcomes. This attitude prevents accumulation of negative karma and mental distress.",
    practicalGuidance: "Face life's challenges with courage, regardless of the outcome. Do what's right without calculating whether you'll win or lose. This fearless engagement in life prevents regret and builds character.",
    tags: ["courage", "duty", "equanimity", "fearlessness"]
  },
  {
    id: 29,
    chapter: 3,
    verse: 13,
    sanskrit: "यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः। भुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात्॥",
    translation: "The spiritually-minded, who eat food that is offered first for sacrifice, are released from all kinds of sin. Others, who cook food for their own enjoyment, verily eat only sin.",
    meaning: "Those who share and offer before consuming are freed from negativity. Self-centered living accumulates problems.",
    practicalGuidance: "Practice gratitude before meals and share your blessings. Cook for others, volunteer, give to those in need. Moving from self-centeredness to service transforms your life and brings joy.",
    tags: ["service", "gratitude", "sharing", "selflessness"]
  },
  {
    id: 30,
    chapter: 3,
    verse: 8,
    sanskrit: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः। शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः॥",
    translation: "Perform your prescribed duty, for doing so is better than not working. One cannot even maintain one's physical body without work.",
    meaning: "Action is superior to inaction. Even basic survival requires effort. Engage actively with life rather than withdrawing.",
    practicalGuidance: "When depression makes you want to stay in bed, take small actions. Get up, shower, eat a meal, take a walk. Small actions break the paralysis of depression and create momentum for recovery.",
    tags: ["depression", "action", "momentum", "engagement"]
  },
  {
    id: 31,
    chapter: 6,
    verse: 16,
    sanskrit: "नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः। न चाति स्वप्नशीलस्य जाग्रतो नैव चार्जुन॥",
    translation: "There is no possibility of one's becoming a yogi, O Arjuna, if one eats too much or eats too little, sleeps too much or does not sleep enough.",
    meaning: "Balance is key. Extremes in eating or sleeping habits prevent inner peace and spiritual progress.",
    practicalGuidance: "Avoid extremes. Don't overeat or starve, oversleep or severely restrict sleep. Find your body's natural rhythm and honor it. Balance in physical habits supports mental health.",
    tags: ["balance", "eating habits", "sleep", "moderation"]
  },
  {
    id: 32,
    chapter: 4,
    verse: 18,
    sanskrit: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः। स बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत्॥",
    translation: "One who sees inaction in action, and action in inaction, is intelligent among men, and he is in the transcendental position, although engaged in all sorts of activities.",
    meaning: "True wisdom lies in understanding that not all activity is productive action, and not all stillness is inaction. Quality matters more than quantity.",
    practicalGuidance: "Busy-ness isn't always productivity. Sometimes doing nothing outwardly while processing internally is important work. Other times, you need less contemplation and more action. Develop wisdom to know the difference.",
    tags: ["wisdom", "action vs inaction", "productivity", "discernment"]
  },
  {
    id: 33,
    chapter: 5,
    verse: 10,
    sanskrit: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः। लिप्यते न स पापेन पद्मपत्रमिवाम्भसा॥",
    translation: "One who performs his duty without attachment, surrendering the results unto the Supreme Lord, is unaffected by sinful action, as the lotus leaf is untouched by water.",
    meaning: "Like a lotus leaf that remains dry despite being surrounded by water, one who acts without attachment remains untouched by negative consequences.",
    practicalGuidance: "Do your duties without emotional entanglement in outcomes. Stay involved but not attached. Like the lotus, be in the world but not consumed by it. This creates resilience.",
    tags: ["detachment", "resilience", "duty", "lotus metaphor"]
  },
  {
    id: 34,
    chapter: 5,
    verse: 23,
    sanskrit: "शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात्। कामक्रोधोद्भवं वेगं स युक्तः स सुखी नरः॥",
    translation: "Before giving up this present body, if one is able to tolerate the urges of the material senses and check the force of desire and anger, one is well situated and is happy in this world.",
    meaning: "Mastering impulses of desire and anger leads to happiness. Self-control is the key to contentment.",
    practicalGuidance: "When you feel the urge to react in anger or act on unhealthy desires, pause. Count to ten, breathe, and choose your response consciously. This self-mastery brings lasting happiness.",
    tags: ["self-control", "impulse management", "anger", "desire"]
  },
  {
    id: 35,
    chapter: 7,
    verse: 19,
    sanskrit: "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते। वासुदेवः सर्वमिति स महात्मा सुदुर्लभः॥",
    translation: "After many births and deaths, he who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes and all that is. Such a great soul is very rare.",
    meaning: "After much seeking and experience, one realizes the divine is everything and everywhere. This realization is rare and precious.",
    practicalGuidance: "Your spiritual journey may take time, and that's okay. Each experience teaches you something. Eventually, you'll realize everything is connected to the divine. Be patient with your path.",
    tags: ["spiritual journey", "realization", "patience", "divine connection"]
  },
  {
    id: 36,
    chapter: 9,
    verse: 27,
    sanskrit: "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत्। यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम्॥",
    translation: "Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform—do that, O son of Kunti, as an offering to Me.",
    meaning: "Every action, big or small, can be offered as worship. This transforms mundane activities into spiritual practice.",
    practicalGuidance: "Dedicate your daily activities—work, cooking, studying—as offerings to the divine. This simple shift in perspective makes every moment sacred and meaningful, reducing feelings of meaninglessness.",
    tags: ["purpose", "sacred living", "meaningfulness", "dedication"]
  },
  {
    id: 37,
    chapter: 10,
    verse: 10,
    sanskrit: "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम्। ददामि बुद्धियोगं तं येन मामुपयान्ति ते॥",
    translation: "To those who are constantly devoted to serving Me with love, I give the understanding by which they can come to Me.",
    meaning: "Those who practice devotion with love receive divine guidance and understanding that leads them to ultimate union with the divine.",
    practicalGuidance: "When feeling lost, deepen your spiritual practice with love and sincerity. Ask for guidance through prayer or meditation. The answers you need will come when you're ready to receive them.",
    tags: ["guidance", "devotion", "divine help", "prayer"]
  },
  {
    id: 38,
    chapter: 10,
    verse: 11,
    sanskrit: "तेषामेवानुकम्पार्थमहमज्ञानजं तमः। नाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता॥",
    translation: "To show them special mercy, I, dwelling in their hearts, destroy with the shining lamp of knowledge the darkness born of ignorance.",
    meaning: "The divine, residing within your heart, removes your ignorance with the light of knowledge out of compassion for you.",
    practicalGuidance: "Trust that the wisdom you need is already within you. Through quiet reflection and meditation, access your inner knowing. The divine within guides you when you listen.",
    tags: ["inner wisdom", "divine within", "intuition", "guidance"]
  },
  {
    id: 39,
    chapter: 11,
    verse: 55,
    sanskrit: "मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः। निर्वैरः सर्वभूतेषु यः स मामेति पाण्डव॥",
    translation: "My dear Arjuna, he who engages in My pure devotional service, free from the contaminations of fruitive activities and mental speculation, he who works for Me, who makes Me the supreme goal of his life, and who is friendly to every living being—he certainly comes to Me.",
    meaning: "One who serves with devotion, makes the divine their goal, and is friendly to all beings attains union with the divine.",
    practicalGuidance: "Set your spiritual growth as your life's priority. Be kind to everyone you meet. Serve others without expecting anything in return. This path leads to fulfillment.",
    tags: ["service", "friendliness", "spiritual goal", "devotion"]
  },
  {
    id: 40,
    chapter: 12,
    verse: 15,
    sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः। हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
    translation: "He for whom no one is put into difficulty and who is not disturbed by anyone, who is equipoised in happiness and distress, fear and anxiety, is very dear to Me.",
    meaning: "One who doesn't trouble others and isn't troubled by them, who remains balanced through all emotions, is beloved by the divine.",
    practicalGuidance: "Work on being a peaceful presence. Don't create drama or disturb others. Develop equanimity so others' actions don't disturb you. This creates harmony in your relationships and within yourself.",
    tags: ["equanimity", "peace", "non-disturbance", "harmony"]
  },
  {
    id: 41,
    chapter: 12,
    verse: 16,
    sanskrit: "अनपेक्षः शुचिर्दक्ष उदासीनो गतव्यथः। सर्वारम्भपरित्यागी यो मद्भक्तः स मे प्रियः॥",
    translation: "My devotee who is not dependent on the ordinary course of activities, who is pure, expert, without cares, free from all pains, and not striving for some result, is very dear to Me.",
    meaning: "One who is independent, pure, skilled, carefree, pain-free, and doesn't chase results is dear to the divine.",
    practicalGuidance: "Develop self-reliance. Keep your intentions pure. Build competence in your field. Let go of worries about outcomes. This approach brings peace and success.",
    tags: ["self-reliance", "purity", "competence", "carefree"]
  },
  {
    id: 42,
    chapter: 13,
    verse: 11,
    sanskrit: "इन्द्रियार्थेषु वैराग्यमनहङ्कार एव च। जन्ममृत्युजराव्याधिदुःखदोषानुदर्शनम्॥",
    translation: "Detachment from sense objects, absence of false ego, and perception of the evils of birth, death, old age and disease.",
    meaning: "Wisdom includes detachment from sensory pleasures, humility, and awareness of life's inevitable challenges like aging, disease, and death.",
    practicalGuidance: "Accept aging and life's difficulties as natural. Don't cling desperately to youth or health. Acceptance brings peace. Also, free yourself from ego—it causes unnecessary suffering.",
    tags: ["acceptance", "aging", "mortality", "ego"]
  },
  {
    id: 43,
    chapter: 13,
    verse: 12,
    sanskrit: "असक्तिरनभिष्वङ्गः पुत्रदारगृहादिषु। नित्यं च समचित्तत्वमिष्टानिष्टोपपत्तिषु॥",
    translation: "Non-attachment to children, wife, home and the rest, and even-mindedness amid pleasant and unpleasant events.",
    meaning: "Wisdom includes not being overly attached to family and possessions, and maintaining balance in favorable and unfavorable circumstances.",
    practicalGuidance: "Love your family without possessiveness. Enjoy your home without clinging to it. This healthy detachment prevents suffering when circumstances change, as they inevitably do.",
    tags: ["healthy detachment", "family", "balance", "non-attachment"]
  },
  {
    id: 44,
    chapter: 14,
    verse: 22,
    sanskrit: "श्रीभगवानुवाच प्रकाशं च प्रवृत्तिं च मोहमेव च पाण्डव। न द्वेष्टि सम्प्रवृत्तानि न निवृत्तानि काङ्क्षति॥",
    translation: "The Supreme Personality of Godhead said: O son of Pandu, he who does not hate illumination, attachment and delusion when they are present or long for them when they disappear...",
    meaning: "The liberated person doesn't hate clarity, activity, or confusion when present, nor long for them when absent. Complete acceptance of all states.",
    practicalGuidance: "Don't resist your current state, whether you're feeling clear, active, or confused. All states are temporary and part of the human experience. Acceptance reduces suffering.",
    tags: ["acceptance", "non-resistance", "all states", "liberation"]
  },
  {
    id: 45,
    chapter: 14,
    verse: 24,
    sanskrit: "समदुःखसुखः स्वस्थः समलोष्टाश्मकाञ्चनः। तुल्यप्रियाप्रियो धीरस्तुल्यनिन्दात्मसंस्तुतिः॥",
    translation: "One who is equal in happiness and distress, self-situated, who regards a lump of earth, a stone and gold as equal, who is equal toward the desirable and the undesirable, who is steady, and who is equal in praise and blame...",
    meaning: "The wise person treats pleasure and pain, praise and criticism, valuable and worthless things with equal regard.",
    practicalGuidance: "Don't let praise inflate your ego or criticism destroy you. Treat success and failure as equal teachers. This equanimity creates unshakeable inner peace.",
    tags: ["equanimity", "praise and criticism", "stability", "inner peace"]
  },
  {
    id: 46,
    chapter: 15,
    verse: 5,
    sanskrit: "निर्मानमोहा जितसङ्गदोषा अध्यात्मनित्या विनिवृत्तकामाः। द्वन्द्वैर्विमुक्ताः सुखदुःखसंज्ञैर्गच्छन्त्यमूढाः पदमव्ययं तत्॥",
    translation: "Those who are free from pride and illusion, who have conquered the evil of attachment, who are constantly engaged in spiritual pursuits, who are liberated from lust and freed from the dualities of happiness and distress, reach the eternal abode.",
    meaning: "Freedom from pride, illusion, attachment, lust, and dualities leads to the eternal state of peace.",
    practicalGuidance: "Work on reducing pride, seeing clearly without illusion, releasing unhealthy attachments, controlling desires, and accepting both joy and sorrow. This path leads to lasting peace.",
    tags: ["liberation", "spiritual practice", "freedom", "eternal peace"]
  },
  {
    id: 47,
    chapter: 16,
    verse: 3,
    sanskrit: "तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता। भवन्ति सम्पदं दैवीमभिजातस्य भारत॥",
    translation: "Vigor, forgiveness, fortitude, cleanliness, absence of malice, and absence of pride—these are the qualities of those endowed with divine nature, O descendant of Bharata.",
    meaning: "Divine qualities include energy, forgiveness, resilience, purity, non-malice, and humility.",
    practicalGuidance: "Cultivate these divine qualities daily: stay energetic through self-care, forgive quickly, build resilience through challenges, maintain cleanliness, wish no harm, and stay humble. These transform your life.",
    tags: ["divine qualities", "forgiveness", "resilience", "humility"]
  },
  {
    id: 48,
    chapter: 16,
    verse: 21,
    sanskrit: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः। कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥",
    translation: "There are three gates leading to the hell of self-destruction for the soul—lust, anger and greed. Every sane man should give these up, as they lead to degradation.",
    meaning: "Lust, anger, and greed are the three paths to self-destruction. Avoiding these protects your well-being.",
    practicalGuidance: "Be vigilant about these three: excessive desire, uncontrolled anger, and greed. When you notice them arising, consciously choose different responses. This protects your peace and relationships.",
    tags: ["lust", "anger", "greed", "self-protection"]
  },
  {
    id: 49,
    chapter: 17,
    verse: 17,
    sanskrit: "श्रद्धया परया तप्तं तपस्तत्त्रिविधं नरैः। अफलाकाङ्क्षिभिर्युक्तैः सात्त्विकं परिचक्षते॥",
    translation: "This threefold austerity, practiced by people whose aim is not to benefit themselves materially but to please the Supreme, is of the nature of goodness.",
    meaning: "Austerity practiced with faith and without desire for personal gain, but to please the divine, is pure and beneficial.",
    practicalGuidance: "When practicing discipline or sacrifice, do it for higher purpose, not for ego or material gain. This pure intention makes the practice truly transformative.",
    tags: ["austerity", "discipline", "pure intention", "spiritual practice"]
  },
  {
    id: 50,
    chapter: 18,
    verse: 37,
    sanskrit: "यत्तदग्रे विषमिव परिणामेऽमृतोपमम्। तत्सुखं सात्त्विकं प्रोक्तमात्मबुद्धिप्रसादजम्॥",
    translation: "That which in the beginning may be just like poison but at the end is just like nectar and which awakens one to self-realization is said to be happiness in the mode of goodness.",
    meaning: "True happiness may be difficult initially (like medicine that tastes bitter) but leads to lasting joy and self-realization.",
    practicalGuidance: "Don't avoid challenges that help you grow. Therapy, meditation, facing fears—these may be uncomfortable initially but lead to lasting peace. Endure the initial discomfort for long-term benefit.",
    tags: ["growth", "challenge", "delayed gratification", "self-realization"]
  },
  {
    id: 51,
    chapter: 18,
    verse: 38,
    sanskrit: "विषयेन्द्रियसंयोगाद्यत्तदग्रेऽमृतोपमम्। परिणामे विषमिव तत्सुखं राजसं स्मृतम्॥",
    translation: "That happiness which is derived from contact of the senses with their objects and which appears like nectar at first but poison at the end is said to be of the nature of passion.",
    meaning: "Pleasures that feel good initially but lead to suffering later are of passionate nature—they're ultimately harmful.",
    practicalGuidance: "Be aware of instant gratifications that harm you later: junk food, excessive drinking, procrastination, toxic relationships. Choose delayed gratification and sustainable pleasures instead.",
    tags: ["instant gratification", "sustainable happiness", "self-discipline", "awareness"]
  },
  {
    id: 52,
    chapter: 18,
    verse: 48,
    sanskrit: "सहजं कर्म कौन्तेय सदोषमपि न त्यजेत्। सर्वारम्भा हि दोषेण धूमेनाग्निरिवावृताः॥",
    translation: "Every endeavor is covered by some fault, just as fire is covered by smoke. Therefore one should not give up the work born of his nature, O son of Kunti, even if such work is full of fault.",
    meaning: "Nothing is perfect. All actions have some flaw. Don't abandon your natural calling because it's imperfect.",
    practicalGuidance: "Stop waiting for perfect conditions or perfect ability before starting. Embrace imperfection. Do your work even when it's flawed. Progress comes through imperfect action, not perfect inaction.",
    tags: ["perfectionism", "imperfection", "action", "courage"]
  },
  {
    id: 53,
    chapter: 18,
    verse: 54,
    sanskrit: "ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति। समः सर्वेषु भूतेषु मद्भक्तिं लभते पराम्॥",
    translation: "One who is thus transcendentally situated at once realizes the Supreme Brahman and becomes fully joyful. He never laments or desires to have anything. He is equally disposed toward every living entity. In that state he attains pure devotional service unto Me.",
    meaning: "Upon self-realization, one becomes joyful, without grief or desire, equal toward all beings, and attains supreme devotion.",
    practicalGuidance: "Work toward this state: inner joy not dependent on circumstances, freedom from excessive grief or desire, and equal love for all. This is ultimate peace.",
    tags: ["self-realization", "joy", "equanimity", "liberation"]
  },
  {
    id: 54,
    chapter: 18,
    verse: 58,
    sanskrit: "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि। अथ चेत्त्वमहङ्कारान्न श्रोष्यसि विनङ्क्ष्यसि॥",
    translation: "If you become conscious of Me, you will pass over all the obstacles of conditioned life by My grace. If, however, you do not work in such consciousness but act through false ego, not hearing Me, you will be lost.",
    meaning: "By maintaining awareness of the divine, you overcome all obstacles through grace. Acting from ego without listening to inner guidance leads to loss.",
    practicalGuidance: "Stay connected to the divine through regular prayer or meditation. This connection helps you navigate difficulties with grace. Ego-driven decisions without inner consultation often lead to problems.",
    tags: ["divine consciousness", "grace", "obstacles", "ego"]
  },
  {
    id: 55,
    chapter: 2,
    verse: 3,
    sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते। क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥",
    translation: "O Partha, do not yield to this degrading impotence. It does not become you. Give up such petty weakness of heart and arise, O chastiser of the enemy.",
    meaning: "Don't give in to weakness and despair. Rise above self-pity and face challenges with courage.",
    practicalGuidance: "When feeling defeated, remember your inner strength. Don't wallow in self-pity. Stand up, shake off the weakness, and face your challenges. You're stronger than you think.",
    tags: ["courage", "weakness", "rise up", "strength"]
  },
  {
    id: 56,
    chapter: 2,
    verse: 37,
    sanskrit: "हतो वा प्राप्स्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम्। तस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः॥",
    translation: "O son of Kunti, either you will be killed on the battlefield and attain the heavenly planets, or you will conquer and enjoy the earthly kingdom. Therefore, get up with determination and fight.",
    meaning: "Either way, the outcome is positive. There's nothing to fear. Face your battles with determination.",
    practicalGuidance: "Reframe challenges: even if you 'fail,' you learn and grow (a win). If you succeed, even better. Either way, you can't lose if you give your best effort. This mindset removes fear.",
    tags: ["reframing", "courage", "determination", "win-win"]
  },
  {
    id: 57,
    chapter: 2,
    verse: 66,
    sanskrit: "नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना। न चाभावयतः शान्तिरशान्तस्य कुतः सुखम्॥",
    translation: "One who is not connected with the Supreme can have neither transcendental intelligence nor a steady mind, without which there is no possibility of peace. And how can there be any happiness without peace?",
    meaning: "Without spiritual connection, there's no clear intelligence or steady mind. Without steadiness, no peace. Without peace, no happiness.",
    practicalGuidance: "Build your foundation: connect spiritually, develop mental steadiness through practice, cultivate peace, and happiness follows naturally. Don't chase happiness directly—build the foundation for it.",
    tags: ["spiritual foundation", "mental steadiness", "peace", "happiness"]
  },
  {
    id: 58,
    chapter: 2,
    verse: 70,
    sanskrit: "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत्। तद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी॥",
    translation: "A person who is not disturbed by the incessant flow of desires—that enter like rivers into the ocean, which is ever being filled but is always still—can alone achieve peace, and not the man who strives to satisfy such desires.",
    meaning: "Like the ocean that remains undisturbed despite rivers flowing into it, one who isn't disturbed by desires achieves peace. Chasing desires creates restlessness.",
    practicalGuidance: "Don't chase every desire. Be like the ocean—vast, deep, and undisturbed by the streams of wants flowing through you. Observe desires without acting on each one. This brings peace.",
    tags: ["desire", "peace", "ocean metaphor", "non-attachment"]
  },
  {
    id: 59,
    chapter: 3,
    verse: 16,
    sanskrit: "एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः। अघायुरिन्द्रियारामो मोघं पार्थ स जीवति॥",
    translation: "One who does not follow the cycle of sacrifice lives a sinful, sensual life of no purpose, O Arjuna.",
    meaning: "Those who live only for sensual pleasure without contributing to the cycle of giving back live meaningless lives.",
    practicalGuidance: "Find purpose beyond personal pleasure. Contribute to society, help others, give back. A life lived only for personal gratification feels empty. Service gives life meaning.",
    tags: ["purpose", "service", "meaning", "contribution"]
  },
  {
    id: 60,
    chapter: 3,
    verse: 17,
    sanskrit: "यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः। आत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते॥",
    translation: "One who is satisfied in the self, who is illumined in the self, and who rejoices in the self alone, for him there is no duty.",
    meaning: "One who finds complete satisfaction within themselves, who is self-illumined and self-content, has transcended the need for prescribed duties.",
    practicalGuidance: "Seek contentment within yourself. When you're truly self-satisfied, external obligations lose their grip. You act from freedom, not compulsion. This is liberation.",
    tags: ["self-contentment", "inner satisfaction", "liberation", "self-fulfillment"]
  },
  {
    id: 61,
    chapter: 3,
    verse: 35,
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्। स्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
    translation: "It is far better to perform one's natural prescribed duty, though tinged with faults, than to perform another's prescribed duty, though perfectly. In fact, it is preferable to die in the discharge of one's duty, than to follow the path of another, which is fraught with danger.",
    meaning: "Your own path, even if imperfect, is better than someone else's path perfectly followed. Be authentic to yourself.",
    practicalGuidance: "Stop comparing yourself to others or trying to live someone else's life. Your unique path, with all its imperfections, is right for you. Authenticity is more important than perfection.",
    tags: ["authenticity", "comparison", "own path", "self-acceptance"]
  },
  {
    id: 62,
    chapter: 4,
    verse: 20,
    sanskrit: "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः। कर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः॥",
    translation: "Abandoning all attachment to the results of his activities, ever satisfied and independent, he performs no fruitive action, although engaged in all kinds of undertakings.",
    meaning: "One who has released attachment to results, is always content and independent, even while actively engaged, truly does no action (in the karmic sense).",
    practicalGuidance: "Engage fully in activities while remaining detached from outcomes. This paradox—full engagement without attachment—is the key to freedom in action.",
    tags: ["detachment", "engagement", "freedom", "paradox"]
  },
  {
    id: 63,
    chapter: 4,
    verse: 33,
    sanskrit: "श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप। सर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते॥",
    translation: "O chastiser of the enemy, the sacrifice of knowledge is greater than the sacrifice of material possessions. O son of Pritha, in the end, all sacrifices of work culminate in transcendental knowledge.",
    meaning: "Acquiring knowledge and wisdom is superior to material sacrifices. All actions ultimately lead to knowledge.",
    practicalGuidance: "Prioritize learning and wisdom over accumulating possessions. Invest in education, therapy, self-understanding. This inner wealth is more valuable than material wealth.",
    tags: ["knowledge", "wisdom", "learning", "priorities"]
  },
  {
    id: 64,
    chapter: 4,
    verse: 34,
    sanskrit: "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया। उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः॥",
    translation: "Just try to learn the truth by approaching a spiritual master. Inquire from him submissively and render service unto him. The self-realized souls can impart knowledge unto you because they have seen the truth.",
    meaning: "Seek wisdom from those who have realized truth. Approach with humility, ask questions, and serve. They will teach you.",
    practicalGuidance: "Find mentors, therapists, or spiritual teachers who have walked the path. Learn from their experience. Be humble and willing to serve or contribute. True knowledge is transmitted this way.",
    tags: ["mentorship", "learning", "humility", "guidance"]
  },
  {
    id: 65,
    chapter: 4,
    verse: 36,
    sanskrit: "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः। सर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि॥",
    translation: "Even if you are considered to be the most sinful of all sinners, when you are situated in the boat of transcendental knowledge you will be able to cross over the ocean of miseries.",
    meaning: "No matter how many mistakes you've made, the boat of wisdom can carry you across the ocean of suffering.",
    practicalGuidance: "Don't let past mistakes define you. No matter what you've done, you can still find peace and redemption through understanding and growth. It's never too late to change.",
    tags: ["redemption", "past mistakes", "hope", "transformation"]
  },
  {
    id: 66,
    chapter: 4,
    verse: 40,
    sanskrit: "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति। नायं लोकोऽस्ति न परो न सुखं संशयात्मनः॥",
    translation: "But ignorant and faithless persons who doubt the revealed scriptures do not attain God consciousness; they fall down. For the doubting soul there is happiness neither in this world nor in the next.",
    meaning: "Those who lack faith and are consumed by doubt find no peace in this life or beyond. Doubt destroys happiness.",
    practicalGuidance: "While healthy skepticism has its place, excessive doubt paralyzes you. Develop faith—whether in yourself, the process, or the divine. Some trust is necessary to move forward and find peace.",
    tags: ["faith", "doubt", "trust", "paralysis"]
  },
  {
    id: 67,
    chapter: 5,
    verse: 18,
    sanskrit: "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि। शुनि चैव श्वपाके च पण्���िताः समदर्शिनः॥",
    translation: "The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle brahmana, a cow, an elephant, a dog and a dog-eater.",
    meaning: "The truly wise see all beings with equal vision, recognizing the same divinity in all, regardless of external differences.",
    practicalGuidance: "Practice seeing the divine in everyone—regardless of status, appearance, or behavior. This equal vision eliminates prejudice and opens your heart to universal love.",
    tags: ["equal vision", "universal love", "prejudice", "wisdom"]
  },
  {
    id: 68,
    chapter: 5,
    verse: 29,
    sanskrit: "भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम्। सुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति॥",
    translation: "A person in full consciousness of Me, knowing Me to be the ultimate beneficiary of all sacrifices and austerities, the Supreme Lord of all planets and demigods, and the benefactor and well-wisher of all living entities, attains peace from the pangs of material miseries.",
    meaning: "Understanding the divine as the ultimate beneficiary of all efforts, the supreme controller, and the well-wisher of all beings brings peace.",
    practicalGuidance: "Surrender your efforts to the divine, trust in a higher power that governs all, and recognize that the divine wants your well-being. This trust brings peace amid uncertainty.",
    tags: ["surrender", "trust", "divine will", "peace"]
  },
  {
    id: 69,
    chapter: 6,
    verse: 6,
    sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः। अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥",
    translation: "For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain the greatest enemy.",
    meaning: "When you master your mind, it becomes your greatest ally. When you don't, it's your worst enemy.",
    practicalGuidance: "Your mind can be your best friend or worst enemy. Train it through meditation, positive thinking, and mindfulness. A disciplined mind supports you; an undisciplined one sabotages you.",
    tags: ["mind mastery", "self-discipline", "mindfulness", "mental training"]
  },
  {
    id: 70,
    chapter: 6,
    verse: 7,
    sanskrit: "जितात्मनः प्रशान्तस्य परमात्मा समाहितः। शीतोष्णसुखदुःखेषु तथा मानापम��नयोः॥",
    translation: "For one who has conquered the mind, the Supersoul is already reached, for he has attained tranquility. To such a man happiness and distress, heat and cold, honor and dishonor are all the same.",
    meaning: "One who has mastered the mind reaches the highest self and remains tranquil through all opposites—pleasure and pain, honor and dishonor.",
    practicalGuidance: "Work toward equanimity in all conditions. Don't be overly elated by praise or destroyed by criticism. Remain centered through pleasure and pain. This is true mastery.",
    tags: ["equanimity", "mind mastery", "tranquility", "balance"]
  },
  {
    id: 71,
    chapter: 6,
    verse: 9,
    sanskrit: "सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु। साधुष्वपि च पापेषु समबुद्धिर्विशिष्यते॥",
    translation: "A person is considered still further advanced when he regards honest well-wishers, affectionate benefactors, the neutral, mediators, the envious, friends and enemies, the pious and the sinners all with an equal mind.",
    meaning: "Advanced wisdom means treating everyone equally—friends, enemies, good, and bad—without preference or prejudice.",
    practicalGuidance: "Practice non-discrimination. Be kind to both friend and foe, the righteous and the flawed. This doesn't mean tolerating abuse, but approaching all with compassion and equanimity.",
    tags: ["non-discrimination", "equal mind", "compassion", "advanced wisdom"]
  },
  {
    id: 72,
    chapter: 6,
    verse: 10,
    sanskrit: "योगी युञ्जीत सततमात्मानं रहसि स्थितः। एकाकी यतचित्तात्मा निराशीरपरिग्रहः॥",
    translation: "A transcendentalist should always engage his body, mind and self in relationship with the Supreme; he should live alone in a secluded place and should always carefully control his mind. He should be free from desires and feelings of possessiveness.",
    meaning: "Regular spiritual practice requires solitude, mental control, freedom from excessive desires, and non-possessiveness.",
    practicalGuidance: "Create space for solitude in your life. Spend time alone in reflection or meditation. Simplify your life, reduce possessions and desires. This creates space for inner peace.",
    tags: ["solitude", "simplicity", "meditation", "non-possessiveness"]
  },
  {
    id: 73,
    chapter: 6,
    verse: 20,
    sanskrit: "यत्रोपरमते चित्तं निरुद्धं योगसेवया। यत्र चैवात्मनात्मानं पश्यन्नात्मनि तुष्यति॥",
    translation: "In the stage of perfection called trance, or samadhi, one's mind is completely restrained from material mental activities by practice of yoga. This perfection is characterized by one's ability to see the self by the pure mind and to relish and rejoice in the self.",
    meaning: "Through yoga practice, the mind becomes still. In this stillness, you perceive your true self and find joy within yourself.",
    practicalGuidance: "Through consistent meditation, you'll experience moments of mental stillness where you connect with your true self. These moments of inner joy are glimpses of your true nature.",
    tags: ["samadhi", "meditation", "inner joy", "true self"]
  },
  {
    id: 74,
    chapter: 6,
    verse: 23,
    sanskrit: "तं विद्याद्दुःखसंयोगवियोगं योगसंज्ञितम्। स निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा॥",
    translation: "The practice which enables one to sever the connection with misery is called yoga. This yoga should be practiced with determination and with an undiscouraged mind.",
    meaning: "Yoga (union with the divine) severs connection with suffering. Practice it with determination and without discouragement.",
    practicalGuidance: "Your spiritual practice is medicine for suffering. Commit to it with determination. Don't give up when results aren't immediate. Consistent practice eventually frees you from suffering.",
    tags: ["yoga", "determination", "suffering", "persistence"]
  },
  {
    id: 75,
    chapter: 6,
    verse: 26,
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्। ततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    translation: "From whatever and wherever the mind wanders due to its flickering and unsteady nature, one must certainly withdraw it and bring it back under the control of the self.",
    meaning: "When your mind wanders (which it will), gently bring it back to focus. This is the practice of meditation.",
    practicalGuidance: "Don't be frustrated when your mind wanders during meditation. It's natural. Simply notice and gently bring it back. Each time you do this, you're strengthening your mental muscle.",
    tags: ["meditation practice", "wandering mind", "gentleness", "training"]
  },
  {
    id: 76,
    chapter: 6,
    verse: 27,
    sanskrit: "प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम्। उपैति शान्तरजसं ब्रह्मभूतमकल्मषम्॥",
    translation: "The yogi whose mind is fixed on Me verily attains the highest perfection of transcendental happiness. He is beyond the mode of passion, he realizes his qualitative identity with the Supreme, and thus he is freed from all reactions to past deeds.",
    meaning: "When the mind is peaceful and fixed on the divine, one attains supreme happiness, transcends passion, realizes oneness with the divine, and is freed from past karma.",
    practicalGuidance: "Focus your mind on the divine through meditation. This brings supreme peace, freedom from agitation, realization of your divine nature, and liberation from past mistakes.",
    tags: ["divine focus", "supreme happiness", "liberation", "transcendence"]
  },
  {
    id: 77,
    chapter: 6,
    verse: 29,
    sanskrit: "सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि। ईक्षते योगयुक्तात्मा सर्वत्र समदर्शनः॥",
    translation: "A true yogi observes Me in all beings and also sees every being in Me. Indeed, the self-realized person sees Me, the same Supreme Lord, everywhere.",
    meaning: "The enlightened see the divine in all beings and all beings in the divine. They see the same divine presence everywhere.",
    practicalGuidance: "Practice seeing the divine in everyone you meet. This transforms relationships and removes the illusion of separation. Everyone becomes a reflection of the divine.",
    tags: ["divine vision", "oneness", "enlightenment", "unity"]
  },
  {
    id: 78,
    chapter: 6,
    verse: 30,
    sanskrit: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति। तस्याहं न प्रणश्यामि स च मे न प्रणश्यति॥",
    translation: "For one who sees Me everywhere and sees everything in Me, I am never lost, nor is he ever lost to Me.",
    meaning: "Those who see the divine in everything maintain a constant connection. They never lose the divine, and the divine never loses them.",
    practicalGuidance: "Cultivate constant awareness of the divine presence in all things. This unbreakable connection provides security and eliminates loneliness. You're never alone.",
    tags: ["constant connection", "divine presence", "never alone", "security"]
  },
  {
    id: 79,
    chapter: 6,
    verse: 32,
    sanskrit: "आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन। सुखं वा यदि वा दुःखं स योगी परमो मतः॥",
    translation: "He is a perfect yogi who, by comparison to his own self, sees the true equality of all beings, in both their happiness and their distress, O Arjuna!",
    meaning: "The supreme yogi feels others' joy and pain as their own. They see themselves in all beings equally.",
    practicalGuidance: "Develop empathy by recognizing that everyone experiences joy and suffering just as you do. This breaks down barriers and creates compassion for all.",
    tags: ["empathy", "compassion", "equality", "interconnection"]
  },
  {
    id: 80,
    chapter: 7,
    verse: 14,
    sanskrit: "दैवी ह्येषा गुणमयी मम माया दुरत्यया। मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते॥",
    translation: "This divine energy of Mine, consisting of the three modes of material nature, is difficult to overcome. But those who have surrendered unto Me can easily cross beyond it.",
    meaning: "The illusion of material nature is difficult to transcend, but those who surrender to the divine can easily overcome it.",
    practicalGuidance: "When stuck in materialism or illusion, surrender to a higher power. Trying to overcome life's illusions through ego alone is difficult. Surrender makes it easier.",
    tags: ["surrender", "illusion", "maya", "transcendence"]
  },
  {
    id: 81,
    chapter: 7,
    verse: 16,
    sanskrit: "चतुर्विधा भजन्ते मां जनाः सुकृतिनोऽर्जुन। आर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ॥",
    translation: "O best among the Bharatas, four kinds of pious men begin to render devotional service unto Me—the distressed, the desirer of wealth, the inquisitive, and he who is searching for knowledge of the Absolute.",
    meaning: "People come to the divine for four reasons: when distressed, seeking wealth, curious about truth, or seeking knowledge of the Absolute.",
    practicalGuidance: "It's okay to turn to the divine because you're suffering or need help. All paths to the divine are valid. Whether you come from pain, curiosity, or seeking—you're welcome.",
    tags: ["spiritual paths", "divine seeking", "all are welcome", "motivation"]
  },
  {
    id: 82,
    chapter: 7,
    verse: 17,
    sanskrit: "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते। प्रियो हि ज्ञानिनोऽत्यर्थमहं स च मम प्रियः॥",
    translation: "Of these, the one who is in full knowledge and who is always engaged in pure devotional service is the best. For I am very dear to him, and he is dear to Me.",
    meaning: "Among spiritual seekers, those with knowledge who practice constant devotion are most advanced. They love the divine, and the divine loves them.",
    practicalGuidance: "Cultivate both knowledge and devotion. Study wisdom teachings while maintaining a loving relationship with the divine. This combination is most powerful.",
    tags: ["knowledge and devotion", "spiritual practice", "divine love", "balance"]
  },
  {
    id: 83,
    chapter: 7,
    verse: 21,
    sanskrit: "यो यो यां यां तनुं भक्तः श्रद्धयार्चितुमिच्छति। तस्य तस्याचलां श्रद्धां तामेव विदधाम्यहम्॥",
    translation: "I am in everyone's heart as the Supersoul. As soon as one desires to worship some demigod, I make his faith steady so that he can devote himself to that particular deity.",
    meaning: "The divine supports your faith in whatever form you choose to worship. All paths lead to the same source.",
    practicalGuidance: "Don't worry about following the 'right' spiritual path. Whatever form of divine resonates with you, pursue it sincerely. All sincere paths lead to truth.",
    tags: ["all paths", "divine forms", "religious tolerance", "faith"]
  },
  {
    id: 84,
    chapter: 8,
    verse: 5,
    sanskrit: "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्। यः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥",
    translation: "And whoever, at the end of his life, quits his body remembering Me alone at once attains My nature. Of this there is no doubt.",
    meaning: "Those who remember the divine at the moment of death attain the divine nature. There's no doubt about this.",
    practicalGuidance: "Practice remembering the divine daily, so it becomes natural even in difficult moments. Regular practice makes it possible to maintain divine awareness even at death.",
    tags: ["remembrance", "death", "divine nature", "practice"]
  },
  {
    id: 85,
    chapter: 8,
    verse: 6,
    sanskrit: "यं यं वापि स्मरन्भावं त्यजत्यन्ते कलेवरम्। तं तमेवैति कौन्तेय सदा तद्भावभावितः॥",
    translation: "Whatever state of being one remembers when he quits his body, O son of Kunti, that state he will attain without fail.",
    meaning: "Your consciousness at death determines your next state. Whatever you focus on throughout life shapes your consciousness.",
    practicalGuidance: "What you focus on daily shapes your consciousness. Fill your mind with positive, divine thoughts. These will be with you in critical moments and shape your future.",
    tags: ["consciousness", "focus", "mental patterns", "future"]
  },
  {
    id: 86,
    chapter: 8,
    verse: 7,
    sanskrit: "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च। मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयः॥",
    translation: "Therefore, Arjuna, you should always think of Me in the form of Krishna and at the same time carry out your prescribed duty of fighting. With your activities dedicated to Me and your mind and intelligence fixed on Me, you will attain Me without doubt.",
    meaning: "Remember the divine constantly while performing your duties. Dedicate your actions and mind to the divine, and you'll certainly attain union.",
    practicalGuidance: "Maintain spiritual awareness while doing daily tasks. Dedicate your work to the divine. This combination of remembrance and action leads to spiritual fulfillment.",
    tags: ["constant remembrance", "dedicated action", "spiritual practice", "integration"]
  },
  {
    id: 87,
    chapter: 8,
    verse: 14,
    sanskrit: "अनन्यचेताः सततं यो मां स्मरति नित्यशः। तस्याहं सुलभः पार्थ नित्ययुक्तस्य योगिनः॥",
    translation: "For one who always remembers Me without deviation, I am easy to obtain, O son of Pritha, because of his constant engagement in devotional service.",
    meaning: "For those who remember the divine constantly without distraction, the divine is easily attainable through consistent devotional practice.",
    practicalGuidance: "Consistency is key. Regular daily practice, even if brief, builds a strong connection with the divine. This makes spiritual realization accessible.",
    tags: ["consistency", "constant practice", "accessibility", "devotion"]
  },
  {
    id: 88,
    chapter: 9,
    verse: 2,
    sanskrit: "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम्। प्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम्॥",
    translation: "This knowledge is the king of education, the most secret of all secrets. It is the purest knowledge, and because it gives direct perception of the self by realization, it is the perfection of religion. It is everlasting, and it is joyfully performed.",
    meaning: "Self-knowledge is supreme, pure, directly experienceable, righteous, joyful to practice, and eternal.",
    practicalGuidance: "Pursue self-knowledge above all else. It's the highest education, brings direct experience, is pure, joyful to practice, and its benefits last forever.",
    tags: ["self-knowledge", "supreme knowledge", "direct experience", "eternal"]
  },
  {
    id: 89,
    chapter: 9,
    verse: 18,
    sanskrit: "गतिर्भर्ता प्रभुः साक्षी निवासः शरणं सुहृत्। प्रभवः प्रलयः स्थानं निधानं बीजमव्ययम्॥",
    translation: "I am the goal, the sustainer, the master, the witness, the abode, the refuge, and the most dear friend. I am the creation and the annihilation, the basis of everything, the resting place and the eternal seed.",
    meaning: "The divine is everything: goal, sustainer, witness, refuge, friend, creator, destroyer, foundation, and eternal source.",
    practicalGuidance: "The divine is all you need—your destination, support, observer, home, shelter, and best friend. Knowing this, you lack nothing. Find refuge in this truth.",
    tags: ["divine completeness", "refuge", "support", "everything"]
  },
  {
    id: 90,
    chapter: 9,
    verse: 26,
    sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति। तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥",
    translation: "If one offers Me with love and devotion a leaf, a flower, fruit or water, I will accept it.",
    meaning: "The divine accepts even the simplest offerings when given with love and devotion. It's the love that matters, not the material value.",
    practicalGuidance: "You don't need expensive rituals or offerings. A simple flower, a glass of water, or even just sincere prayers offered with love are enough. God values your heart, not your wallet.",
    tags: ["simplicity", "devotion", "love", "offerings"]
  },
  {
    id: 91,
    chapter: 9,
    verse: 29,
    sanskrit: "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः। ये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम्॥",
    translation: "I envy no one, nor am I partial to anyone. I am equal to all. But whoever renders service unto Me in devotion is a friend, is in Me, and I am also a friend to him.",
    meaning: "The divine is equal toward all, neither hating nor favoring anyone. Those who devote themselves to the divine become friends, and the divine befriends them.",
    practicalGuidance: "God doesn't play favorites or hold grudges. Everyone has equal access to divine love through devotion. You're not competing for God's attention—it's freely available to all who seek it.",
    tags: ["divine equality", "no favorites", "friendship with God", "accessibility"]
  },
  {
    id: 92,
    chapter: 9,
    verse: 30,
    sanskrit: "अपि चेत्सुदुराचारो भजते मामनन्यभाक्। साधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः॥",
    translation: "Even if one commits the most abominable action, if he is engaged in devotional service he is to be considered saintly because he is properly situated in his determination.",
    meaning: "Even someone who has committed terrible actions, if they turn to devotional service with determination, should be considered on the righteous path.",
    practicalGuidance: "No matter how badly you've messed up, you can still turn your life around through sincere spiritual practice. Your past doesn't define your future. Redemption is always possible.",
    tags: ["redemption", "second chances", "forgiveness", "transformation"]
  },
  {
    id: 93,
    chapter: 9,
    verse: 31,
    sanskrit: "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति। कौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति॥",
    translation: "He quickly becomes righteous and attains lasting peace. O son of Kunti, declare it boldly that My devotee never perishes.",
    meaning: "One who turns to the divine quickly becomes righteous, finds lasting peace, and never perishes. The divine protects devotees.",
    practicalGuidance: "When you commit to spiritual transformation, change happens quickly. Peace follows, and you're protected. Trust that once you genuinely turn toward the divine, you're safe.",
    tags: ["quick transformation", "lasting peace", "protection", "never perish"]
  },
  {
    id: 94,
    chapter: 9,
    verse: 32,
    sanskrit: "मां हि पार्थ व्यपाश्रित्य येऽपि स्युः पापयोनयः। स्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम्॥",
    translation: "O son of Pritha, those who take shelter in Me, though they be of lower birth—women, vaishyas and shudras—can attain the supreme destination.",
    meaning: "Anyone, regardless of birth, gender, or social status, can attain the highest spiritual goal by taking shelter in the divine.",
    practicalGuidance: "Spiritual growth isn't limited by your background, gender, social status, or past. Everyone has equal access to enlightenment. You're worthy exactly as you are.",
    tags: ["equality", "accessibility", "no barriers", "universal access"]
  },
  {
    id: 95,
    chapter: 9,
    verse: 33,
    sanskrit: "किं पुनर्ब्राह्मणाः पुण्या भक्ता राजर्षयस्तथा। अनित्यमसुखं लोकमिमं प्राप्य भजस्व माम्॥",
    translation: "How much more this is so of the righteous brahmanas, the devotees and the saintly kings. Therefore, having come to this temporary, miserable world, engage in loving service unto Me.",
    meaning: "If even those of lower status can attain the divine, how much more so can others. In this temporary, sorrowful world, engage in devotional service.",
    practicalGuidance: "Life is temporary and has suffering. Don't waste time on meaningless pursuits. Engage in spiritual practice and service—this gives life meaning and leads to eternal peace.",
    tags: ["temporary world", "devotional service", "meaning", "urgency"]
  },
  {
    id: 96,
    chapter: 9,
    verse: 34,
    sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः॥",
    translation: "Engage your mind always in thinking of Me, become My devotee, offer obeisances to Me and worship Me. Being completely absorbed in Me, surely you will come to Me.",
    meaning: "Think of the divine constantly, be devoted, offer respect, and worship. Being fully absorbed this way, you'll certainly attain union with the divine.",
    practicalGuidance: "Make the divine the center of your thoughts. Practice devotion through prayer, meditation, and worship. Complete absorption in the divine guarantees spiritual success.",
    tags: ["absorption", "constant remembrance", "guaranteed success", "devotion"]
  },
  {
    id: 97,
    chapter: 10,
    verse: 9,
    sanskrit: "मच्चित्ता मद्गतप्राणा बोधयन्तः परस्परम्। कथयन्तश्च मां नित्यं तुष्यन्ति च रमन्ति च॥",
    translation: "The thoughts of My pure devotees dwell in Me, their lives are fully devoted to My service, and they derive great satisfaction and bliss from always enlightening one another and conversing about Me.",
    meaning: "True devotees keep their consciousness focused on the divine, dedicate their lives to service, and find joy in discussing spiritual truths with each other.",
    practicalGuidance: "Find a spiritual community. Discussing spiritual topics with like-minded people brings joy and reinforces your practice. We grow together, not alone.",
    tags: ["spiritual community", "discussion", "joy", "together"]
  },
  {
    id: 98,
    chapter: 11,
    verse: 33,
    sanskrit: "तस्मात्त्वमुत्तिष्ठ यशो लभस्व जित्वा शत्रून्भुङ्क्ष्व राज्यं समृद्धम्। मयैवैते निहताः पूर्वमेव निमित्तमात्रं भव सव्यसाचिन्॥",
    translation: "Therefore get up. Prepare to fight and win glory. Conquer your enemies and enjoy a flourishing kingdom. They are already put to death by My arrangement, and you, O Savyasachin, can be but an instrument in the fight.",
    meaning: "Rise and act. Success is already determined by divine will; you're merely an instrument. Do your part courageously.",
    practicalGuidance: "When facing challenges, know that outcomes are ultimately determined by forces beyond you. Do your best, be courageous, and trust the process. You're an instrument of larger forces.",
    tags: ["courage", "divine will", "instrument", "trust"]
  },
  {
    id: 99,
    chapter: 12,
    verse: 8,
    sanskrit: "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय। निवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः॥",
    translation: "Just fix your mind upon Me, the Supreme Personality of Godhead, and engage all your intelligence in Me. Thus you will live in Me always, without a doubt.",
    meaning: "Fix your mind and intelligence on the divine, and you'll dwell in the divine constantly. This is certain.",
    practicalGuidance: "Direct your mental and intellectual energy toward the divine. Make it the center of your life. This focus naturally leads to abiding in divine consciousness.",
    tags: ["focus", "divine consciousness", "certainty", "dwelling in God"]
  },
  {
    id: 100,
    chapter: 12,
    verse: 12,
    sanskrit: "श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते। ध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम्॥",
    translation: "If you cannot practice the regulations of bhakti-yoga, then just try to work for Me, because by working for Me you will come to the perfect stage. If you cannot work in this consciousness of Me, then try to act giving up all results of your work and try to be self-situated.",
    meaning: "There's a hierarchy: direct devotion is best, then working for the divine, then giving up fruits of action. Any of these paths leads to peace.",
    practicalGuidance: "If advanced practices seem out of reach, start simpler: do your work as service to the divine, or at least let go of attachment to results. Any spiritual practice brings peace.",
    tags: ["gradual path", "accessible practice", "options", "peace"]
  },
  {
    id: 101,
    chapter: 13,
    verse: 28,
    sanskrit: "समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम्। विनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति॥",
    translation: "One who sees the Supersoul equally present everywhere, in every living being, does not degrade himself by his mind. Thus he approaches the transcendental destination.",
    meaning: "Those who see the divine equally present in all beings don't degrade themselves mentally and reach the transcendent state.",
    practicalGuidance: "Seeing divinity in everyone prevents you from degrading yourself or others mentally. This equal vision elevates your consciousness and leads to spiritual realization.",
    tags: ["equal vision", "divine in all", "mental purity", "transcendence"]
  },
  {
    id: 102,
    chapter: 14,
    verse: 27,
    sanskrit: "ब्रह्मणो हि प्रतिष्ठाहममृतस्याव्ययस्य च। शाश्वतस्य च धर्मस्य सुखस्यैकान्तिकस्य च॥",
    translation: "And I am the basis of the impersonal Brahman, which is immortal, imperishable and eternal and is the constitutional position of ultimate happiness.",
    meaning: "The divine is the foundation of eternal truth, immortality, righteousness, and ultimate happiness.",
    practicalGuidance: "Ultimate happiness has a foundation—eternal divine truth. Build your life on this foundation rather than on temporary pleasures or achievements.",
    tags: ["foundation", "eternal truth", "ultimate happiness", "basis"]
  },
  {
    id: 103,
    chapter: 15,
    verse: 7,
    sanskrit: "ममैवांशो जीवलोके जीवभूतः सनातनः। मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥",
    translation: "The living entities in this conditioned world are My eternal fragmental parts. Due to conditioned life, they are struggling very hard with the six senses, which include the mind.",
    meaning: "Every living being is an eternal part of the divine, struggling in material existence with senses and mind.",
    practicalGuidance: "You're not separate from the divine—you're a part of it. Your struggles are temporary. Remembering your divine origin brings perspective and reduces suffering.",
    tags: ["divine fragment", "eternal part", "struggle", "identity"]
  },
  {
    id: 104,
    chapter: 15,
    verse: 15,
    sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च। वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम्॥",
    translation: "I am seated in everyone's heart, and from Me come remembrance, knowledge and forgetfulness. By all the Vedas, I am to be known. Indeed, I am the compiler of Vedanta, and I am the knower of the Vedas.",
    meaning: "The divine resides in everyone's heart and is the source of memory, knowledge, and forgetfulness. All wisdom texts ultimately point to the divine.",
    practicalGuidance: "God is not outside you but within your heart. Access inner guidance by turning inward through meditation. Your intuition is divine guidance speaking.",
    tags: ["God within", "inner guidance", "heart", "intuition"]
  },
  {
    id: 105,
    chapter: 16,
    verse: 22,
    sanskrit: "एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नरः। आचरत्यात्मनः श्रेयस्ततो याति परां गतिम्॥",
    translation: "The man who has escaped these three gates of hell, O son of Kunti, performs acts conducive to self-realization and thus gradually attains the supreme destination.",
    meaning: "Those who avoid lust, anger, and greed perform actions that lead to self-realization and eventually reach the supreme goal.",
    practicalGuidance: "Avoid these three destructive forces, and you'll naturally engage in activities that lead to spiritual growth. Freedom from these opens the path to realization.",
    tags: ["avoiding destruction", "self-realization", "supreme goal", "freedom"]
  }
];
