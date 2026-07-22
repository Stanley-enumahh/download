"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import visibilityImg from "@/images/visibilty.png";
import num1 from "@/images/num1.png";
import num2 from "@/images/num2.png";
import num3 from "@/images/num3.png";
import num4 from "@/images/num4.png";

const benefits = [
  {
    img: num1,
    title: "Digital Impact",
    description:
      "Showcase your brand where it matters most — across the right platforms, with the right audience, at the right time.",
  },
  {
    img: num2,
    title: "Exhibition Stand",
    description:
      "Have a decorated booth for your brand where activations can permanently happen. Also have access to a personalized picture backdrop for your brand.",
  },
  {
    img: num3,
    title: "Growth Toolkit",
    description:
      "Learn how to harness cutting-edge tech and digital trends to increase brand awareness and customer engagement.",
  },
  {
    img: num4,
    title: "Global Rise",
    description:
      "Discover how businesses like yours are scaling visibility and influence beyond borders through smart digital positioning.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const imgVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Visibility() {
  return (
    <section className="bg-[#031632] min-h-[115vh] flex items-center py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12">
        {/* Header row */}
        <motion.div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="flex flex-col gap-3">
            <p className="text-[#F48636] font-semibold text-sm">
              Be at Download
            </p>
            <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight max-w-lg">
              The Best Visibility for every Business
            </h2>
          </div>

          <Link
            href="/sponsor"
            className="self-start md:self-center bg-[#c8e63c] hover:opacity-90 transition-opacity text-[#031632] font-bold px-8 py-3 rounded-xl text-sm md:text-base"
          >
            Sponsor
          </Link>
        </motion.div>

        {/* Content row */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left: benefits list — staggered */}
          {/* Left: benefits list — staggered */}
          <motion.div
            className="flex-1 flex flex-col divide-y divide-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefits.map((item) => (
              <motion.div
                key={item.title}
                className="flex flex-col gap-3 py-7 first:pt-0"
                variants={itemVariants}
                // NO initial or whileInView here — parent controls it
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-10 h-10 object-contain shrink-0"
                  />
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: image — slides in from right */}
          <motion.div
            className="w-full md:w-[45%] shrink-0"
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-[3px_6px_0_rgba(200,230,60,1)]">
              <Image
                src={visibilityImg}
                alt="Download Tech event"
                className="w-full max-h-145 object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#031632]/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                <span className="text-white text-xs font-semibold">
                  Nnewi 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
