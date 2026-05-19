import { motion } from "motion/react";
import { Calendar, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Experience() {
  const { language, isRtl } = useLanguage();

  const experiences = [
    {
      company: "Etisalat / e& UAE 🇦🇪",
      role: language === "ar" ? "أخصائية تدريب — مدرب خبراء (SME)" : "Trainer Specialist — SME",
      period: language === "ar" ? "أبريل ٢٠٢٤ – الحالي" : "Apr 2024 – Present",
      type: language === "ar" ? "دوام كامل · هجين" : "Full-time · Remote/Hybrid",
      description: language === "ar"
        ? "تَمّ تعييني كأخصائية تدريب بعد إثبات متواصل للقدرات القيادية والتميز في مهارات التواصل. مسؤولة عن تهيئة، تدريب، وتطوير أداء فرق خدمة العملاء لكبار الحسابات والشركات الصغيرة والمتوسطة."
        : "Appointed as Trainer Specialist after consistently demonstrating leadership and communication excellence. Responsible for onboarding, coaching, and upskilling customer-facing teams across SME accounts.",
      achievements: language === "ar"
        ? [
            "تصميم وتطوير برامج تدريبية مخصصة لفرق علاقات عملاء الشركات",
            "توجيه وإرشاد المستشارين الجدد حول أفضل ممارسات الاتصال الفعّال",
            "المساهمة الفعّالة في زيادة معدلات حل المشكلات من أول اتصال (FCR)",
          ]
        : [
            "Designed training programs for SME customer service teams",
            "Mentored new advisors on communication best practices",
            "Contributed to improved first-call resolution metrics",
          ],
      accent: "#4FD1FF",
    },
    {
      company: "Etisalat Global Services UAE 🇦🇪",
      role: language === "ar" ? "أخصائية خبراء (SME Specialist)" : "SME Specialist",
      period: language === "ar" ? "يناير ٢٠٢٤ – أبريل ٢٠٢٤" : "Jan 2024 – Apr 2024",
      type: language === "ar" ? "ترقية · دوام كامل" : "Promoted · Full-time",
      description: language === "ar"
        ? "ترقيت إلى دور أخصائية خبراء بعد تحقيق لقب أفضل أداء (Top Achiever) على مدار عدة أرباع سنوية متتالية. إدارة وتنسيق العلاقات والشكاوى المتقدمة لعملاء الشركات B2B."
        : "Promoted to SME Specialist role after being recognized as top achiever across multiple consecutive quarters. Managed complex B2B client relationships and escalations.",
      achievements: language === "ar"
        ? [
            "الحصول على لقب الموظف الأكثر إنجازاً (Top Achiever) في كل ربع سنوي متتالي",
            "إدارة وتسهيل العلاقات المتقدمة لعملاء الشركات والمؤسسات الكبرى",
            "تسهيل التواصل والربط الفني بين متطلبات العملاء والفرق التقنية المختصة",
          ]
        : [
            "Recognized as Top Achiever every quarter",
            "Handled high-value SME portfolio relationships",
            "Bridged communication between clients and technical teams",
          ],
      accent: "#1E4DB7",
    },
    {
      company: "Etisalat Global Services UAE 🇦🇪",
      role: language === "ar" ? "مستشارة مركز الاتصال" : "Call Center Advisor",
      period: language === "ar" ? "يناير ٢٠٢٣ – ديسمبر ٢٠٢٣" : "Jan 2023 – Dec 2023",
      type: language === "ar" ? "دوام كامل" : "Full-time",
      description: language === "ar"
        ? "بدأت مسيرتي كمستشارة مركز اتصال لإدارة وتخديم حسابات العملاء بدولة الإمارات لأحد أكبر مشغلي الاتصالات في المنطقة. اكتسبت خبرة عميقة بمنتجات الاتصالات وطرق الاحتفاظ بالعملاء."
        : "Started as a Call Center Advisor handling UAE-based customer accounts for one of the region's largest telecoms. Built deep expertise in telecom products, customer retention, and escalation handling.",
      achievements: language === "ar"
        ? [
            "الحفاظ على معدلات رضا عملاء (CSAT) مرتفعة بشكل مستمر",
            "التخصص في حل ومعالجة شكاوى الفواتير والمسائل التقنية المعقدة",
            "تطوير تقنيات البيع المتبادل والإضافي وتجاوز المستهدفات الشهرية",
          ]
        : [
            "Maintained consistently high CSAT scores",
            "Specialized in complex billing and technical queries",
            "Developed cross-selling techniques that exceeded targets",
          ],
      accent: "#1E4DB7",
    },
    {
      company: "Noon Egypt 🇪🇬",
      role: language === "ar" ? "أخصائية معالجة شكاوى متصاعدة صعبة — قسم الشكاوى الرئيسي" : "Escalation Specialist — Core & Complaints",
      period: language === "ar" ? "أغسطس ٢٠٢٢ – ديسمبر ٢٠٢٢" : "Aug 2022 – Dec 2022",
      type: language === "ar" ? "دوام كامل" : "Full-time",
      description: language === "ar"
        ? "تخصصت في معالجة شكاوى العملاء الأكثر حساسية وأهمية والتي تشمل طلبات معاودة الاتصال الهامة، الشكاوى العاجلة، والشكاوى المباشرة المقدمة من كبار الشخصيات أو لجان حماية المستهلك."
        : "Specialized in handling the most sensitive and high-stakes customer situations including SPV callbacks, urgent escalations, and direct CPA/CEO-level complaints.",
      achievements: language === "ar"
        ? [
            "إدارة وحل الشكاوى المعقدة الواردة من مستويات الإدارة العليا وحماية المستهلك",
            "إدارة قائمة معاودة الاتصال الفورية والالتزام التام باتفاقية مستوى الخدمة SLA",
            "ابتكار وتطبيق أطر عمل استراتيجية لامتصاص غضب العملاء وتخفيف حدة النزاعات",
          ]
        : [
            "Managed CEO and CPA-level complaint resolutions",
            "Handled urgent callback queue with priority SLA compliance",
            "Developed conflict de-escalation frameworks",
          ],
      accent: "#94A3B8",
    },
    {
      company: "CIB – Commercial International Bank 🏦",
      role: language === "ar" ? "متدربة صيفية" : "Summer Intern",
      period: language === "ar" ? "صيف ٢٠٢١" : "Summer 2021",
      type: language === "ar" ? "تدريب مهني" : "Internship",
      description: language === "ar"
        ? "المشاركة في البرنامج التدريبي الصيفي للشمول المالي لدى البنك التجاري الدولي CIB، واكتساب المعرفة العملية بعمليات التجزئة المصرفية، وتهيئة العملاء الجدد."
        : "Participated in CIB's Financial Inclusion Summer Training Program, gaining hands-on exposure to retail banking operations, client onboarding, and financial products.",
      achievements: language === "ar"
        ? [
            "إتمام برنامج الشمول المالي بنجاح تام",
            "التعرف المباشر والميداني على عمليات التشغيل المصرفي",
            "بناء أساس متين في قطاع الخدمات المالية والمحاسبية",
          ]
        : [
            "Completed Financial Inclusion program",
            "Gained exposure to banking operations",
            "Built foundation in financial services",
          ],
      accent: "#94A3B8",
    },
    {
      company: "Banque Misr 🏦",
      role: language === "ar" ? "متدربة صيفية" : "Summer Trainee",
      period: language === "ar" ? "أكتوبر ٢٠٢١" : "Oct 2021",
      type: language === "ar" ? "تدريب مهني" : "Training",
      description: language === "ar"
        ? "إتمام تدريب الشمول المالي لدى بنك مصر، وتعميق فهم القطاع المصرفي في مصر، والمنتجات البنكية الشاملة، ومبادئ بناء العلاقات الطويلة مع العملاء."
        : "Completed Banque Misr's Financial Inclusion training, deepening understanding of Egypt's financial ecosystem, inclusive banking products, and customer relationship principles.",
      achievements: language === "ar"
        ? [
            "حاصلة على شهادة معتمدة في الشمول المالي والمصرفي",
            "دراسة وتطبيق ممارسات القطاع المصرفي الشامل",
            "ربط المفاهيم المحاسبية والمالية الأكاديمية بالسيناريوهات العملية الحية",
          ]
        : [
            "Certified in Financial Inclusion",
            "Studied inclusive banking practices",
            "Applied accounting knowledge to real scenarios",
          ],
      accent: "#94A3B8",
    },
  ];

  return (
    <section
      id="experience"
      className="py-28 relative"
      style={{ backgroundColor: "#07111F" }}
    >
      {/* Section background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(79, 209, 255, 0.2), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: isRtl ? "0" : "0.12em",
              color: "#4FD1FF",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            {language === "ar" ? "مسيرتي المهنية" : "Career Journey"}
          </p>
          <h2
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: isRtl ? 1.3 : 1.15,
              letterSpacing: isRtl ? "0" : "-0.03em",
              color: "#F8FAFC",
            }}
          >
            {language === "ar" ? "الخبرات المهنية والمحطات" : "Professional Experience"}
          </h2>
          <p
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#94A3B8",
              marginTop: "1rem",
              maxWidth: "500px",
              margin: "1rem auto 0",
              lineHeight: 1.7,
            }}
          >
            {language === "ar" 
              ? "مسار مهني مميز حافل بالتطور والقيادة والالتزام التام بتقديم أعلى معايير الجودة والخدمة." 
              : "A trajectory defined by growth, leadership, and a commitment to excellence in every role."}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(30, 77, 183, 0.4) 10%, rgba(30, 77, 183, 0.4) 90%, transparent)",
              left: isRtl ? "auto" : "2rem",
              right: isRtl ? "2rem" : "auto",
            }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative flex gap-8 md:ml-0"
                style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center mt-6">
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0 relative z-10"
                    style={{
                      background: exp.accent,
                      boxShadow: `0 0 12px ${exp.accent}60`,
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-2xl p-6 md:p-8 group cursor-default transition-all duration-300 animate-glow-hover"
                  style={{
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(79, 209, 255, 0.06)",
                    textAlign: isRtl ? "right" : "left",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(79, 209, 255, 0.15)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(15, 23, 42, 0.9)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(79, 209, 255, 0.06)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(15, 23, 42, 0.6)";
                  }}
                >
                  <div 
                    className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4"
                    style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.0625rem",
                          color: "#F8FAFC",
                          lineHeight: 1.3,
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        style={{
                          fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          color: exp.accent,
                          marginTop: "3px",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div 
                      className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0"
                      style={{ alignItems: isRtl ? "flex-start" : "flex-end" }}
                    >
                      <div
                        className="flex items-center gap-1.5"
                        style={{ 
                          color: "#94A3B8",
                          flexDirection: isRtl ? "row-reverse" : "row" 
                        }}
                      >
                        <Calendar size={12} />
                        <span
                          style={{
                            fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                            fontSize: "0.8125rem",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <span
                        className="px-2 py-0.5 rounded-md"
                        style={{
                          fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          color: "#94A3B8",
                          background: "rgba(148, 163, 184, 0.08)",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "#94A3B8",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    {exp.description}
                  </p>

                  <div className="flex flex-col gap-2">
                    {exp.achievements.map((ach, j) => (
                      <div 
                        key={j} 
                        className="flex items-start gap-2"
                        style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
                      >
                        <ChevronRight
                          size={14}
                          color="#4FD1FF"
                          className={`mt-1 flex-shrink-0 transition-transform ${isRtl ? "rotate-180" : ""}`}
                        />
                        <span
                          style={{
                            fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                            fontSize: "0.875rem",
                            color: "#94A3B8",
                            lineHeight: 1.5,
                          }}
                        >
                          {ach}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
