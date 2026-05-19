import { motion } from "motion/react";
import { Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Etisalat / e& UAE",
    role: "Trainer Specialist — SME",
    period: "Apr 2024 – Present",
    type: "Full-time · Remote/Hybrid",
    description:
      "Appointed as Trainer Specialist after consistently demonstrating leadership and communication excellence. Responsible for onboarding, coaching, and upskilling customer-facing teams across SME accounts.",
    achievements: [
      "Designed training programs for SME customer service teams",
      "Mentored new advisors on communication best practices",
      "Contributed to improved first-call resolution metrics",
    ],
    accent: "#4FD1FF",
  },
  {
    company: "Etisalat Global Services UAE",
    role: "SME Specialist",
    period: "Jan 2024 – Apr 2024",
    type: "Promoted · Full-time",
    description:
      "Promoted to SME Specialist role after being recognized as top achiever across multiple consecutive quarters. Managed complex B2B client relationships and escalations.",
    achievements: [
      "Recognized as Top Achiever every quarter",
      "Handled high-value SME portfolio relationships",
      "Bridged communication between clients and technical teams",
    ],
    accent: "#1E4DB7",
  },
  {
    company: "Etisalat Global Services UAE",
    role: "Call Center Advisor",
    period: "Jan 2023 – Dec 2023",
    type: "Full-time",
    description:
      "Started as a Call Center Advisor handling UAE-based customer accounts for one of the region's largest telecoms. Built deep expertise in telecom products, customer retention, and escalation handling.",
    achievements: [
      "Maintained consistently high CSAT scores",
      "Specialized in complex billing and technical queries",
      "Developed cross-selling techniques that exceeded targets",
    ],
    accent: "#1E4DB7",
  },
  {
    company: "Noon Egypt",
    role: "Escalation Specialist — Core & Complaints",
    period: "Aug 2022 – Dec 2022",
    type: "Full-time",
    description:
      "Specialized in handling the most sensitive and high-stakes customer situations including SPV callbacks, urgent escalations, and direct CPA/CEO-level complaints.",
    achievements: [
      "Managed CEO and CPA-level complaint resolutions",
      "Handled urgent callback queue with priority SLA compliance",
      "Developed conflict de-escalation frameworks",
    ],
    accent: "#94A3B8",
  },
  {
    company: "CIB – Commercial International Bank",
    role: "Summer Intern",
    period: "Summer 2021",
    type: "Internship",
    description:
      "Participated in CIB's Financial Inclusion Summer Training Program, gaining hands-on exposure to retail banking operations, client onboarding, and financial products.",
    achievements: [
      "Completed Financial Inclusion program",
      "Gained exposure to banking operations",
      "Built foundation in financial services",
    ],
    accent: "#94A3B8",
  },
  {
    company: "Banque Misr",
    role: "Summer Trainee",
    period: "Oct 2021",
    type: "Training",
    description:
      "Completed Banque Misr's Financial Inclusion training, deepening understanding of Egypt's financial ecosystem, inclusive banking products, and customer relationship principles.",
    achievements: [
      "Certified in Financial Inclusion",
      "Studied inclusive banking practices",
      "Applied accounting knowledge to real scenarios",
    ],
    accent: "#94A3B8",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-28 relative"
      style={{ backgroundColor: "#07111F" }}
    >
      {/* Section background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(79, 209, 255, 0.2), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
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
            Career Journey
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
            Professional Experience
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#94A3B8",
              marginTop: "1rem",
              maxWidth: "500px",
              margin: "1rem auto 0",
              lineHeight: 1.7,
            }}
          >
            A trajectory defined by growth, leadership, and a commitment to
            excellence in every role.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(30, 77, 183, 0.4) 10%, rgba(30, 77, 183, 0.4) 90%, transparent)",
            }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative flex gap-8 md:ml-0"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center mt-6">
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0 relative z-10"
                    style={{
                      background: exp.accent,
                      boxShadow: `0 0 12px ${exp.accent}60`,
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-2xl p-6 md:p-8 group cursor-default transition-all duration-300"
                  style={{
                    background: "rgba(15, 23, 42, 0.6)",
                    border: "1px solid rgba(79, 209, 255, 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(79, 209, 255, 0.15)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(15, 23, 42, 0.9)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(79, 209, 255, 0.06)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(15, 23, 42, 0.6)";
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 700,
                          fontSize: "1.0625rem",
                          color: "#F8FAFC",
                          lineHeight: 1.3,
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          color: exp.accent,
                          marginTop: "3px",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <div
                        className="flex items-center gap-1.5"
                        style={{ color: "#94A3B8" }}
                      >
                        <Calendar size={12} />
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.8125rem",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <span
                        className="px-2 py-0.5 rounded-md"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          color: "#94A3B8",
                          background: "rgba(148, 163, 184, 0.08)",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "#94A3B8",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    {exp.description}
                  </p>

                  <div className="flex flex-col gap-2">
                    {exp.achievements.map((ach, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <ChevronRight
                          size={14}
                          color="#4FD1FF"
                          className="mt-0.5 flex-shrink-0"
                        />
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.875rem",
                            color: "#94A3B8",
                            lineHeight: 1.5,
                          }}
                        >
                          {ach}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
