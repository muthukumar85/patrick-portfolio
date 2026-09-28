import { motion } from "framer-motion";
import { Camera, Zap } from "lucide-react";
import { stats } from "../data/portfolioData";
import aeIcon from "../assets/ae.svg";
import drIcon from "../assets/dr.png";
import lrIcon from "../assets/lr.png";
import prIcon from "../assets/pr.png";
import psIcon from "../assets/ps.png";

const tools = [
  { src: aeIcon, label: "After Effects" },
  { src: drIcon, label: "DaVinci Resolve" },
  { src: psIcon, label: "Photoshop" },
  { src: prIcon, label: "Premiere Pro" },
  { src: lrIcon, label: "Lightroom" },
];

const highlights = [
  {
    icon: Camera,
    title: "Cinematic Eye",
    desc: "Every cut is intentional. I see the story before I touch the timeline.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Premium quality delivered on schedule, every time, without compromise.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080808 0%, #0d0d0d 100%)", padding: '1.5rem' }}
    >
      {/* Background decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main portrait */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto" style={{ maxHeight: "600px" }}>
              <img
                src="/images/Firefly_RemoveBackground.png"
                alt="Patrick Ruban — Video Editor"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
            </div>

            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -right-4 grid grid-cols-2 gap-3 p-4 glass-card rounded-2xl border border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center px-4 py-3">
                  <div className="font-display text-2xl text-orange-400 tracking-wide">{stat.value}</div>
                  <div className="text-white/40 text-xs tracking-wider uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Orange accent line */}
            <div className="absolute -right-8 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-orange-500 to-transparent" />
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-orange-500" />
              <span className="text-orange-400 text-xs font-medium tracking-[0.3em] uppercase">
                About Me
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl text-white tracking-wide mb-6">
              THE EDITOR<br />
              <span className="gradient-text">BEHIND THE FRAME</span>
            </h2>

            <p className="text-white/55 text-base leading-relaxed mb-5">
              I'm <strong className="text-white/90">Patrick Ruban</strong>, a Digital Media Specialist and Content Creator with a passion for visual storytelling.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              I work across video, camera, content, design, and motion — bringing ideas together to create visuals that communicate, connect, and feel right.</p>
            <p className="text-white/50 text-base leading-relaxed mb-8">My philosophy is simple: every frame should serve the <em className="text-orange-300/80">story</em>.
            </p>

            {/* Highlights */}
            <div className="space-y-5 mb-10" style={{ marginBottom: '10px', marginTop: '10px' }}>
              {highlights.map((h) => (
                <div key={h.title} className="flex items-start gap-4" style={{ marginBottom: '10px' }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mt-0.5">
                    <h.icon size={18} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{h.title}</p>
                    <p className="text-white/40 text-sm mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tool logos */}
            <div>
              <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-4" style={{ marginBottom: '10px' }}>Tools & Software</p>
              <div className="flex flex-wrap gap-4 items-center">
                {tools.map((tool) => (
                  <div key={tool.label} className="group flex flex-col items-center gap-1.5">
                    <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2.5 group-hover:border-orange-500/40 group-hover:bg-orange-500/5 transition-all duration-300">
                      <img src={tool.src} alt={tool.label} className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]" />
                    </div>
                    <span className="text-white/30 text-[10px] group-hover:text-orange-400 transition-colors">{tool.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
