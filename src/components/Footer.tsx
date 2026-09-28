import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/patz_rick007" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://app.notion.com/Patrick-Ruban-Anthony-2cf5cd40089e80ecab26d6b920fa8191?source=copy_link" },
];

const footerLinks = [
  { label: "Showreel", href: "#showreel" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080808] border-t border-white/6 pt-16 pb-8 overflow-hidden" style={{ padding: '1.5rem' }}>
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ padding: '10px' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">

              <span className="font-display text-2xl tracking-widest text-white">
                PATRICK<span className="text-orange-500">.</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Professional video editor & cinematographer. Crafting cinematic stories
              that move people — worldwide.
            </p>
            {/* Social icons */}
            <div className="flex gap-3" style={{ marginTop: '10px' }}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-orange-400 hover:border-orange-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white/30 text-xs font-medium tracking-[0.25em] uppercase mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white/45 text-sm hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <p className="text-white/30 text-xs font-medium tracking-[0.25em] uppercase mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {["Wedding Films", "Commercial & Ads", "Music Videos", "Brand Films", "Editing Only"].map(
                (s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-white/45 text-sm hover:text-orange-400 transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" style={{ marginTop: '15px' }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Patrick Ruban. All rights reserved. Rookasp Solutions.
          </p>

          {/* Back to top */}
          <motion.button
            id="back-to-top"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/30 hover:text-orange-400 text-xs transition-colors group cursor-pointer"
            whileHover={{ y: -2 }}
          >
            Back to top
            <div className="w-7 h-7 rounded-full border border-white/15 group-hover:border-orange-500/40 flex items-center justify-center transition-colors">
              <ArrowUp size={13} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
