const companies = [
  { name: "e& UAE", sub: "Etisalat Group" },
  { name: "Noon", sub: "Egypt" },
  { name: "Banque Misr", sub: "Financial Training" },
  { name: "CIB", sub: "Commercial International Bank" },
  { name: "AUC", sub: "American University in Cairo" },
  { name: "Google", sub: "Digital Marketing" },
];

const repeated = [...companies, ...companies, ...companies];

export function TrustBar() {
  return (
    <section
      className="py-16 overflow-hidden relative"
      style={{
        backgroundColor: "#07111F",
        borderTop: "1px solid rgba(79, 209, 255, 0.06)",
        borderBottom: "1px solid rgba(79, 209, 255, 0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p
          className="text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8125rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            color: "#94A3B8",
            textTransform: "uppercase",
          }}
        >
          Professional Experience With
        </p>
      </div>

      <div className="relative">
        {/* Fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #07111F, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #07111F, transparent)",
          }}
        />

        <div
          className="flex gap-8"
          style={{
            animation: "marquee-slide 30s linear infinite",
            width: "max-content",
          }}
        >
          {repeated.map((company, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center px-8 py-4 rounded-xl"
              style={{
                background: "rgba(15, 23, 42, 0.5)",
                border: "1px solid rgba(79, 209, 255, 0.08)",
                minWidth: "160px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#F8FAFC",
                  opacity: 0.7,
                }}
              >
                {company.name}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6875rem",
                  color: "#94A3B8",
                  marginTop: "2px",
                }}
              >
                {company.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-${companies.length} * (160px + 2rem))); }
        }
      `}</style>
    </section>
  );
}
