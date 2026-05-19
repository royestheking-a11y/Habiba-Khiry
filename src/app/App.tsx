import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { SkillsPage } from "./pages/SkillsPage";
import { AchievementsPage } from "./pages/AchievementsPage";
import { ContactPage } from "./pages/ContactPage";

import { LanguageProvider, useLanguage } from "./context/LanguageContext";

function MainContent() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setScrollProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#07111F",
        fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
        color: "#F8FAFC",
        overflowX: "hidden",
      }}
    >
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 z-[200] h-[2px] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(to right, #1E4DB7, #4FD1FF)",
          left: isRtl ? "auto" : 0,
          right: isRtl ? 0 : "auto",
        }}
      />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <MainContent />
      </Router>
    </LanguageProvider>
  );
}
