import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Play, Clock, Image as ImageIcon, X, ExternalLink } from "lucide-react";
import { portfolioItems } from "../data/portfolioData";
import type { PortfolioItem } from "../data/portfolioData";
import VideoModal from "./VideoModal";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const GridSection = ({
  title,
  items,
  aspectRatio,
  setSelectedItem,
  onPhotoClick,
  driveLink,
}: {
  title: string,
  items: PortfolioItem[],
  aspectRatio: string,
  setSelectedItem?: (item: PortfolioItem) => void,
  onPhotoClick?: (src: string) => void,
  driveLink: string,
}) => {
  return (
    <div className="mb-24">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-6"
        style={{ marginBottom: '1rem' }}
      >
        <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide">
          {title}
        </h3>
        <div className="flex-1 h-px bg-white/10 mt-2" />
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {items.map((item) => {
          const isVideo = !!item.videoUrl;
          const isInstagram = item.videoUrl.includes("instagram.com");
          // Convert embed URL → public reel URL for new-tab open
          const instagramHref = item.videoUrl.replace("/embed", "");

          const handleClick = () => {
            if (isInstagram) {
              window.open(instagramHref, "_blank", "noopener,noreferrer");
            } else if (isVideo) {
              setSelectedItem?.(item);
            } else {
              onPhotoClick?.(item.thumbnail);
            }
          };

          return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="video-card rounded-xl overflow-hidden cursor-pointer group"
              onClick={handleClick}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => { if (e.key === "Enter") handleClick(); }}
            >
              {/* Thumbnail */}
              <div className="relative w-full" style={{ aspectRatio }}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />

                {/* Center Icon */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500/20">
                    {isInstagram ? (
                      <ExternalLink size={20} className="text-white" />
                    ) : isVideo ? (
                      <Play size={20} fill="white" className="ml-0.5 text-white" />
                    ) : (
                      <ImageIcon size={20} className="text-white" />
                    )}
                  </div>
                </div>

                {/* Duration badge */}
                {item.duration && (
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded px-2 py-1" style={{ padding: '3px' }}>
                    <Clock size={10} className="text-orange-400" />
                    <span className="text-white text-xs font-medium">{item.duration}</span>
                  </div>
                )}

                {/* Bottom info (shown on hover) */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-base leading-tight">{item.title}</p>
                  <p className="text-white/60 text-xs mt-1.5">{item.client} · {item.year}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Drive Link Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 flex justify-center"
      >
        <a
          href={driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/10 text-white/70 bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide uppercase"
          style={{ padding: '8px', marginTop: '1rem' }}
        >
          See more in Drive
        </a>
      </motion.div>
    </div>
  );
};

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const brandFilms = portfolioItems.filter(p => p.category === "Brand Film");
  const motionGraphics = portfolioItems.filter(p => p.category === "Motion Graphics");
  const liveEvents = portfolioItems.filter(p => p.category === "Live Events");
  const shortFormContent = portfolioItems.filter(p => p.category === "Short-form Content");
  const nightlifeParty = portfolioItems.filter(p => p.category === "Nightlife & Party");
  const transformationPortraits = portfolioItems.filter(p => p.category === "Transformation Portraits");
  const testimonialWorks = portfolioItems.filter(p => p.category === "Testimonial Works");
  const informativeFastCuts = portfolioItems.filter(p => p.category === "Informative & Fast cuts");
  const constructionBrandContent = portfolioItems.filter(p => p.category === "Construction Brand Content");

  return (
    <>
      <section id="portfolio" className="py-28 bg-[#080808]" style={{ padding: '1.5rem' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ textAlign: 'center' }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-orange-500" />
              <span className="text-orange-400 text-xs font-medium tracking-[0.3em] uppercase">
                Selected Work
              </span>
              <div className="w-8 h-px bg-orange-500" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-wide">
              PORTFOLIO
            </h2>
          </motion.div>

          <GridSection
            title="Brand Films"
            items={brandFilms}
            aspectRatio="16/9"
            setSelectedItem={setSelectedItem}
            driveLink="https://drive.google.com/drive/folders/1IGizU_BfcGJDoKwoOiVwz1AstojfgteK"
          />

          <GridSection
            title="Motion Graphics"
            items={motionGraphics}
            aspectRatio="16/9"
            setSelectedItem={setSelectedItem}
            driveLink="https://drive.google.com/drive/folders/1IGizU_BfcGJDoKwoOiVwz1AstojfgteK"
          />

          <GridSection
            title="Live Event Videography & Editing"
            items={liveEvents}
            aspectRatio="16/9"
            setSelectedItem={setSelectedItem}
            driveLink="https://drive.google.com/drive/folders/1IGizU_BfcGJDoKwoOiVwz1AstojfgteK"
          />

          <GridSection
            title="Short-form Brand Content"
            items={shortFormContent}
            aspectRatio="16/9"
            setSelectedItem={setSelectedItem}
            driveLink="https://drive.google.com/drive/folders/1IGizU_BfcGJDoKwoOiVwz1AstojfgteK"
          />

          <GridSection
            title="Nightlife & Party Films"
            items={nightlifeParty}
            aspectRatio="16/9"
            setSelectedItem={setSelectedItem}
            driveLink="https://drive.google.com/drive/folders/1IGizU_BfcGJDoKwoOiVwz1AstojfgteK"
          />

          <GridSection
            title="Transformation Portraits"
            items={transformationPortraits}
            aspectRatio="16/9"
            setSelectedItem={setSelectedItem}
            driveLink="https://drive.google.com/drive/folders/1IGizU_BfcGJDoKwoOiVwz1AstojfgteK"
          />

          <GridSection
            title="Testimonial Works"
            items={testimonialWorks}
            aspectRatio="9/16"
            setSelectedItem={setSelectedItem}
            driveLink="https://drive.google.com/drive/folders/1IGizU_BfcGJDoKwoOiVwz1AstojfgteK"
          />

          <GridSection
            title="Informative & Fast cuts"
            items={informativeFastCuts}
            aspectRatio="16/9"
            setSelectedItem={setSelectedItem}
            driveLink="https://drive.google.com/drive/folders/1IGizU_BfcGJDoKwoOiVwz1AstojfgteK"
          />

          <GridSection
            title="Construction Brand Content"
            items={constructionBrandContent}
            aspectRatio="9/16"
            setSelectedItem={setSelectedItem}
            driveLink="https://drive.google.com/drive/folders/1IGizU_BfcGJDoKwoOiVwz1AstojfgteK"
          />

          {/* <GridSection
            title="My Essential Works"
            items={essentialWorks}
            aspectRatio="16/9"
            setSelectedItem={setSelectedItem}
            driveLink="https://drive.google.com"
          />

          <GridSection
            title="Social Media Contents"
            items={socialMedia}
            aspectRatio="9/16"
            setSelectedItem={setSelectedItem}
            driveLink="https://drive.google.com"
          />

          <GridSection
            title="Photoshoots"
            items={photoshoots}
            aspectRatio="4/3"
            setSelectedItem={setSelectedItem}
            onPhotoClick={setLightboxSrc}
            driveLink="https://drive.google.com"
          /> */}
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/* Photo Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxSrc(null)}
          >
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={lightboxSrc}
              alt="Fullscreen view"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
