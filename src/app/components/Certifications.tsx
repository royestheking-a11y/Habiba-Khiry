import { motion } from "motion/react";
import { ExternalLink, BookOpen } from "lucide-react";

const certs = [
  {
    title: "Fundamentals of Digital Marketing",
    issuer: "Google Maharat",
    date: "December 2021",
    color: "#4FD1FF",
    bg: "rgba(79, 209, 255, 0.06)",
    border: "rgba(79, 209, 255, 0.15)",
    initial: "G",
  },
  {
    title: "Financial Inclusion Training",
    issuer: "Banque Misr",
    date: "October 2021",
    color: "#1E4DB7",
    bg: "rgba(30, 77, 183, 0.08)",
    border: "rgba(30, 77, 183, 0.2)",
    initial: "BM",
  },
  {
    title: "Financial Inclusion Summer Program",
    issuer: "CIB – Commercial International Bank",
    date: "Summer 2021",
    color: "#94A3B8",
    bg: "rgba(148, 163, 184, 0.06)",
    border: "rgba(148, 163, 184, 0.15)",
    initial: "CIB",
  },
  {
    title: "Business English (Pre-Intermediate)",
    issuer: "American University in Cairo (AUC)",
    date: "February 2022",
    color: "#4FD1FF",
    bg: "rgba(79, 209, 255, 0.06)",
    border: "rgba(79, 209, 255, 0.12)",
    initial: "AUC",
  },
  {
    title: "English for Career Development",
    issuer: "OPEN MOOCs",
    date: "September 2021",
    color: "#94A3B8",
    bg: "rgba(148, 163, 184, 0.06)",
    border: "rgba(148, 163, 184, 0.12)",
    initial: "EM",
  },
  {
    title: "Advanced Excel Course",
    issuer: "LTC Solution",
    date: "2022",
    color: "#1E4DB7",
    bg: "rgba(30, 77, 183, 0.08)",
    border: "rgba(30, 77, 183, 0.18)",
    initial: "XL",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-28 relative"
      style={{
        background: "linear-gradient(180deg, #07111F 0%, #0B1F3A 60%, #07111F 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(79, 209, 255, 0.15), transparent)",
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
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#4FD1FF",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Credentials
          </p>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#F8FAFC",
            }}
          >
            Certifications & Training
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#94A3B8",
              marginTop: "1rem",
              maxWidth: "460px",
              margin: "1rem auto 0",
              lineHeight: 1.7,
            }}
          >
            Continuous learning across digital marketing, finance, language, and
            business communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300 cursor-default group"
              style={{
                background: cert.bg,
                border: `1px solid ${cert.border}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 800,
                      fontSize: cert.initial.length > 2 ? "0.625rem" : "0.75rem",
                      color: cert.color,
                      letterSpacing: cert.initial.length > 2 ? "-0.02em" : "0",
                    }}
                  >
                    {cert.initial}
                  </span>
                </div>
                <BookOpen size={16} color={cert.color} style={{ opacity: 0.6 }} />
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    color: "#F8FAFC",
                    lineHeight: 1.4,
                    marginBottom: "0.375rem",
                  }}
                >
                  {cert.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: cert.color,
                    opacity: 0.85,
                  }}
                >
                  {cert.issuer}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span
                  className="px-2.5 py-1 rounded-lg"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "#94A3B8",
                    background: "rgba(148, 163, 184, 0.08)",
                  }}
                >
                  Issued {cert.date}
                </span>
                <button
                  className="flex items-center gap-1.5 transition-all duration-200"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: cert.color,
                    opacity: 0.7,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = "0.7";
                  }}
                >
                  Verify
                  <ExternalLink size={11} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
