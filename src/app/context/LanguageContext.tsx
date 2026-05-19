import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
  isRtl: boolean;
}

const translations: Record<Language, Record<string, any>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.achievements": "Achievements",
    "nav.contact": "Contact",
    "nav.download": "Download Resume",

    // Hero
    "hero.badge": "SME Trainer · Etisalat / e& UAE 🇦🇪",
    "hero.title1": "Empowering",
    "hero.title2": "Customer Experience",
    "hero.title3": "Through Communication",
    "hero.desc": "Business Administration graduate turned corporate trainer. From handling escalations at Noon to becoming a Top Achiever and SME Trainer at e&, I help teams unlock exceptional communication and service excellence.",
    "hero.btn.experience": "View Experience",
    "hero.btn.contact": "Contact Me",
    "hero.stats.experience": "Years Experience",
    "hero.stats.achiever": "Top Achiever",
    "hero.stats.clients": "Clients Served",
    "hero.stats.certifications": "Certifications",

    // About
    "about.header.tag": "My Story",
    "about.header.title": "Get to know me",
    "about.header.desc": "Discover my background, training journey, and the core values that shape my training programs.",
    "about.badge": "About Habiba Khiry",
    "about.title": "Passionate SME Trainer & Corporate Communication Expert",
    "about.desc1": "My journey in professional training is built on a solid academic foundation in Business Administration. Over the years, I have specialized in transforming customer relations, handling critical escalations, and coaching corporate teams to excel in communication.",
    "about.desc2": "By blending direct hands-on industry experience from premium organizations like Noon and e& UAE with interactive coaching methodologies, I ensure that my trainees do not just learn concepts—they adopt actionable strategies.",
    "about.img.label": "Trainer in Action",
    
    // Philosophy
    "phil.title": "My Training Philosophy",
    "phil.desc": "How I structure learning experiences to deliver sustainable growth and measurable team performance.",
    "phil.quote.pre": "Great customer experience starts with ",
    "phil.quote.highlight": "empowered communication",
    "phil.quote.post": ".",
    "phil.p1.title": "Listen First",
    "phil.p1.desc": "Every great customer interaction begins with truly hearing what the person needs — not just what they say.",
    "phil.p2.title": "Empower, Don't Script",
    "phil.p2.desc": "Trained advisors who understand principles outperform those who follow scripts. Real empowerment creates real results.",
    "phil.p3.title": "Excellence is Repeatable",
    "phil.p3.desc": "Top performance isn't luck — it's the result of deliberate practice, strong habits, and continuous reflection.",
    "phil.item1.title": "Empathy First",
    "phil.item1.desc": "Putting ourselves in the customer's shoes transforms every escalation into a loyalty-building opportunity.",
    "phil.item2.title": "Practical Coaching",
    "phil.item2.desc": "Concepts without practice fade away. I prioritize live simulations, roleplay, and immediate constructive feedback.",
    "phil.item3.title": "Continuous Evolution",
    "phil.item3.desc": "Communication standards change. Keeping pace with digital transformations and client psychology is key.",

    // Experience
    "exp.header.tag": "My Timeline",
    "exp.header.title": "Work Experience & Milestones",
    "exp.header.desc": "A chronological review of my professional career, training expertise, and corporate highlights.",
    "exp.footer.title": "Curious about the full details?",
    "exp.footer.desc": "You can download my full resume for an offline copy of my roles, university credentials, and contact info.",
    "exp.footer.btn": "Download My Resume",

    // Skills
    "skills.header.tag": "Expertise",
    "skills.header.title": "My Core Competencies",
    "skills.header.desc": "A curated snapshot of the skills and frameworks I bring to training rooms and corporate teams.",
    "skills.cat.cx": "Customer Experience",
    "skills.cat.comm": "Corporate Communication",
    "skills.cat.train": "Training & Mentorship",
    
    // Achievements
    "ach.header.tag": "Accolades",
    "ach.header.title": "Achievements & Honors",
    "ach.header.desc": "Celebrating milestones of excellence, verified accomplishments, and industry certifications.",
    "ach.item1.title": "Top SME Trainer of Q3",
    "ach.item1.desc": "Recognized by e& leadership for outstanding performance in training delivery and post-training excellence metrics.",
    "ach.item2.title": "Service Hero Award",
    "ach.item2.desc": "Awarded during my tenure at Noon for resolving the highest volume of executive escalations with a 98% positive resolution rate.",
    "ach.item3.title": "Quality Leader Certificate",
    "ach.item3.desc": "Certified excellence in business communication and service auditing quality parameters.",

    // Contact
    "contact.header.tag": "Get in Touch",
    "contact.header.title": "Let's connect and discuss",
    "contact.header.desc": "Reach out to talk about training partnerships, corporate consulting, or coaching opportunities.",
    "contact.info.title": "Contact Information",
    "contact.info.desc": "Have an upcoming training initiative? Drop a message or reach out via standard channels.",
    "contact.info.location": "Location",
    "contact.info.location.val": "Cairo, Egypt · Open to UAE 🇦🇪",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Your Name",
    "contact.form.name.ph": "John Doe",
    "contact.form.email": "Your Email",
    "contact.form.email.ph": "john@example.com",
    "contact.form.message": "Message",
    "contact.form.message.ph": "Tell me about your training needs...",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Thank you! Your message has been sent successfully.",

    // Home Page Additional
    "home.teaser.about.title": "About Me",
    "home.teaser.about.desc": "Discover my professional journey from a high-priority escalations specialist at Noon to a Trainer Specialist at Etisalat.",
    "home.teaser.exp.title": "Work Experience",
    "home.teaser.exp.desc": "Explore my career timeline as a Trainer, SME Specialist, and Customer Experience Advisor.",
    "home.teaser.skills.title": "Skills & Core Competencies",
    "home.teaser.skills.desc": "Check out my training methodologies, customer satisfaction coaching, and language capabilities.",
    "home.teaser.ach.title": "Achievements & Awards",
    "home.teaser.ach.desc": "See a list of my Top Achiever awards, corporate recognition, and key certifications.",
    "home.explore.title": "Specialized Pages",
    "home.explore.prefix": "Explore My",
    "home.explore.desc": "Dive deeper into each aspect of my corporate background, professional training credentials, and hands-on communication expertise.",
    "home.explore.more": "Learn more",
    "home.explore.btn": "Let's Discuss Opportunities",

    // Footer
    "footer.desc": "Empowering professional teams through elite communication coaching and customer experience strategies.",
    "footer.links.title": "Quick Links",
    "footer.social.title": "Professional Socials",
    "footer.social.btn": "Connect on LinkedIn",
    "footer.copy": "© 2026 Habiba Khiry El Najar. All rights reserved.",
    "footer.credit": "Designed & Developed by "
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.about": "من أنا",
    "nav.experience": "الخبرات",
    "nav.skills": "المهارات",
    "nav.achievements": "الإنجازات",
    "nav.contact": "اتصل بي",
    "nav.download": "تحميل السيرة الذاتية",

    // Hero
    "hero.badge": "مدرب خبراء (SME) · اتصالات / e& الإمارات 🇦🇪",
    "hero.title1": "تمكين",
    "hero.title2": "تجربة العملاء",
    "hero.title3": "من خلال التواصل الفعال",
    "hero.desc": "خريجة إدارة أعمال تحولت إلى مدربة شركات. من إدارة الشكاوى المتصاعدة في نون إلى الحصول على لقب أفضل محقق إنجازات ومدرب خبراء (SME) في اتصالات e&، أساعد الفرق في التميز في التواصل وخدمة العملاء.",
    "hero.btn.experience": "عرض الخبرات",
    "hero.btn.contact": "تواصل معي",
    "hero.stats.experience": "سنوات الخبرة",
    "hero.stats.achiever": "تحقيق الإنجازات",
    "hero.stats.clients": "العملاء المخدومين",
    "hero.stats.certifications": "الشهادات المعتمدة",

    // About
    "about.header.tag": "قصتي",
    "about.header.title": "تعرف عليّ عن قرب",
    "about.header.desc": "اكتشف خلفيتي التعليمية، ومسيرتي التدريبية، والقيم الأساسية التي تشكل برامجي المخصصة.",
    "about.badge": "حبيبة خيري",
    "about.title": "مدربة خبراء شغوفة وأخصائية تواصل مؤسسي",
    "about.desc1": "تأسست مسيرتي في التدريب الاحترافي على خلفية أكاديمية صلبة في إدارة الأعمال. على مر السنين، تخصصت في تحويل علاقات العملاء، وحل المشكلات المتصاعدة الصعبة، وتدريب فرق الشركات لتحقيق أقصى درجات التميز في التواصل.",
    "about.desc2": "من خلال دمج الخبرة العملية المباشرة في شركات رائدة مثل نون واتصالات e& الإمارات مع منهجيات التدريب التفاعلية الحديثة، أضمن أن المتدربين لا يتعلمون المفاهيم فحسب، بل يتبنون استراتيجيات عملية قابلة للتطبيق الفوري.",
    "about.img.label": "المدرب في بيئة العمل",
    
    // Philosophy
    "phil.title": "فلسفتي التدريبية",
    "phil.desc": "كيف أصمم الخبرات التعليمية لتقديم نمو مستدام وأداء ملموس للفرق والمؤسسات.",
    "phil.quote.pre": "تبدأ تجربة العملاء الرائعة بـ ",
    "phil.quote.highlight": "التواصل المُمكّن",
    "phil.quote.post": ".",
    "phil.p1.title": "الاستماع أولاً",
    "phil.p1.desc": "كل تفاعل رائع مع العميل يبدأ بالاستماع الحقيقي لما يحتاجه الشخص — وليس فقط ما يقوله.",
    "phil.p2.title": "التمكين لا التلقين",
    "phil.p2.desc": "الوكلاء المدربون الذين يفهمون المبادئ يتفوقون على من يتبعون النصوص الجاهزة. التمكين الحقيقي يخلق نتائج حقيقية.",
    "phil.p3.title": "التميز قابل للتكرار",
    "phil.p3.desc": "الأداء العالي ليس وليد الصدفة — بل هو نتيجة الممارسة المدروسة، والعادات القوية، والتقييم المستمر الذاتي.",
    "phil.item1.title": "التعاطف أولاً",
    "phil.item1.desc": "وضع أنفسنا مكان العميل يحول كل شكوى صعبة متصاعدة إلى فرصة لبناء الولاء والارتباط الدائم.",
    "phil.item2.title": "التدريب العملي",
    "phil.item2.desc": "المفاهيم بلا ممارسة تتلاشى سريعاً. لذلك أركز على المحاكاة الحية، ولعب الأدوار، وتقديم الملاحظات البناءة الفورية.",
    "phil.item3.title": "التطور المستمر",
    "phil.item3.desc": "معايير التواصل تتغير بشكل ديناميكي. مواكبة التحولات الرقمية وعلم نفس العملاء الحديث هو سر النجاح الرئيسي.",

    // Experience
    "exp.header.tag": "مسيرتي المهنية",
    "exp.header.title": "الخبرات العملية والمحطات الرئيسية",
    "exp.header.desc": "مراجعة زمنية لمسيرتي المهنية، وخبراتي التدريبية، وأبرز الإنجازات المؤسسية التي حققتها.",
    "exp.footer.title": "هل ترغب في معرفة كافة التفاصيل؟",
    "exp.footer.desc": "يمكنك تحميل سيرتي الذاتية الكاملة للحصول على نسخة غير متصلة بالإنترنت تشمل أدواري ومؤهلاتي الأكاديمية وبيانات الاتصال الخاصة بي.",
    "exp.footer.btn": "تحميل سيرتي الذاتية",

    // Skills
    "skills.header.tag": "كفاءاتي",
    "skills.header.title": "مجالات الخبرة والمهارات",
    "skills.header.desc": "لمحة عامة عن المهارات والأطر الاستراتيجية التي أقدمها في قاعات التدريب ولفرق العمل في الشركات.",
    "skills.cat.cx": "تجربة العملاء",
    "skills.cat.comm": "التواصل المؤسسي",
    "skills.cat.train": "التدريب والتوجيه المهني",

    // Achievements
    "ach.header.tag": "الجوائز والتقدير",
    "ach.header.title": "الإنجازات والشهادات المعتمدة",
    "ach.header.desc": "الاحتفال بمحطات التميز والنجاح الموثقة والشهادات المهنية المعتمدة في قطاع خدمة العملاء والتواصل.",
    "ach.item1.title": "أفضل مدرب خبراء (SME) للربع الثالث",
    "ach.item1.desc": "تكريم خاص من إدارة اتصالات e& للأداء الاستثنائي في تقديم الحقائب التدريبية وتحقيق أعلى مقاييس الجودة.",
    "ach.item2.title": "جائزة بطل الخدمة",
    "ach.item2.desc": "مُنحت لي خلال عملي في نون لحل أكبر حجم من الشكاوى التنفيذية الصعبة بنسبة رضا ونجاح بلغت 98%.",
    "ach.item3.title": "شهادة قائد معايير الجودة",
    "ach.item3.desc": "اعتماد مهني في مهارات جودة التواصل التجاري وتدقيق أداء خدمة العملاء الاحترافي.",

    // Contact
    "contact.header.tag": "تواصل معي",
    "contact.header.title": "دعنا نتحدث ونناقش سبل التعاون",
    "contact.header.desc": "تواصل معي لمناقشة شراكات التدريب، الاستشارات المؤسسية المخصصة، أو فرص التوجيه المهني لفرق العمل.",
    "contact.info.title": "بيانات الاتصال",
    "contact.info.desc": "هل لديك مبادرة تدريبية مقبلة؟ اترك رسالة مباشرة أو تواصل معي عبر القنوات الرسمية.",
    "contact.info.location": "العنوان",
    "contact.info.location.val": "القاهرة، مصر · متاحة للعمل بالإمارات 🇦🇪",
    "contact.form.title": "أرسل رسالة مباشرة",
    "contact.form.name": "الاسم الكامل",
    "contact.form.name.ph": "مثال: أحمد محمد",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.email.ph": "example@domain.com",
    "contact.form.message": "نص الرسالة",
    "contact.form.message.ph": "أدخل تفاصيل احتياجاتك التدريبية أو أي استفسار ترغب في طرحه...",
    "contact.form.submit": "إرسال الرسالة",
    "contact.form.success": "شكرًا لك! تم إرسال رسالتك بنجاح وسأرد عليك في أقرب وقت.",

    // Home Page Additional
    "home.teaser.about.title": "من أنا",
    "home.teaser.about.desc": "اكتشف مسيرتي المهنية من أخصائية معالجة شكاوى متصاعدة صعبة في نون إلى أخصائية تدريب في اتصالات e&.",
    "home.teaser.exp.title": "الخبرات العملية",
    "home.teaser.exp.desc": "استكشف تسلسلي المهني كمدربة، وأخصائية خبراء (SME)، ومستشارة تجربة العملاء.",
    "home.teaser.skills.title": "المهارات والكفاءات",
    "home.teaser.skills.desc": "اطلع على منهجيات التدريب التي أتبعها، وتدريب رضا العملاء، والقدرات اللغوية الاحترافية.",
    "home.teaser.ach.title": "الإنجازات والجوائز",
    "home.teaser.ach.desc": "شاهد قائمة بجوائز بطل الإنجاز، والتكريم المؤسسي، والشهادات المهنية المعتمدة.",
    "home.explore.title": "أقسام الموقع المخصصة",
    "home.explore.prefix": "استكشف",
    "home.explore.desc": "تعرف بعمق على مسيرتي المؤسسية، وشهادات التدريب الاحترافي، وخبرات التواصل العملي.",
    "home.explore.more": "اكتشف المزيد",
    "home.explore.btn": "لنناقش فرص التعاون",

    // Footer
    "footer.desc": "تمكين فرق العمل والمؤسسات من خلال أحدث استراتيجيات التواصل وتطوير تجربة العملاء المتميزة.",
    "footer.links.title": "روابط سريعة",
    "footer.social.title": "تواصل مهني",
    "footer.social.btn": "تواصل معي عبر لينكد إن",
    "footer.copy": "© 2026 حبيبة خيري النجار. جميع الحقوق محفوظة.",
    "footer.credit": "تصميم وتطوير بواسطة "
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio_lang");
    return (saved as Language) || "en";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "ar" : "en";
      localStorage.setItem("portfolio_lang", next);
      return next;
    });
  };

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  const isRtl = language === "ar";

  useEffect(() => {
    // Update HTML attributes for layout & SEO
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
