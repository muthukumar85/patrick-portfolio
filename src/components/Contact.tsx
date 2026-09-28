import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Send, Check } from "lucide-react";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

const WHATSAPP_NUMBER = "+917548889670"; // Replace with actual number
const EMAIL = "patrickruban007@gmail.com";

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Patrick! I'm interested in your video editing services. My name is ${form.name || "..."}. I'd like to discuss: ${form.service || "a project"}.`
  );

  return (
    <section id="contact" className="py-28 bg-[#080808] relative overflow-hidden" style={{ padding: '1.5rem' }}>
      {/* Background glow */}
      <div
        className="absolute left-0 bottom-0 w-[500px] h-[500px] opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-orange-500" />
            <span className="text-orange-400 text-xs font-medium tracking-[0.3em] uppercase">
              Let's Work Together
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wide">
            GET IN <span className="gradient-text">TOUCH</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="text-white/55 text-base leading-relaxed">
                Have a project in mind? I'd love to hear about it. Drop me a message,
                reach out on WhatsApp, or send an email. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-5">
              {/* WhatsApp */}
              <a
                id="contact-whatsapp"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/8 hover:border-green-500/40 group transition-all duration-300 hover:bg-green-500/5"
                style={{ marginBottom: '8px', marginTop: '8px' }}
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle size={22} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">WhatsApp</p>
                  <p className="text-white/40 text-sm">Chat instantly · Usually replies within 1h</p>
                </div>
              </a>

              {/* Email */}
              <a
                id="contact-email"
                href={`mailto:${EMAIL}?subject=Video%20Editing%20Project%20Inquiry`}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/8 hover:border-orange-500/40 group transition-all duration-300 hover:bg-orange-500/5"
                style={{ marginBottom: '8px' }}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Mail size={22} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Email</p>
                  <p className="text-white/40 text-sm">{EMAIL}</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                id="contact-instagram"
                href="https://www.instagram.com/patz_rick007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-white/8 hover:border-pink-500/40 group transition-all duration-300 hover:bg-pink-500/5"
                style={{ marginBottom: '8px' }}
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <IoLogoInstagram size={22} className="text-pink-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Instagram</p>
                  <p className="text-white/40 text-sm">@patz_rick007</p>
                </div>
              </a>

              {/* LinkedIn / Notion */}
              <a
                id="contact-linkedin"
                href="https://app.notion.com/Patrick-Ruban-Anthony-2cf5cd40089e80ecab26d6b920fa8191?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-white/8 hover:border-blue-500/40 group transition-all duration-300 hover:bg-blue-500/5"
                style={{ marginBottom: '8px' }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <IoLogoLinkedin size={22} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">LinkedIn / Resume</p>
                  <p className="text-white/40 text-sm">View my professional profile</p>
                </div>
              </a>
            </div>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5" style={{ padding: '8px' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Available for new projects</span>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8 border border-white/8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-5 animate-pulse-glow">
                    <Check size={36} className="text-orange-400" />
                  </div>
                  <h3 className="font-display text-3xl text-white tracking-wide mb-3">
                    MESSAGE SENT!
                  </h3>
                  <p className="text-white/50 text-base">
                    Thanks for reaching out, {form.name}. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", service: "", message: "" }); }}
                    className="mt-8 text-sm text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  style={{ padding: '8px' }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-white/50 text-xs font-medium tracking-widest uppercase mb-2" style={{ padding: '8px' }}>
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="contact-input w-full rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/20"
                        style={{ padding: '8px' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-white/50 text-xs font-medium tracking-widest uppercase mb-2" style={{ padding: '8px' }}>
                        Email Address
                      </label>
                      <input
                        id="contact-email-input"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="contact-input w-full rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/20"
                        style={{ padding: '8px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-white/50 text-xs font-medium tracking-widest uppercase mb-2" style={{ padding: '8px' }}>
                      Service Needed
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="contact-input w-full rounded-xl px-5 py-4 text-sm cursor-pointer"
                      style={{ color: form.service ? "white" : "rgba(255,255,255,0.2)", padding: '8px' }}
                    >
                      <option value="" disabled className="bg-[#161616] text-white/40">
                        Select a service...
                      </option>
                      <option value="Wedding Film" className="bg-[#161616] text-white">Wedding Film</option>
                      <option value="Commercial / Ad" className="bg-[#161616] text-white">Commercial / Ad</option>
                      <option value="Music Video" className="bg-[#161616] text-white">Music Video</option>
                      <option value="Brand Film" className="bg-[#161616] text-white">Brand Film</option>
                      <option value="Documentary" className="bg-[#161616] text-white">Documentary</option>
                      <option value="Editing Only" className="bg-[#161616] text-white">Editing Only</option>
                      <option value="Other" className="bg-[#161616] text-white">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-white/50 text-xs font-medium tracking-widest uppercase mb-2" style={{ padding: '8px' }}>
                      Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project, timeline, and budget..."
                      className="contact-input w-full rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/20 resize-none"
                      style={{ padding: '8px' }}
                    />
                  </div>

                  <motion.button
                    id="contact-submit"
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-orange-500 hover:bg-orange-400 disabled:bg-orange-500/50 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer disabled:cursor-not-allowed"
                    whileHover={!submitting ? { scale: 1.02 } : {}}
                    whileTap={!submitting ? { scale: 0.98 } : {}}
                    style={{ padding: '8px' }}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
