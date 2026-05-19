import { motion } from "motion/react";
import { Briefcase, Star, Users, Award } from "lucide-react";
// @ts-ignore
import habibaImage from "../../imports/ChatGPT_Image_May_19__2026__11_58_01_AM.png";
import { Link } from "react-router-dom";

const floatingStats = [
  { icon: Briefcase, label: "Years Experience", value: "3+", delay: 0 },
  { icon: Star, label: "Top Achiever", value: "×4", delay: 0.1 },
  { icon: Users, label: "Clients Served", value: "500+", delay: 0.2 },
  { icon: Award, label: "Certifications", value: "5+", delay: 0.3 },
];

export function Hero() {

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#07111F" }}
    >
      {/* Ambient background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #1E4DB7 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(circle, #4FD1FF 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{
            background:
              "radial-gradient(circle, #0B1F3A 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(79, 209, 255, 0.08)",
                border: "1px solid rgba(79, 209, 255, 0.2)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#4FD1FF" }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.8125rem",
                  color: "#4FD1FF",
                  letterSpacing: "0.04em",
                }}
              >
                SME Trainer · Etisalat / e& UAE 🇦🇪
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#F8FAFC",
              }}
            >
              Empowering
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #4FD1FF, #1E4DB7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Customer Experience
              </span>
              <br />
              Through{" "}
              <span style={{ color: "#94A3B8" }}>Communication</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 max-w-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "1.0625rem",
                lineHeight: 1.75,
                color: "#94A3B8",
              }}
            >
              Business Administration graduate turned corporate trainer. From
              handling escalations at Noon to becoming a Top Achiever and SME
              Trainer at e&, I help teams unlock exceptional communication and
              service excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/experience"
                className="px-7 py-3.5 rounded-xl transition-all duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  background: "linear-gradient(135deg, #1E4DB7, #0B1F3A)",
                  border: "1px solid rgba(30, 77, 183, 0.6)",
                  color: "#F8FAFC",
                  boxShadow: "0 0 24px rgba(30, 77, 183, 0.3)",
                  textDecoration: "none",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 32px rgba(79, 209, 255, 0.25)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(79, 209, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 24px rgba(30, 77, 183, 0.3)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(30, 77, 183, 0.6)";
                }}
              >
                View Experience
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl transition-all duration-200"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  background: "transparent",
                  border: "1px solid rgba(148, 163, 184, 0.25)",
                  color: "#94A3B8",
                  textDecoration: "none",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#F8FAFC";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(248, 250, 252, 0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#94A3B8";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(148, 163, 184, 0.25)";
                }}
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          {/* Right: Image + Floating Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            {/* Image container */}
            <div className="relative">
              <div
                className="w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(79, 209, 255, 0.15)",
                  boxShadow:
                    "0 0 60px rgba(30, 77, 183, 0.3), 0 0 120px rgba(30, 77, 183, 0.15)",
                }}
              >
                <img
                  src={habibaImage}
                  alt="Habiba Khiry El Najar"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(7, 17, 31, 0.4) 100%)",
                  }}
                />
              </div>

              {/* Decorative ring */}
              <div
                className="absolute -inset-3 rounded-2xl pointer-events-none"
                style={{
                  border: "1px solid rgba(79, 209, 255, 0.06)",
                }}
              />
            </div>

            {/* Floating Stat Cards */}
            {floatingStats.map((stat, i) => {
              const positions = [
                { top: "-1rem", left: "-6rem" },
                { top: "-1rem", right: "-6rem" },
                { bottom: "4rem", left: "-7rem" },
                { bottom: "1rem", right: "-6rem" },
              ];
              const pos = positions[i];

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + stat.delay }}
                  className="absolute hidden lg:flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    ...pos,
                    background: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid rgba(79, 209, 255, 0.12)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    minWidth: "150px",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(30, 77, 183, 0.2)" }}
                  >
                    <stat.icon size={16} color="#4FD1FF" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.125rem",
                        color: "#F8FAFC",
                        lineHeight: 1.1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "#94A3B8",
                        lineHeight: 1.3,
                        marginTop: "2px",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
