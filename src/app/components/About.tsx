import { motion } from "motion/react";
import { MapPin, GraduationCap, Globe } from "lucide-react";
// @ts-ignore
import habibaImage from "../../imports/ChatGPT_Image_May_19__2026__11_58_01_AM.png";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { language, isRtl } = useLanguage();

  const highlights = [
    { 
      icon: GraduationCap, 
      text: language === "ar" 
        ? "بكالوريوس إدارة الأعمال والمحاسبة – جامعة عين شمس" 
        : "B.B.A. Accounting – Ain Shams University" 
    },
    { 
      icon: MapPin, 
      text: language === "ar" 
        ? "القاهرة، مصر · متاحة لفرص العمل بدولة الإمارات 🇦🇪" 
        : "Cairo, Egypt · Open to UAE Opportunities 🇦🇪" 
    },
    { 
      icon: Globe, 
      text: language === "ar" 
        ? "العربية (اللغة الأم) · الإنجليزية (فوق المتوسط)" 
        : "Arabic (Native) · English (Upper Intermediate)" 
    },
  ];

  return (
    <section
      id="about"
      className="py-28 relative"
      style={{ backgroundColor: "#07111F" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="grid lg:grid-cols-2 gap-20 items-center"
          style={{ direction: isRtl ? "rtl" : "ltr" }}
        >
          {/* Left: Image (Mirrored entry) */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(79, 209, 255, 0.1)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={habibaImage}
                alt="Habiba Khiry El Najar"
                className="w-full object-cover object-top"
                style={{ height: "520px" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(7, 17, 31, 0.7) 100%)",
                }}
              />
              {/* Name overlay at bottom */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ textAlign: isRtl ? "right" : "left" }}
              >
                <p
                  style={{
                    fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#F8FAFC",
                  }}
                >
                  {language === "ar" ? "حبيبة خيري النجار" : "Habiba Khiry El Najar"}
                </p>
                <p
                  style={{
                    fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "#4FD1FF",
                    marginTop: "2px",
                  }}
                >
                  {language === "ar" ? "مدرب خبراء (SME) · أخصائية تواصل مؤسسي" : "SME Trainer · Corporate Communication Expert"}
                </p>
              </div>
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 w-32 h-32 rounded-xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30,77,183,0.15), rgba(79,209,255,0.05))",
                border: "1px solid rgba(79, 209, 255, 0.08)",
                zIndex: -1,
                right: isRtl ? "auto" : "-1rem",
                left: isRtl ? "-1rem" : "auto",
              }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            style={{ textAlign: isRtl ? "right" : "left" }}
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
              {language === "ar" ? "نبذة عني" : "About Me"}
            </p>

            <h2
              style={{
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: isRtl ? 1.3 : 1.15,
                letterSpacing: isRtl ? "0" : "-0.03em",
                color: "#F8FAFC",
                marginBottom: "1.5rem",
              }}
            >
              {isRtl ? (
                <>
                  من متدربة مصرفية إلى
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(90deg, #4FD1FF, #1E4DB7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    مدربة معتمدة للشركات
                  </span>
                </>
              ) : (
                <>
                  From Banking Intern to
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(90deg, #4FD1FF, #1E4DB7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Corporate Trainer
                  </span>
                </>
              )}
            </h2>

            <div
              style={{
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                color: "#94A3B8",
              }}
            >
              {language === "ar" ? (
                <>
                  <p className="mb-5">
                    بفضل خلفيتي الأكاديمية الراسخة في إدارة الأعمال والمحاسبة من
                    جامعة عين شمس العريقة، بدأت مسيرتي المهنية في بيئة التجارة الإلكترونية عالية الوتيرة في شركة{" "}
                    <span style={{ color: "#F8FAFC", fontWeight: 600 }}>نون مصر</span>
                    ، حيث تخصصت في حل شكاوى العملاء ذات الأولوية القصوى وتلبية متطلبات كبار الشخصيات.
                  </p>
                  <p className="mb-5">
                    ثم اتخذت مسيرتي منحىً مثيراً ومليئاً بالتحدي عندما انضممت إلى شركة{" "}
                    <span style={{ color: "#F8FAFC", fontWeight: 600 }}>اتصالات جلوبال سيرفيسز الإمارات</span>{" "}
                    كمستشارة لمركز الاتصال. وبفضل تفانيّ المستمر في العمل، نلت شهادة الأداء المتميز بلقب{" "}
                    <span style={{ color: "#4FD1FF", fontWeight: 600 }}>أفضل محقق إنجازات (Top Achiever)</span>{" "}
                    في كل ربع سنوي متتالي، مما أهّلني للترقية السريعة كأخصائية خبراء (SME Specialist)، ثم تعييني لاحقاً كمدربة معتمدة (Trainer Specialist).
                  </p>
                  <p>
                    واليوم، أقوم بتوجيه وتدريب الأجيال القادمة من موظفي خدمة العملاء والتواصل المؤسسي، متسلحة بخبراتي العملية العميقة واستراتيجياتي القيادية. فأنا أؤمن دائماً بأن الخدمة الاستثنائية تبدأ بتمكين الكوادر البشرية وتطوير شغفهم المهني.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-5">
                    With a foundation in Business Administration and Accounting from
                    Ain Shams University, I began my career in the fast-paced world
                    of e-commerce escalations at{" "}
                    <span style={{ color: "#F8FAFC", fontWeight: 500 }}>
                      Noon Egypt
                    </span>
                    , where I specialized in high-priority complaints and VIP
                    customer resolutions.
                  </p>
                  <p className="mb-5">
                    My journey took an exciting turn when I joined{" "}
                    <span style={{ color: "#F8FAFC", fontWeight: 500 }}>
                      Etisalat Global Services UAE
                    </span>{" "}
                    as a Call Center Advisor. My commitment to excellence earned me
                    recognition as a{" "}
                    <span style={{ color: "#4FD1FF", fontWeight: 500 }}>
                      Top Achiever every quarter
                    </span>
                    , leading to a promotion to SME specialist, and ultimately, an
                    appointment as Trainer Specialist.
                  </p>
                  <p>
                    Today, I channel my expertise in customer experience,
                    communication strategy, and team leadership into training the
                    next generation of service professionals. I believe that
                    exceptional service starts with empowered people.
                  </p>
                </>
              )}
            </div>

            {/* Highlights */}
            <div className="mt-8 flex flex-col gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                  style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(30, 77, 183, 0.15)" }}
                  >
                    <h.icon size={15} color="#4FD1FF" />
                  </div>
                  <span
                    style={{
                      fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#94A3B8",
                    }}
                  >
                    {h.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
