import { motion } from "framer-motion";
import { Scissors, Video, Palette, Image, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    id: "s1",
    icon: Scissors,
    title: "Basic Editing",
    features: [
      "Assembly cuts and clean timelines",
      "B-roll placement and stock footage sourcing",
      "Audio sync and dialogue cleanup",
      "Smooth pacing for short and long-form content",
      "Platform-ready exports",
    ],
  },
  {
    id: "s2",
    icon: Video,
    title: "Camera Handling",
    features: [
      "Camera operation for video shoots",
      "Shot planning for social and brand content",
      "Handling handheld and tripod setups",
      "Understanding of lighting for clean visuals",
    ],
  },
  {
    id: "s3",
    icon: Palette,
    title: "Color & VFX",
    features: [
      "Technical and creative color correction",
      "Color grading for normal and LOG footage",
      "Text animations and motion elements",
      "Basic compositing and visual enhancements",
    ],
  },
  {
    id: "s4",
    icon: Image,
    title: "Graphic Designing",
    features: [
      "Promotional Posters and digital creatives",
      "Festival & Occasion Creatives — Pongal, Onam, etc.,",
      "Brand Banners & Digital Ads",
      "Event / Corporate Communication Designs",
    ],
  },
];

export default function Services() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #080808 100%)", padding: '1.5rem' }}
    >
      {/* Background radial */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.04]"
        style={{ background: "radial-gradient(ellipse, #f97316 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ marginTop: '50px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-orange-500" />
            <span className="text-orange-400 text-xs font-medium tracking-[0.3em] uppercase">
              What I Offer
            </span>
            <div className="w-8 h-px bg-orange-500" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wide mb-5 items-center justify-center">
            SERVICES
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <p className="text-white/45 text-base text-center max-w-lg mx-auto leading-relaxed items-center justify-center">
              From raw footage to polished masterpiece — I offer end-to-end video production
              and editing services tailored to your vision.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginTop: '20px', marginBottom: '20px' }}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="service-card glass-card rounded-2xl p-6 border border-white/6 group"
                style={{ padding: '10px' }}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300">
                  <Icon size={22} className="text-orange-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-4" style={{ padding: '4px' }}>{service.title}</h3>
                <ul className="space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-white/40 text-sm" style={{ padding: '4px' }}>
                      <CheckCircle2 size={13} className="text-orange-500/70 flex-shrink-0 mt-2" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(245,158,11,0.06) 100%)",
            border: "1px solid rgba(249,115,22,0.2)",
          }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, #f97316 0px, #f97316 1px, transparent 1px, transparent 12px)",
            }}
          />
          <h3 className="font-display text-4xl md:text-5xl text-white tracking-wide mb-4 relative z-10" style={{ marginTop: '20px' }}>
            READY TO TELL YOUR STORY?
          </h3>
          <div className="text-center w-full flex justify-center" style={{ marginBottom: '20px' }}>

            <p className="text-white/50 text-base mb-8 relative z-10 max-w-md mx-auto">
              Let's collaborate and create something extraordinary together.
            </p>
          </div>
          <motion.button
            onClick={scrollToContact}
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{ padding: '8px', marginBottom: '20px' }}
          >
            Get In Touch
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section >
  );
}
