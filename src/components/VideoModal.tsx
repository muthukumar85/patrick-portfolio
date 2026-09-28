import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Clock, Play, User, Calendar } from "lucide-react";
import type { PortfolioItem } from "../data/portfolioData";

interface VideoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  if (!item) return null;

  const isDrive = item.videoUrl.includes("drive.google.com");
  const driveUrl = item.videoUrl.replace("/preview", "/view");

  const handleOpenDrive = () => {
    window.open(driveUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          id="video-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
        >
          {/* ── Modal Card: 50vh on Mobile, Auto Natural Height on Desktop ── */}
          <motion.div
            id="video-modal-card"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative flex flex-col
              w-full max-w-5xl
              h-[50vh] md:h-auto
              rounded-2xl border border-white/15
              bg-[#0c0c0c] shadow-2xl
              overflow-hidden
            "
          >
            {/* Close Button */}
            <button
              id="video-modal-close"
              onClick={onClose}
              className="absolute top-2.5 right-2.5 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/80 hover:bg-orange-500 border border-white/20 flex items-center justify-center text-white transition-all duration-200 cursor-pointer shadow-xl backdrop-blur-md active:scale-95"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            {/* ═══════════════ MOBILE VIEW (< md) ═══════════════ */}
            <div className="flex flex-col h-full md:hidden">
              {/* Mobile Video Area */}
              <div className="relative flex-1 w-full min-h-0 bg-black flex items-center justify-center overflow-hidden">
                {isDrive ? (
                  /* Tap to play on Google Drive */
                  <div
                    className="relative w-full h-full flex items-center justify-center cursor-pointer group select-none"
                    onClick={handleOpenDrive}
                    role="button"
                    tabIndex={0}
                    aria-label="Play on Google Drive"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-contain bg-black"
                    />
                    <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors" />

                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-[0_0_35px_rgba(249,115,22,0.8)] active:scale-95 transition-transform">
                        <Play size={24} fill="white" className="ml-1 text-white" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-[11px] text-white font-medium backdrop-blur-md shadow-md">
                        <span>Play in Drive</span>
                        <ExternalLink size={11} className="text-orange-400" />
                      </span>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src={`${item.videoUrl}?autoplay=1&rel=0&showinfo=0`}
                    title={item.title}
                    className="w-full h-full border-0"
                    allow="autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Mobile Info Bar */}
              <div
                className="w-full bg-[#0c0c0c]/95 border-t border-white/10 px-3.5 py-2 flex-shrink-0 z-40"
                style={{ padding: "8px" }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full px-2 py-0.5">
                        {item.category}
                      </span>
                      <span className="text-white/40 text-[11px] truncate">
                        {item.client} · {item.year}
                      </span>
                    </div>
                    <h3 className="font-display text-sm text-white tracking-wide truncate">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isDrive ? (
                      <button
                        onClick={handleOpenDrive}
                        className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 hover:border-orange-500/40 cursor-pointer"
                      >
                        <ExternalLink size={12} />
                        <span>Open Drive</span>
                      </button>
                    ) : (
                      <a
                        href={item.videoUrl.replace("/embed/", "/watch?v=")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 hover:border-orange-500/40"
                      >
                        <ExternalLink size={12} />
                        <span>Watch</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ═══════════════ DESKTOP VIEW (>= md) ═══════════════ */}
            <div className="hidden md:block">
              {/* Desktop 16:9 Video Embed */}
              <div className="relative bg-black w-full" style={{ aspectRatio: "16/9" }}>
                <iframe
                  src={
                    isDrive
                      ? item.videoUrl
                      : `${item.videoUrl}?autoplay=1&rel=0&showinfo=0`
                  }
                  title={item.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Desktop Info Panel */}
              <div className="p-6 md:p-8 bg-[#0f0f0f]" style={{ padding: "8px" }}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-3">
                      {item.category}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl text-white tracking-wide mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-row md:flex-col gap-4 md:gap-3 md:min-w-[160px]">
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <User size={14} className="text-orange-500/70" />
                      <span>{item.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <Calendar size={14} className="text-orange-500/70" />
                      <span>{item.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <Clock size={14} className="text-orange-500/70" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>

                {/* External link */}
                <a
                  href={
                    isDrive
                      ? driveUrl
                      : item.videoUrl.replace("/embed/", "/watch?v=")
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <ExternalLink size={14} />
                  {isDrive ? "Watch on Drive" : "Watch Video"}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
