import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollY } from "../hooks/useScrollY";

const navLinks = [
  { href: "#showreel", label: "Showreel" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = scrollY > 60;

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between" style={{ paddingLeft: '25px', paddingRight: '25px' }}>
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center group pl-2 md:pl-4"
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-['Nunito'] font-bold text-2xl tracking-widest text-white group-hover:text-orange-400 transition-colors">
              PATRICK<span className="text-orange-500">.</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link font-['Nunito'] text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide cursor-pointer"

                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:block font-['Nunito'] text-sm font-semibold px-8 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{ padding: '8px' }}
          >
            Contact Us
          </motion.button>

          {/* Mobile burger */}
          <button
            id="nav-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:border-orange-500/40 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="font-display text-4xl tracking-widest text-white/80 hover:text-orange-500 transition-colors cursor-pointer"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              onClick={() => handleNavClick("#contact")}
              className="mt-4 font-['Nunito'] text-base font-semibold px-10 py-3.5 rounded-lg bg-orange-500 text-white cursor-pointer hover:bg-orange-400 transition-colors"
              style={{ padding: '8px' }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
