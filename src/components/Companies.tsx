import { motion } from "framer-motion";

const logos = [
  "/images/logos/patz/1c.png",
  "/images/logos/patz/2c.png",
  "/images/logos/patz/3c.png",
  "/images/logos/patz/4c.png",
  "/images/logos/patz/5c.png",
  "/images/logos/patz/6c.png"
];

const logos2 = [
  "/images/logos/patz/7c.png",
  "/images/logos/patz/8c.png",
  "/images/logos/patz/9c.png",
  "/images/logos/patz/10c.png",
  "/images/logos/patz/11c.png",
  "/images/logos/patz/12c.png"
]

export default function Companies() {
  return (
    <section className="py-20 bg-[#080808] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12 text-center" style={{ marginTop: 'calc(50px - 1vw)', marginBottom: 'calc(50px - 1vw)' }}>
        <h3 className="text-white/40 text-sm font-medium tracking-[0.2em] uppercase">
          Brands I've Worked With
        </h3>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Fading edges for infinite scroll effect */}
        <div className="absolute top-0 left-0 bottom-0 w-20 sm:w-48 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-20 sm:w-48 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
          className="flex items-center gap-20 md:gap-40 w-max px-8"
        >
          {/* Double the array for a seamless infinite scroll loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-48 md:w-64 h-32 md:h-40 flex items-center justify-center opacity-100 md:opacity-100 md:hover:opacity-100 grayscale-0 md:grayscale-[20%] md:hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Brand ${index}`}
                className="max-w-full max-h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] md:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] md:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300"
              />
            </div>
          ))}


        </motion.div>

      </div>
      <div className="relative w-full flex overflow-hidden">
        {/* Fading edges for infinite scroll effect */}
        <div className="absolute top-0 left-0 bottom-0 w-20 sm:w-48 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-20 sm:w-48 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
          className="flex items-center gap-20 md:gap-40 w-max px-8"
        >
          {/* Double the array for a seamless infinite scroll loop */}
          {[...logos2, ...logos2].map((logo, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-48 md:w-64 h-32 md:h-40 flex items-center justify-center opacity-100 md:opacity-100 md:hover:opacity-100 grayscale-0 md:grayscale-[20%] md:hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Brand ${index}`}
                className="max-w-full max-h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] md:drop-shadow-[0_0_5px_rgba(255,255,255,0.7)] md:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300"
              />
            </div>
          ))}


        </motion.div>

      </div>
    </section>
  );
}
