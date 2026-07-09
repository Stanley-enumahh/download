"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import convener1 from "@/images/convener1.png";
import convener2 from "@/images/convener2.png";
import productManager1 from "@/images/productManager1.png";
import productManager2 from "@/images/productManager2.png";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const team = [
  { img: convener1, alt: "Convener" },
  { img: convener2, alt: "Co-Convener" },
  { img: productManager1, alt: "Project Manager" },
  { img: productManager2, alt: "Assistant Project Manager" },
];

export default function Team() {
  return (
    <section className="bg-[#031632] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center gap-2 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-(--orange) font-semibold text-sm">Meet the Team</p>

          <h2 className="max-w-3xl font-jakarta text-xl font-bold leading-tight text-white md:text-5xl">
            Get to know the brilliant minds driving our Vision forward.
          </h2>
        </motion.div>

        {/* Team grid */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
          {team.map((member) => (
            <div
              key={member.alt}
              className="w-[280px] h-[420px] md:w-[300px] md:h-[420px]"
            >
              <Image
                src={member.img}
                alt={member.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
