"use client";

import { motion } from "framer-motion";
import { LuHandHelping } from "react-icons/lu";
import Image from "next/image";
import contact from "@/images/contact.png";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-24 md:px-16">
      {/* Animated glow */}
      <div className="absolute left-75 -top-40 h-[430px] w-[430px] rounded-full bg-radial from-[#83CFFF]/15 to-transparent blur-xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Left */}
        <div className="flex flex-col gap-4 md:w-2/5">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="flex w-fit items-center gap-2 rounded-full border border-[#83CFFF33]/80 bg-[#83CFFF]/20 px-4 py-2 text-sm font-medium text-[#83CFFF]"
          >
            <LuHandHelping size={16} />
            Get in Touch with us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="text-4xl font-bold leading-tight text-[#D3E4FE] md:text-5xl"
          >
            Contact the
            <br />
            Download Tech
            <br />
            Event Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="max-w-sm text-base leading-relaxed text-[#C5C6CE]"
          >
            Connect with the Download Tech Event team and get the information,
            support, or partnership opportunities you need.
          </motion.p>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="w-full flex-1"
        >
          <Image
            src={contact}
            alt="Contact hero image"
            priority
            className="aspect-video w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
