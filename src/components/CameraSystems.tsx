import { motion } from "framer-motion";

interface CameraBrand {
  name: string;
  src: string;
  className?: string;
}

const camerasRow1: CameraBrand[] = [
  {
    name: "Sony Cinema",
    src: "/images/cameras/son.png",
    className: "brightness-200 scale-[1.45] md:scale-[1.7]",
  },
  {
    name: "RED Digital Cinema",
    src: "/images/cameras/red.png",
    className: "scale-[0.75] md:scale-[0.8]",
  },
  {
    name: "Blackmagic Design",
    src: "/images/cameras/Blackmagic_Design_logo.svg",
    className: "scale-[1.2] md:scale-[0.95]",
  },
  {
    name: "Canon Cinema EOS",
    src: "/images/cameras/canon.png",
    className: "brightness-200 scale-[1.3] md:scale-[1.5]",
  },
];


export default function CameraSystems() {
  return (
    <section
      id="cameras"
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ background: "#0d0d0d", padding: "1.5rem" }}
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 mb-10 text-center"
        style={{ marginTop: "calc(30px - 1vw)", marginBottom: "calc(30px - 1vw)" }}
      >
        <h3 className="text-white/40 text-sm font-medium tracking-[0.2em] uppercase">
          Camera Systems I've Worked With
        </h3>
      </div>

      {/* Row 1: Scrolls Left */}
      <div className="relative w-full flex overflow-hidden">
        {/* Fading edges seamlessly matching #0d0d0d background */}
        <div className="absolute top-0 left-0 bottom-0 w-20 sm:w-48 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-20 sm:w-48 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track 1 */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 28,
          }}
          className="flex items-center gap-20 md:gap-36 w-max px-8"
        >
          {[...camerasRow1, ...camerasRow1, ...camerasRow1, ...camerasRow1].map((camera, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-48 md:w-64 h-24 md:h-32 flex items-center justify-center opacity-85 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={camera.src}
                alt={camera.name}
                className={`max-w-full max-h-16 md:max-h-20 object-contain ${camera.className || ""} drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] md:drop-shadow-[0_0_6px_rgba(255,255,255,0.3)] md:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
