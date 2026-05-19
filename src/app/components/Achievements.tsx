import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Trophy, Star, Target, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.max(duration / target, 1);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Achievements() {
  const { language, isRtl } = useLanguage();

  const stats = [
    { 
      icon: Star, 
      value: 4, 
      suffix: "×", 
      label: language === "ar" ? "جوائز الأداء المتميز" : "Top Achiever Awards", 
      desc: language === "ar" ? "أربعة أرباع سنوية متتالية من التميز في e&" : "Consecutive quarters of excellence at e&" 
    },
    { 
      icon: Users, 
      value: 500, 
      suffix: "+", 
      label: language === "ar" ? "عملاء تم خدمتهم" : "Customers Supported", 
      desc: language === "ar" ? "عبر نون، اتصالات الإمارات، وبرامج التدريب" : "Across Noon, e& UAE, and training programs" 
    },
    { 
      icon: Target, 
      value: 3, 
      suffix: "+", 
      label: language === "ar" ? "سنوات الخبرة" : "Years Experience", 
      desc: language === "ar" ? "في تدريب الشركات وخدمة وتجربة العملاء" : "In corporate training and customer service" 
    },
    { 
      icon: Trophy, 
      value: 5, 
      suffix: "+", 
      label: language === "ar" ? "شهادات معتمدة" : "Certifications", 
      desc: language === "ar" ? "من جوجل، بنك مصر، CIB والجامعة الأمريكية" : "Google, Banque Misr, CIB, AUC & more" 
    },
  ];

  const awards = [
    {
      title: language === "ar" ? "أفضل محقق إنجازات – الربع الأول ٢٠٢٤" : "Top Achiever – Q1 2024",
      org: "Etisalat / e& UAE 🇦🇪",
      desc: language === "ar" 
        ? "تكريم كأفضل أخصائية خبراء (SME Specialist) نتيجة التميز الاستثنائي في إدارة العملاء وتخطي مؤشرات الأداء المستهدفة." 
        : "Recognized as top-performing SME specialist for exceptional client handling and KPI over-achievement.",
      tag: language === "ar" ? "الربع الأول ٢٠٢٤" : "Q1 2024",
    },
    {
      title: language === "ar" ? "أفضل محقق إنجازات – الربع الرابع ٢٠٢٣" : "Top Achiever – Q4 2023",
      org: "Etisalat Global Services 🇦🇪",
      desc: language === "ar" 
        ? "مُنحت لقب أفضل محقق إنجازات في الربع الأخير من عام ٢٠٢٣ لأدائي المستقر والمتميز وارتفاع معدلات رضا العملاء." 
        : "Awarded top achiever in the final quarter of 2023 for consistent performance and customer satisfaction scores.",
      tag: language === "ar" ? "الربع الرابع ٢٠٢٣" : "Q4 2023",
    },
    {
      title: language === "ar" ? "أفضل محقق إنجازات – الربع الثالث ٢٠٢٣" : "Top Achiever – Q3 2023",
      org: "Etisalat Global Services 🇦🇪",
      desc: language === "ar" 
        ? "الربع الثالث على التوالي من تحقيق الأداء الاستثنائي المتصدر، مما مهد طريقي للترقية إلى دور أخصائية خبراء." 
        : "Third consecutive quarter of top performance, leading to SME promotion pathway.",
      tag: language === "ar" ? "الربع الثالث ٢٠٢٣" : "Q3 2023",
    },
    {
      title: language === "ar" ? "أفضل محقق إنجازات – الربع الثاني ٢٠٢٣" : "Top Achiever – Q2 2023",
      org: "Etisalat Global Services 🇦🇪",
      desc: language === "ar" 
        ? "أول تكريم كأفضل محقق أداء متميز — والذي دشن سلسلة من التميز والنجاح المتتالي الذي رسم مسار مسيرتي المهنية." 
        : "First top achiever recognition — kickstarting a streak of excellence that defined her career trajectory.",
      tag: language === "ar" ? "الربع الثاني ٢٠٢٣" : "Q2 2023",
    },
    {
      title: language === "ar" ? "التسويق الرقمي من جوجل" : "Google Digital Marketing",
      org: "Google Maharat 🌐",
      desc: language === "ar" 
        ? "شهادة معتمدة في أساسيات التسويق الرقمي تشمل تحسين محركات البحث (SEO)، وإعلانات محركات البحث (SEM)، وإعلانات منصات التواصل والتحليلات." 
        : "Certified in digital marketing fundamentals including SEO, SEM, social media, and analytics.",
      tag: language === "ar" ? "ديسمبر ٢٠٢١" : "Dec 2021",
    },
    {
      title: language === "ar" ? "التعيين كأخصائية تدريب" : "Appointed Trainer Specialist",
      org: "Etisalat / e& UAE 🇦🇪",
      desc: language === "ar" 
        ? "تعيين رسمي لتصميم وقيادة البرامج التدريبية المخصصة، وهي محطة هامة تمثل تقديراً جلياً للقدرات القيادية والتوجيهية الفعالة." 
        : "Formally appointed to design and lead training programs, a milestone representing recognition of leadership ability.",
      tag: language === "ar" ? "أبريل ٢٠٢٤" : "Apr 2024",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-28 relative"
      style={{ backgroundColor: "#07111F" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(79, 209, 255, 0.15), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
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
            {language === "ar" ? "التقدير والتكريم" : "Recognition"}
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
            {language === "ar" ? "الإنجازات والجوائز الممنوحة" : "Achievements & Awards"}
          </h2>
        </motion.div>

        {/* Stats Row */}
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          style={{ direction: isRtl ? "rtl" : "ltr" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl text-center animate-glow-hover"
              style={{
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.8), rgba(11,31,58,0.5))",
                border: "1px solid rgba(79, 209, 255, 0.08)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: "rgba(30, 77, 183, 0.15)",
                  border: "1px solid rgba(79, 209, 255, 0.1)",
                }}
              >
                <stat.icon size={18} color="#4FD1FF" />
              </div>
              <div
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "#F8FAFC",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                  direction: "ltr", // keep numbers standard ltr for layout flow
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  color: "#F8FAFC",
                  marginBottom: "0.5rem",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "#94A3B8",
                  lineHeight: 1.5,
                }}
              >
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ direction: isRtl ? "rtl" : "ltr" }}
        >
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="p-6 rounded-2xl group transition-all duration-300 cursor-default animate-glow-hover"
              style={{
                background: "rgba(15, 23, 42, 0.5)",
                border: "1px solid rgba(79, 209, 255, 0.07)",
                textAlign: isRtl ? "right" : "left",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(79, 209, 255, 0.18)";
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(79, 209, 255, 0.07)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div 
                className="flex items-start justify-between mb-4"
                style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(30,77,183,0.25), rgba(79,209,255,0.1))",
                    border: "1px solid rgba(79, 209, 255, 0.15)",
                  }}
                >
                  <Trophy size={17} color="#4FD1FF" />
                </div>
                <span
                  className="px-2.5 py-1 rounded-lg"
                  style={{
                    fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "#4FD1FF",
                    background: "rgba(79, 209, 255, 0.08)",
                    border: "1px solid rgba(79, 209, 255, 0.12)",
                  }}
                >
                  {award.tag}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  color: "#F8FAFC",
                  marginBottom: "0.25rem",
                }}
              >
                {award.title}
              </h3>
              <p
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "#4FD1FF",
                  opacity: 0.8,
                  marginBottom: "0.75rem",
                }}
              >
                {award.org}
              </p>
              <p
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  color: "#94A3B8",
                  lineHeight: 1.6,
                }}
              >
                {award.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
