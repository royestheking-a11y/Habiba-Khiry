import { Contact } from "../components/Contact";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function ContactPage() {
  const { language, isRtl } = useLanguage();

  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh" }}>
      {/* Page Header */}
      <div 
        className="py-20 relative overflow-hidden" 
        style={{ 
          backgroundColor: "#07111F", 
          borderBottom: "1px solid rgba(79, 209, 255, 0.05)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-5"
            style={{
              background: "radial-gradient(circle, #1E4DB7 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: isRtl ? "0" : "0.12em",
              color: "#4FD1FF",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            {language === "ar" ? "تواصل معي" : "Get in touch"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#F8FAFC",
              letterSpacing: isRtl ? "0" : "-0.03em",
            }}
          >
            {language === "ar" ? "لنبدأ محادثة مهنية" : "Let's Start a Conversation"}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 mx-auto mt-6 rounded-full"
            style={{
              background: "linear-gradient(90deg, #4FD1FF, #1E4DB7)",
            }}
          />
        </div>
      </div>

      <Contact />
    </div>
  );
}
