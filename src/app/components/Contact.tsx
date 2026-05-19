import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", company: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(15, 23, 42, 0.6)",
    border: "1px solid rgba(79, 209, 255, 0.1)",
    borderRadius: "0.75rem",
    padding: "0.875rem 1rem",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9375rem",
    color: "#F8FAFC",
    outline: "none",
    transition: "border-color 0.2s",
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
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#4FD1FF",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Get In Touch
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
            Let's Connect
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#94A3B8",
              marginTop: "1rem",
              maxWidth: "440px",
              margin: "1rem auto 0",
              lineHeight: 1.7,
            }}
          >
            Open to training partnerships, career opportunities, and professional connections.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "#F8FAFC",
                  marginBottom: "0.5rem",
                }}
              >
                Contact Information
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "#94A3B8",
                  lineHeight: 1.7,
                }}
              >
                Reach out directly via email or phone, or connect on LinkedIn.
              </p>
            </div>

            {[
              { icon: Mail, label: "Email", value: "habibakhiry431@gmail.com", href: "mailto:habibakhiry431@gmail.com" },
              { icon: Phone, label: "Phone", value: "+20 111 500 9919", href: "tel:+201115009919" },
              { icon: MapPin, label: "Location", value: "Cairo, Egypt · Open to UAE", href: null },
              { icon: Linkedin, label: "LinkedIn", value: "Habiba Khiry", href: "https://www.linkedin.com/in/habiba-khiry-a66a9221a/" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4"
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
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "#94A3B8",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
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
                        fontFamily: "'Inter', sans-serif",
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
                        fontFamily: "'Inter', sans-serif",
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
            initial={{ opacity: 0, x: 30 }}
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
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "#94A3B8",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    required
                    placeholder="Your name"
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
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "#94A3B8",
                    }}
                  >
                    Email Address
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
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "#94A3B8",
                  }}
                >
                  Company / Organization
                </label>
                <input
                  placeholder="Where do you work?"
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
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "#94A3B8",
                  }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your opportunity or question..."
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
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  background: submitted
                    ? "linear-gradient(135deg, #059669, #0B1F3A)"
                    : "linear-gradient(135deg, #1E4DB7, #0B1F3A)",
                  border: submitted
                    ? "1px solid rgba(5, 150, 105, 0.4)"
                    : "1px solid rgba(30, 77, 183, 0.5)",
                  color: "#F8FAFC",
                  boxShadow: submitted
                    ? "0 0 24px rgba(5, 150, 105, 0.25)"
                    : "0 0 24px rgba(30, 77, 183, 0.25)",
                }}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
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
