import { Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { language, t, isRtl } = useLanguage();

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.experience"), to: "/experience" },
    { label: t("nav.skills"), to: "/skills" },
    { label: t("nav.achievements"), to: "/achievements" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  return (
    <footer
      className="relative"
      style={{
        backgroundColor: "#07111F",
        borderTop: "1px solid rgba(79, 209, 255, 0.07)",
      }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(79, 209, 255, 0.2), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          style={{ direction: isRtl ? "rtl" : "ltr" }}
        >
          {/* Brand */}
          <div style={{ textAlign: isRtl ? "right" : "left" }}>
            <Link 
              to="/" 
              className="flex items-center gap-1 mb-4" 
              style={{ 
                textDecoration: "none",
                flexDirection: isRtl ? "row-reverse" : "row",
                justifyContent: isRtl ? "flex-start" : "flex-start"
              }}
            >
              <span
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  letterSpacing: isRtl ? "0" : "-0.03em",
                  background: "linear-gradient(90deg, #F8FAFC 60%, #4FD1FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {language === "ar" ? "حبيبة خيري" : "Habiba Khiry"}
              </span>
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "#4FD1FF",
                  alignSelf: "flex-end",
                  marginBottom: "5px",
                  boxShadow: "0 0 8px #4FD1FF",
                  marginLeft: isRtl ? "0" : "2px",
                  marginRight: isRtl ? "2px" : "0",
                }}
              />
            </Link>
            <p
              style={{
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                fontSize: "0.875rem",
                color: "#94A3B8",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              {t("footer.desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ textAlign: isRtl ? "right" : "left" }}>
            <h4
              style={{
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "#F8FAFC",
                marginBottom: "1.25rem",
                letterSpacing: isRtl ? "0" : "0.04em",
              }}
            >
              {t("footer.links.title")}
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`transition-colors duration-200 ${isRtl ? "text-right" : "text-left"}`}
                  style={{
                    fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "#94A3B8",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#F8FAFC")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#94A3B8")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div style={{ textAlign: isRtl ? "right" : "left" }}>
            <h4
              style={{
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "#F8FAFC",
                marginBottom: "1.25rem",
                letterSpacing: isRtl ? "0" : "0.04em",
              }}
            >
              {language === "ar" ? "بيانات الاتصال" : "Contact"}
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon: Mail, text: "habibakhiry431@gmail.com", href: "mailto:habibakhiry431@gmail.com" },
                { icon: Phone, text: "+20 111 500 9919", href: "tel:+201115009919" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-2.5 group"
                  style={{ 
                    textDecoration: "none",
                    flexDirection: isRtl ? "row-reverse" : "row"
                  }}
                >
                  <item.icon size={14} color="#4FD1FF" />
                  <span
                    style={{
                      fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#94A3B8",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#F8FAFC")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#94A3B8")
                    }
                  >
                    {item.text}
                  </span>
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <a
              href="https://www.linkedin.com/in/habiba-khiry-a66a9221a/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200"
              style={{
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "#4FD1FF",
                background: "rgba(79, 209, 255, 0.06)",
                border: "1px solid rgba(79, 209, 255, 0.15)",
                textDecoration: "none",
                flexDirection: isRtl ? "row-reverse" : "row",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(79, 209, 255, 0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(79, 209, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(79, 209, 255, 0.06)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(79, 209, 255, 0.15)";
              }}
            >
              <Linkedin size={14} />
              {t("footer.social.btn")}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ 
            borderTop: "1px solid rgba(79, 209, 255, 0.06)",
            flexDirection: isRtl ? "row-reverse" : "row"
          }}
        >
          <p
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
              fontSize: "0.8125rem",
              color: "#94A3B8",
              textAlign: isRtl ? "right" : "left",
            }}
          >
            {t("footer.copy")}
          </p>
          <p
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
              fontSize: "0.8125rem",
              color: "#94A3B8",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              flexDirection: isRtl ? "row-reverse" : "row",
            }}
          >
            <span>{t("footer.credit")}</span>
            <a
              href="https://www.linkedin.com/in/aurangzebsunny/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#4FD1FF",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#F8FAFC")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#4FD1FF")
              }
            >
              {language === "ar" ? "أورنجزيب سني" : "Aurangzeb Sunny"}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
