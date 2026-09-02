"use client";

import { IoRocketOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const YOUTUBE_VIDEO_ID = "eWJpdT7mbAY";

export default function GalleryHero() {
  return (
    <section className="pt-36 pb-24 px-6 md:px-16 relative bg-(--navy) overflow-hidden">
      {/* glow */}
      <div className="absolute bg-radial from-[#83CFFF]/15 blur-xl -top-40 left-75  to-transparent h-107.5 w-107.5"></div>
      <div className="max-w-7xl gap-6 md:justify-between mx-auto flex flex-col md:flex-row items-center z-10">
        {/* Left: text */}
        <div className="md:w-2/5 flex flex-col gap-4">
          <span className="flex items-center text-[#83CFFF] gap-2 bg-[#83CFFF]/20 border-[#83CFFF33]/80 text-sm font-medium px-4 py-2 rounded-full w-fit">
            <IoRocketOutline size={16} />
            Gallery
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#D3E4FE] leading-tight">
            Relive the <br /> Moments That Shaped Innovation
          </h1>

          <p className="text-[#C5C6CE] text-base leading-relaxed max-w-sm">
            Relive the energy, connections, and breakthrough moments that
            defined the Download Tech Event experience.
          </p>
        </div>

        {/* Right: video */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="aspect-video w-full flex-1 overflow-hidden rounded-lg"
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&modestbranding=1&rel=0&playsinline=1`}
            title="Gallery hero video"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
