import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Philosophy() {
  const { language, t, isRtl } = useLanguage();

  const principles = [
    {
      number: "٠١",
      numberEn: "01",
      title: t("phil.p1.title"),
      desc: t("phil.p1.desc"),
    },
    {
      number: "٠٢",
      numberEn: "02",
      title: t("phil.p2.title"),
      desc: t("phil.p2.desc"),
    },
    {
      number: "٠٣",
      numberEn: "03",
      title: t("phil.p3.title"),
      desc: t("phil.p3.desc"),
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: "#07111F" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(79, 209, 255, 0.15), transparent)",
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-5"
          style={{
            background: "radial-gradient(ellipse, #1E4DB7 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Main quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(30,77,183,0.2), rgba(79,209,255,0.1))",
              border: "1px solid rgba(79, 209, 255, 0.15)",
            }}
          >
            <Quote size={22} color="#4FD1FF" />
          </div>

          <blockquote
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              lineHeight: isRtl ? 1.35 : 1.3,
              letterSpacing: isRtl ? "0" : "-0.02em",
              color: "#F8FAFC",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            "{t("phil.quote.pre")}
            <span
              style={{
                background: "linear-gradient(90deg, #4FD1FF, #1E4DB7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("phil.quote.highlight")}
            </span>
            {t("phil.quote.post")}"
          </blockquote>

          <div 
            className="mt-6 flex items-center justify-center gap-3"
            style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
          >
            <div
              className="w-8 h-px"
              style={{ background: "rgba(79, 209, 255, 0.3)" }}
            />
            <p
              style={{
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#94A3B8",
              }}
            >
              {language === "ar" ? "حبيبة خيري النجار" : "Habiba Khiry El Najar"}
            </p>
            <div
              className="w-8 h-px"
              style={{ background: "rgba(79, 209, 255, 0.3)" }}
            />
          </div>
        </motion.div>

        {/* Training principles */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ direction: isRtl ? "rtl" : "ltr" }}
        >
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl animate-glow-hover"
              style={{
                background: "rgba(15, 23, 42, 0.4)",
                border: "1px solid rgba(79, 209, 255, 0.07)",
                textAlign: isRtl ? "right" : "left",
              }}
            >
              <span
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: "2.5rem",
                  lineHeight: 1,
                  color: "rgba(79, 209, 255, 0.12)",
                  display: "block",
                  marginBottom: "1rem",
                  textAlign: isRtl ? "right" : "left",
                }}
              >
                {isRtl ? p.number : p.numberEn}
              </span>
              <h3
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#F8FAFC",
                  marginBottom: "0.75rem",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "#94A3B8",
                  lineHeight: 1.7,
                }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
