import { motion } from "framer-motion";
import { Play, ArrowDown, ChevronRight } from "lucide-react";
import aeIcon from "../assets/ae.svg";
import prIcon from "../assets/pr.png";
import psIcon from "../assets/ps.png";
import drIcon from "../assets/dr.png";

export default function Hero() {
  const scrollToShowreel = () => {
    document.querySelector("#showreel")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-[#080808]/50 to-[#080808]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/40" />

      {/* Cinematic horizontal bars */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#080808] z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#080808] to-transparent z-10" />

      {/* Orange grid lines (subtle) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,115,22,1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="hero-content relative z-20 max-w-7xl mx-auto px-6 lg:px-10 pt-20 lg:pt-32 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        <div className="max-w-2xl flex-1" style={{ paddingLeft: '20px' }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-orange-500" />
            <span className="text-orange-400 text-sm font-medium tracking-[0.3em] uppercase">
              Digital Media Specialist
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-none tracking-wide text-white mb-6"
          >
            PATRICK
            <br />
            <span className="gradient-text glow-orange-text">RUBAN</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/60 text-lg md:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            Crafting visual stories through the Editing and Cinematography —{" "}
            <span className="text-white/90">weddings, commercials, music videos</span>{" "}
            and brand films that move people.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4"
            style={{ marginTop: '8px', marginBottom: '12px' }}
          >
            {/* Primary: Watch Showreel */}
            <motion.button
              id="hero-watch-showreel"
              onClick={scrollToShowreel}
              className="flex items-center gap-3 px-7 py-4 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40 group cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ padding: '8px' }}
            >
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play size={14} fill="white" />
              </span>
              Watch Showreel
            </motion.button>

            {/* Secondary: View Work */}
            <motion.button
              id="hero-view-work"
              onClick={scrollToPortfolio}
              className="flex items-center gap-2 px-7 py-4 border border-white/20 hover:border-orange-500/60 text-white font-semibold rounded-[10px] transition-all duration-300 hover:bg-white/5 group cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ padding: '8px' }}
            >
              View My Work
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-wrap gap-8 mt-16 pt-10 "
            style={{ marginTop: '12px', marginBottom: '8px' }}
          >
            {[
              { value: "30+", label: "Projects" },
              { value: "3+ Yrs", label: "Field Experience" },
              { value: "15+", label: "Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-orange-400 tracking-wide">{stat.value}</div>
                <div className="text-white/40 text-sm mt-1 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex-1 w-full max-w-md lg:max-w-xl xl:max-w-2xl relative mt-10 lg:mt-0 z-10"
          style={{ marginBottom: '40px' }}
        >
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-orange-500/30 blur-[100px] rounded-full -translate-y-10" />

            {/* orbit-scene contains image + both orbits so preserve-3d works */}
            <div className="orbit-scene relative">
              {/* Orbit A: AE + PR */}
              <div className="orbit-ring absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="orbit-icon absolute -top-7">
                  <img src={aeIcon} alt="After Effects" className="w-12 h-12 drop-shadow-[0_0_16px_rgba(153,153,255,0.9)]" />
                </div>
              </div>
              <div className="orbit-ring-delayed absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="orbit-icon-delayed absolute -top-7">
                  <img src={prIcon} alt="Premiere Pro" className="w-12 h-12 drop-shadow-[0_0_16px_rgba(234,119,255,0.9)]" />
                </div>
              </div>
              {/* Orbit B: PS + DR — same size, 70deg cross-tilted plane */}
              <div className="orbit-ring2 absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="orbit-icon2 absolute -top-7">
                  <img src={psIcon} alt="Photoshop" className="w-11 h-11 drop-shadow-[0_0_16px_rgba(49,168,255,0.9)]" />
                </div>
              </div>
              <div className="orbit-ring2-delayed absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="orbit-icon2-delayed absolute -top-7">
                  <img src={drIcon} alt="Photoshop" className="w-11 h-11 drop-shadow-[0_0_16px_rgba(49,168,255,0.9)]" />
                  {/* <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[10px] font-bold text-white drop-shadow-[0_0_16px_rgba(255,180,60,0)]" style={{ background: 'transparent' }}></div> */}
                </div>
              </div>

              {/* Image — center of orbit, inside preserve-3d context */}
              <img
                src="/images/Firefly_RemoveBackground.png"
                alt="Patrick Ruban"
                className="relative w-full h-auto object-cover"
              />
              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-[#080808] via-[#0f0f0f]/10 to-transparent pointer-events-none" />
            </div>

          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToShowreel}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/30 hover:text-orange-400 transition-colors cursor-pointer animate-float"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-[0.2em] uppercase font-medium">Scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
