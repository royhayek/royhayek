"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { useApp } from "@/context/AppContext";
import { t } from "@/lib/translations";

// Fill these in after creating your EmailJS account at https://emailjs.com
// Service ID: connect your Outlook account under Email Services
// Template ID: create a template with variables {{from_name}}, {{from_email}}, {{message}}
// Public Key: found under Account > API Keys
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const INPUT_BASE =
  "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 border focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30";

export default function ContactForm() {
  const { lang } = useApp();
  const tx = t[lang];
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true;
    if (!form.message.trim()) e.message = true;
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message, to_email: "royhyk@outlook.com" },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-10 pb-24">
      <div className="divider mb-16" />

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-teal-500 dark:text-teal-400 text-sm font-medium tracking-widest uppercase mb-3">
            {tx.contact_label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "var(--text-primary)" }}>
            {tx.contact_title}
          </h2>
          <p className="leading-relaxed text-sm md:text-base" style={{ color: "var(--text-secondary)" }}>
            {tx.contact_desc}
          </p>

          {/* Decorative glow orb */}
          <div className="mt-12 hidden md:block pointer-events-none">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/10 blur-3xl" />
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              /* ── Success state ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-card rounded-2xl p-10 flex flex-col items-center text-center gap-5"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  <FiCheckCircle className="text-5xl text-teal-500" />
                </motion.div>
                <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                  {tx.contact_success_title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {tx.contact_success_desc}
                </p>
                <button
                  onClick={reset}
                  className="mt-2 text-sm text-teal-500 underline underline-offset-4 hover:text-teal-400 transition-colors"
                >
                  {tx.contact_send_another}
                </button>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-card rounded-2xl p-7 flex flex-col gap-5"
                noValidate
              >
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium mb-2 tracking-wide" style={{ color: "var(--text-secondary)" }}>
                    {tx.contact_name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={tx.contact_name_placeholder}
                    className={`${INPUT_BASE} ${errors.name ? "border-red-500/60" : ""}`}
                    style={{
                      background: "var(--bg)",
                      borderColor: errors.name ? undefined : "var(--card-border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium mb-2 tracking-wide" style={{ color: "var(--text-secondary)" }}>
                    {tx.contact_email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={tx.contact_email_placeholder}
                    className={`${INPUT_BASE} ${errors.email ? "border-red-500/60" : ""}`}
                    style={{
                      background: "var(--bg)",
                      borderColor: errors.email ? undefined : "var(--card-border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium mb-2 tracking-wide" style={{ color: "var(--text-secondary)" }}>
                    {tx.contact_message}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={tx.contact_message_placeholder}
                    rows={5}
                    className={`${INPUT_BASE} resize-none ${errors.message ? "border-red-500/60" : ""}`}
                    style={{
                      background: "var(--bg)",
                      borderColor: errors.message ? undefined : "var(--card-border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                {/* Error banner */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                    >
                      <FiAlertCircle className="shrink-0" />
                      {tx.contact_error}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                  whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                  className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 disabled:opacity-70 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 transition-all duration-300 group-hover:from-teal-500 group-hover:to-cyan-500" />
                  <span className="relative flex items-center gap-2">
                    {status === "sending" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full block"
                        />
                        {tx.contact_sending}
                      </>
                    ) : (
                      <>
                        <FiSend />
                        {tx.contact_send}
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
