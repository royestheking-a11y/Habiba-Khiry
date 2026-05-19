import { motion } from "motion/react";
import { Quote } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Listen First",
    desc: "Every great customer interaction begins with truly hearing what the person needs — not just what they say.",
  },
  {
    number: "02",
    title: "Empower, Don't Script",
    desc: "Trained advisors who understand principles outperform those who follow scripts. Real empowerment creates real results.",
  },
  {
    number: "03",
    title: "Excellence is Repeatable",
    desc: "Top performance isn't luck — it's the result of deliberate practice, strong habits, and continuous reflection.",
  },
];

export function Philosophy() {
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
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              color: "#F8FAFC",
              maxWidth: "720px",
              margin: "0 auto",
            }}
          >
            "Great customer experience starts with{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #4FD1FF, #1E4DB7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              empowered communication
            </span>
            ."
          </blockquote>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div
              className="w-8 h-px"
              style={{ background: "rgba(79, 209, 255, 0.3)" }}
            />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#94A3B8",
              }}
            >
              Habiba Khiry El Najar
            </p>
            <div
              className="w-8 h-px"
              style={{ background: "rgba(79, 209, 255, 0.3)" }}
            />
          </div>
        </motion.div>

        {/* Training principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(15, 23, 42, 0.4)",
                border: "1px solid rgba(79, 209, 255, 0.07)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: "2.5rem",
                  lineHeight: 1,
                  color: "rgba(79, 209, 255, 0.12)",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                {p.number}
              </span>
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
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
                  fontFamily: "'Inter', sans-serif",
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
