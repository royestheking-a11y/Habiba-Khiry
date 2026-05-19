import { motion } from "motion/react";
import { MapPin, GraduationCap, Globe } from "lucide-react";
// @ts-ignore
import habibaImage from "../../imports/ChatGPT_Image_May_19__2026__11_58_01_AM.png";

const highlights = [
  { icon: GraduationCap, text: "B.B.A. Accounting – Ain Shams University" },
  { icon: MapPin, text: "Cairo, Egypt · Open to UAE Opportunities" },
  { icon: Globe, text: "Arabic (Native) · English (Upper Intermediate)" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-28 relative"
      style={{ backgroundColor: "#07111F" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
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
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#F8FAFC",
                  }}
                >
                  Habiba Khiry El Najar
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "#4FD1FF",
                    marginTop: "2px",
                  }}
                >
                  SME Trainer · Corporate Communication Expert
                </p>
              </div>
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30,77,183,0.15), rgba(79,209,255,0.05))",
                border: "1px solid rgba(79, 209, 255, 0.08)",
                zIndex: -1,
              }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#4FD1FF",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              About Me
            </p>

            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "#F8FAFC",
                marginBottom: "1.5rem",
              }}
            >
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
            </h2>

            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                color: "#94A3B8",
              }}
            >
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
            </div>

            {/* Highlights */}
            <div className="mt-8 flex flex-col gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(30, 77, 183, 0.15)" }}
                  >
                    <h.icon size={15} color="#4FD1FF" />
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
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
