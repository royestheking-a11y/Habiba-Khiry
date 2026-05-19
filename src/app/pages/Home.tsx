import { Hero } from "../components/Hero";
import { TrustBar } from "../components/TrustBar";
import { Philosophy } from "../components/Philosophy";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, User, Award, Brain, Mail, Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Home() {
  const { t, isRtl } = useLanguage();

  const teaserCards = [
    {
      title: t("home.teaser.about.title"),
      desc: t("home.teaser.about.desc"),
      link: "/about",
      icon: User,
      color: "#4FD1FF",
    },
    {
      title: t("home.teaser.exp.title"),
      desc: t("home.teaser.exp.desc"),
      link: "/experience",
      icon: Briefcase,
      color: "#1E4DB7",
    },
    {
      title: t("home.teaser.skills.title"),
      desc: t("home.teaser.skills.desc"),
      link: "/skills",
      icon: Brain,
      color: "#4FD1FF",
    },
    {
      title: t("home.teaser.ach.title"),
      desc: t("home.teaser.ach.desc"),
      link: "/achievements",
      icon: Award,
      color: "#1E4DB7",
    },
  ];

  return (
    <div>
      <Hero />
      <TrustBar />
      
      {/* Exploration Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#07111F" }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                color: "#F8FAFC",
                letterSpacing: isRtl ? "0" : "-0.02em",
              }}
            >
              {isRtl ? (
                <>
                  {t("home.explore.prefix")}{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #4FD1FF, #1E4DB7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {t("home.explore.title")}
                  </span>
                </>
              ) : (
                <>
                  {t("home.explore.prefix")}{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #4FD1FF, #1E4DB7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {t("home.explore.title")}
                  </span>
                </>
              )}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                fontSize: "1rem",
                color: "#94A3B8",
                marginTop: "1rem",
                maxWidth: "600px",
                margin: "1rem auto 0",
              }}
            >
              {t("home.explore.desc")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {teaserCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(15, 23, 42, 0.4)",
                  border: "1px solid rgba(79, 209, 255, 0.06)",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div 
                  className="flex items-start gap-5"
                  style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "rgba(30, 77, 183, 0.15)" }}
                  >
                    <card.icon size={22} color={card.color} />
                  </div>
                  <div style={{ textAlign: isRtl ? "right" : "left", width: "100%" }}>
                    <h3
                      style={{
                        fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.25rem",
                        color: "#F8FAFC",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                        fontSize: "0.9375rem",
                        color: "#94A3B8",
                        lineHeight: 1.6,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {card.desc}
                    </p>
                    <Link
                      to={card.link}
                      className="inline-flex items-center gap-2"
                      style={{
                        fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "#4FD1FF",
                        textDecoration: "none",
                        flexDirection: isRtl ? "row-reverse" : "row",
                      }}
                    >
                      <span>{t("home.explore.more")}</span>
                      <ArrowRight 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          isRtl 
                            ? "group-hover:-translate-x-1 rotate-180" 
                            : "group-hover:translate-x-1"
                        }`} 
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-200"
              style={{
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                background: "linear-gradient(135deg, #1E4DB7, #4FD1FF22)",
                border: "1px solid rgba(79, 209, 255, 0.25)",
                color: "#4FD1FF",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(30, 77, 183, 0.15)",
                flexDirection: isRtl ? "row-reverse" : "row",
              }}
            >
              <Mail size={16} />
              {t("home.explore.btn")}
            </Link>
          </motion.div>
        </div>
      </section>

      <Philosophy />
    </div>
  );
}
