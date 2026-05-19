import { motion } from "motion/react";
import {
  MessageSquare,
  Users,
  HandshakeIcon,
  GraduationCap,
  ShoppingBag,
  BarChart2,
  FileSpreadsheet,
  Globe,
  Zap,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react";

const skills = [
  {
    icon: MessageSquare,
    title: "Communication",
    desc: "Expert verbal and written communication across diverse audiences and cultures.",
  },
  {
    icon: Users,
    title: "Customer Service",
    desc: "End-to-end customer journey management with a focus on satisfaction and retention.",
  },
  {
    icon: HandshakeIcon,
    title: "Negotiation",
    desc: "Skilled in high-stakes negotiations, conflict resolution, and win-win outcomes.",
  },
  {
    icon: GraduationCap,
    title: "Training & Mentoring",
    desc: "Designing and delivering impactful training programs for corporate teams.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Operations",
    desc: "Deep understanding of e-commerce escalation flows and complaint resolution.",
  },
  {
    icon: BarChart2,
    title: "Power BI & Analytics",
    desc: "Data visualization and reporting to track performance and drive insights.",
  },
  {
    icon: FileSpreadsheet,
    title: "Advanced Excel",
    desc: "Proficient in data modeling, pivot tables, and financial analysis tools.",
  },
  {
    icon: Globe,
    title: "Business English",
    desc: "Upper-intermediate English with AUC-certified business communication skills.",
  },
  {
    icon: Zap,
    title: "Escalation Handling",
    desc: "Specialized in CPA/CEO-level escalations and sensitive complaint management.",
  },
  {
    icon: Shield,
    title: "Financial Inclusion",
    desc: "Trained in inclusive banking practices and financial services (Banque Misr, CIB).",
  },
  {
    icon: Clock,
    title: "Time Management",
    desc: "Flexible, deadline-driven professional with strong organizational capacity.",
  },
  {
    icon: TrendingUp,
    title: "Leadership",
    desc: "Proven ability to lead, support, and inspire teams toward shared goals.",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-28 relative"
      style={{
        background:
          "linear-gradient(180deg, #07111F 0%, #0B1F3A 50%, #07111F 100%)",
      }}
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
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#4FD1FF",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Expertise
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
            Areas of Expertise
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#94A3B8",
              marginTop: "1rem",
              maxWidth: "480px",
              margin: "1rem auto 0",
              lineHeight: 1.7,
            }}
          >
            A versatile skill set built across corporate training, customer
            experience, and business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-6 rounded-2xl transition-all duration-300 cursor-default"
              style={{
                background: "rgba(15, 23, 42, 0.5)",
                border: "1px solid rgba(79, 209, 255, 0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(79, 209, 255, 0.2)";
                el.style.background = "rgba(15, 23, 42, 0.9)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(79, 209, 255, 0.06)";
                el.style.background = "rgba(15, 23, 42, 0.5)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30,77,183,0.2), rgba(79,209,255,0.1))",
                  border: "1px solid rgba(79, 209, 255, 0.1)",
                }}
              >
                <skill.icon size={18} color="#4FD1FF" />
              </div>

              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  color: "#F8FAFC",
                  marginBottom: "0.5rem",
                }}
              >
                {skill.title}
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  color: "#94A3B8",
                  lineHeight: 1.6,
                }}
              >
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
