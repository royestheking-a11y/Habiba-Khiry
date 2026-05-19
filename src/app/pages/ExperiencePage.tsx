import { Experience } from "../components/Experience";
import { motion } from "motion/react";
import { Award, Briefcase, FileText } from "lucide-react";

export function ExperiencePage() {
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
              background: "radial-gradient(circle, #4FD1FF 0%, transparent 70%)",
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
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#4FD1FF",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            My Timeline
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#F8FAFC",
              letterSpacing: "-0.03em",
            }}
          >
            Work Experience & Milestones
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

      <Experience />

      {/* Career highlights stats summary */}
      <section className="pb-28 relative overflow-hidden" style={{ backgroundColor: "#07111F" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div 
            className="p-8 md:p-12 rounded-3xl text-center"
            style={{
              background: "rgba(15, 23, 42, 0.4)",
              border: "1px solid rgba(79, 209, 255, 0.08)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#F8FAFC",
                marginBottom: "1rem",
              }}
            >
              Curious about the full details?
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                color: "#94A3B8",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "500px",
                margin: "0 auto 2rem",
              }}
            >
              You can download my full resume for an offline copy of my roles, university credentials, and contact info.
            </p>
            <a
              href="/resume.pdf"
              download="Habiba_Khiry_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.9375rem",
                background: "linear-gradient(135deg, #1E4DB7, #4FD1FF22)",
                border: "1px solid rgba(79, 209, 255, 0.25)",
                color: "#4FD1FF",
                textDecoration: "none",
              }}
            >
              <FileText size={16} />
              Download My Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
