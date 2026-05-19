import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download, Globe } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage, t, isRtl } = useLanguage();

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.experience"), to: "/experience" },
    { label: t("nav.skills"), to: "/skills" },
    { label: t("nav.achievements"), to: "/achievements" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(7, 17, 31, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(79, 209, 255, 0.08)" : "none",
      }}
    >
      <div 
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 group"
          style={{ 
            textDecoration: "none",
            flexDirection: isRtl ? "row-reverse" : "row"
          }}
        >
          <span
            className="transition-all duration-300 group-hover:opacity-90"
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

        {/* Desktop Nav */}
        <nav 
          className="hidden md:flex items-center gap-8"
          style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                fontWeight: isRtl ? 600 : 500,
                fontSize: "0.9rem",
                color: isActive ? "#4FD1FF" : "#94A3B8",
                transition: "color 0.2s",
                textDecoration: "none",
              })}
              onMouseEnter={(e) => {
                if (!(e.target as HTMLElement).classList.contains("active")) {
                  (e.target as HTMLElement).style.color = "#F8FAFC";
                }
              }}
              onMouseLeave={(e) => {
                const isActive = (e.target as HTMLElement).style.color === "rgb(79, 209, 255)";
                if (!isActive) {
                  (e.target as HTMLElement).style.color = "";
                }
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div 
          className="flex items-center gap-3"
          style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
        >
          {/* Premium Language Selector Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-200 select-none"
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              background: "rgba(15, 23, 42, 0.6)",
              borderColor: "rgba(79, 209, 255, 0.25)",
              color: "#4FD1FF",
              cursor: "pointer",
              boxShadow: "0 0 12px rgba(79, 209, 255, 0.05)",
              flexDirection: isRtl ? "row-reverse" : "row",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(79, 209, 255, 0.6)";
              (e.currentTarget as HTMLElement).style.background = "rgba(79, 209, 255, 0.08)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(79, 209, 255, 0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(79, 209, 255, 0.25)";
              (e.currentTarget as HTMLElement).style.background = "rgba(15, 23, 42, 0.6)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(79, 209, 255, 0.05)";
            }}
          >
            <Globe size={13} className="text-[#4FD1FF]" />
            <span>{language === "en" ? "العربية" : "English"}</span>
          </button>

          <a
            href="/resume.pdf"
            download="Habiba_Khiry_Resume.pdf"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200"
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
              fontWeight: isRtl ? 600 : 500,
              fontSize: "0.875rem",
              background: "linear-gradient(135deg, #1E4DB7, #4FD1FF22)",
              border: "1px solid rgba(79, 209, 255, 0.25)",
              color: "#4FD1FF",
              textDecoration: "none",
              flexDirection: isRtl ? "row-reverse" : "row",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, #1E4DB7, #4FD1FF44)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(79, 209, 255, 0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, #1E4DB7, #4FD1FF22)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(79, 209, 255, 0.25)";
            }}
          >
            <Download size={14} />
            {t("nav.download")}
          </a>

          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#94A3B8", background: "none", border: "none" }}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: "rgba(7, 17, 31, 0.98)",
              borderTop: "1px solid rgba(79, 209, 255, 0.08)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 ${isRtl ? "text-right" : "text-left"}`}
                  style={({ isActive }) => ({
                    fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                    fontWeight: isRtl ? 600 : 500,
                    fontSize: "1rem",
                    color: isActive ? "#4FD1FF" : "#94A3B8",
                    textDecoration: "none",
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="/resume.pdf"
                download="Habiba_Khiry_Resume.pdf"
                className="mt-2 p-3 rounded-lg text-center flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #1E4DB7, #4FD1FF22)",
                  border: "1px solid rgba(79, 209, 255, 0.25)",
                  color: "#4FD1FF",
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                  fontWeight: isRtl ? 600 : 500,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  flexDirection: isRtl ? "row-reverse" : "row",
                }}
              >
                <Download size={14} />
                {t("nav.download")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
