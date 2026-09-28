import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function Showreel() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef<HTMLDivElement>(null);

  // YouTube embed URL (replace with actual showreel)
  const showreelId = "LXb3EKWsInQ"; // placeholder cinematic showreel

  return (
    <section id="showreel" className="relative py-28 bg-[#080808]" style={{ padding: '1.5rem' }}>
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12" style={{ paddingBottom: 'calc(1.5rem + 20px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-orange-500" />
              <span className="text-orange-400 text-xs font-medium tracking-[0.3em] uppercase">
                2026 Showreel
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-wide">
              FEATURED
              <span className="gradient-text"> WORK</span>
            </h2>
          </div>
          <p className="text-white/50 text-base max-w-sm leading-relaxed">
            A curated selection of my finest edits — each frame crafted with
            intention, each story told with soul.
          </p>
        </motion.div>
      </div>

      {/* Video player */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="max-w-7xl mx-auto px-6 lg:px-10"
      >
        <div
          ref={iframeRef}
          className="relative rounded-2xl overflow-hidden glow-orange"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Thumbnail overlay */}
          {!playing && (
            <div className="absolute inset-0 z-10 bg-[#0f0f0f] flex items-center justify-center group cursor-pointer"
              onClick={() => setPlaying(true)}
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-950/40 via-transparent to-orange-900/20" />
              <div className="absolute inset-0"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1536240478700-b869ad10e2c4?w=1400&q=80)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.4,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/30 to-[#080808]/80" />

              {/* Play button */}
              <motion.div
                className="relative z-10 w-24 h-24 rounded-full border-2 border-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:border-orange-400"
                style={{ boxShadow: "0 0 60px rgba(249,115,22,0.4)" }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-orange-500/90 flex items-center justify-center">
                  <Play size={28} fill="white" className="ml-1 text-white" />
                </div>
              </motion.div>

              <div className="absolute bottom-8 left-8 z-10">
                <p className="font-display text-3xl text-white tracking-widest">2024 SHOWREEL</p>
                <p className="text-white/40 text-sm mt-1">Click to play · 3:42</p>
              </div>
            </div>
          )}

          {/* YouTube Embed */}
          {playing && (
            <iframe
              src={`https://www.youtube.com/embed/${showreelId}?autoplay=1&mute=${muted ? 1 : 0}&rel=0&showinfo=0&controls=1`}
              title="Patrick Ruban Video Showreel 2024"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

          {/* Controls overlay (only for non-playing state) */}
          {!playing && (
            <button
              onClick={() => setMuted(!muted)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:border-orange-500/50 transition-colors cursor-pointer"
              aria-label="Toggle mute"
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          )}
        </div>
      </motion.div>

      {/* Decorative film strip */}
      <div className="mt-12 film-strip h-8 opacity-30" />
    </section>
  );
}
