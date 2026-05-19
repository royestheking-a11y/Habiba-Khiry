import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { language, isRtl } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", company: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(15, 23, 42, 0.6)",
    border: "1px solid rgba(79, 209, 255, 0.1)",
    borderRadius: "0.75rem",
    padding: "0.875rem 1rem",
    fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
    fontSize: "0.9375rem",
    color: "#F8FAFC",
    outline: "none",
    transition: "border-color 0.2s",
    textAlign: isRtl ? "right" : "left",
  };

  return (
    <section
      id="contact"
      className="py-28 relative"
      style={{ backgroundColor: "#07111F" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(79, 209, 255, 0.15), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: isRtl ? "0" : "0.12em",
              color: "#4FD1FF",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            {language === "ar" ? "تواصل معي" : "Get In Touch"}
          </p>
          <h2
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: isRtl ? 1.3 : 1.15,
              letterSpacing: isRtl ? "0" : "-0.03em",
              color: "#F8FAFC",
            }}
          >
            {language === "ar" ? "لنبدأ قنوات التواصل" : "Let's Connect"}
          </h2>
          <p
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#94A3B8",
              marginTop: "1rem",
              maxWidth: "440px",
              margin: "1rem auto 0",
              lineHeight: 1.7,
            }}
          >
            {language === "ar" 
              ? "مرحّبة بكافة شراكات تدريب الشركات، والفرص المهنية الملهمة، والتواصل المعرفي المفيد." 
              : "Open to training partnerships, career opportunities, and professional connections."}
          </p>
        </motion.div>

        <div 
          className="grid lg:grid-cols-5 gap-12 items-start"
          style={{ direction: isRtl ? "rtl" : "ltr" }}
        >
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
            style={{ textAlign: isRtl ? "right" : "left" }}
          >
            <div>
              <h3
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "#F8FAFC",
                  marginBottom: "0.5rem",
                }}
              >
                {language === "ar" ? "بيانات التواصل" : "Contact Information"}
              </h3>
              <p
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "#94A3B8",
                  lineHeight: 1.7,
                }}
              >
                {language === "ar" 
                  ? "يمكنك الاتصال بي مباشرةً عبر البريد الإلكتروني أو الهاتف، أو زيارة حسابي المهني على لينكد إن." 
                  : "Reach out directly via email or phone, or connect on LinkedIn."}
              </p>
            </div>

            {[
              { icon: Mail, label: language === "ar" ? "البريد الإلكتروني" : "Email", value: "habibakhiry431@gmail.com", href: "mailto:habibakhiry431@gmail.com" },
              { icon: Phone, label: language === "ar" ? "الهاتف" : "Phone", value: "+20 111 500 9919", href: "tel:+201115009919" },
              { icon: MapPin, label: language === "ar" ? "الموقع" : "Location", value: language === "ar" ? "القاهرة، مصر · متاحة للانتقال للإمارات 🇦🇪" : "Cairo, Egypt · Open to UAE", href: null },
              { icon: Linkedin, label: language === "ar" ? "لينكد إن" : "LinkedIn", value: "Habiba Khiry", href: "https://www.linkedin.com/in/habiba-khiry-a66a9221a/" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4"
                style={{ flexDirection: isRtl ? "row-reverse" : "row" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(30, 77, 183, 0.12)",
                    border: "1px solid rgba(79, 209, 255, 0.1)",
                  }}
                >
                  <item.icon size={16} color="#4FD1FF" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "#94A3B8",
                      textTransform: "uppercase",
                      letterSpacing: isRtl ? "0" : "0.06em",
                      marginBottom: "2px",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      style={{
                        fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "#F8FAFC",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#4FD1FF")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "#F8FAFC")
                      }
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "#F8FAFC",
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl flex flex-col gap-5"
              style={{
                background: "rgba(15, 23, 42, 0.6)",
                border: "1px solid rgba(79, 209, 255, 0.08)",
                textAlign: isRtl ? "right" : "left",
              }}
            >
              <div 
                className="grid sm:grid-cols-2 gap-5"
                style={{ direction: isRtl ? "rtl" : "ltr" }}
              >
                <div className="flex flex-col gap-2">
                  <label
                    style={{
                      fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "#94A3B8",
                    }}
                  >
                    {language === "ar" ? "الاسم الكامل" : "Full Name"}
                  </label>
                  <input
                    required
                    placeholder={language === "ar" ? "اسمك الكريم" : "Your name"}
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(79, 209, 255, 0.3)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(79, 209, 255, 0.1)";
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    style={{
                      fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "#94A3B8",
                    }}
                  >
                    {language === "ar" ? "البريد الإلكتروني" : "Email Address"}
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(79, 209, 255, 0.3)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(79, 209, 255, 0.1)";
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  style={{
                    fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "#94A3B8",
                  }}
                >
                  {language === "ar" ? "الشركة / المؤسسة" : "Company / Organization"}
                </label>
                <input
                  placeholder={language === "ar" ? "أين تعمل حالياً؟" : "Where do you work?"}
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  style={inputStyle}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "rgba(79, 209, 255, 0.3)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = "rgba(79, 209, 255, 0.1)";
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  style={{
                    fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "#94A3B8",
                  }}
                >
                  {language === "ar" ? "الرسالة" : "Message"}
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder={language === "ar" ? "أخبرني عن فرصتك المهنية أو أي استفسار تود طرحه..." : "Tell me about your opportunity or question..."}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = "rgba(79, 209, 255, 0.3)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = "rgba(79, 209, 255, 0.1)";
                  }}
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl transition-all duration-200"
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  background: submitted
                    ? "linear-gradient(135deg, #059669, #0B1F3A)"
                    : "linear-gradient(135deg, #1E4DB7, #0B1F3A)",
                  border: submitted
                    ? "1px solid rgba(5, 150, 105, 0.4)"
                    : "1px solid rgba(30, 77, 183, 0.5)",
                  color: "#F8FAFC",
                  flexDirection: isRtl ? "row-reverse" : "row",
                  boxShadow: submitted
                    ? "0 0 24px rgba(5, 150, 105, 0.25)"
                    : "0 0 24px rgba(30, 77, 183, 0.25)",
                }}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    {language === "ar" ? "تم إرسال الرسالة بنجاح!" : "Message Sent!"}
                  </>
                ) : (
                  <>
                    <Send size={16} className={isRtl ? "rotate-180" : ""} />
                    {language === "ar" ? "إرسال الرسالة" : "Send Message"}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
