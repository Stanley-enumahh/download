"use client";

import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import { motion } from "framer-motion";
import kehinde from "@/images/speakers/Dr_Kehinde.webp";
import chibueze from "@/images/speakers/Dr_Chibueze_Ofobuike.webp";
import cynthia from "@/images/speakers/Cynthia_Orife.webp";
import ndubisi from "@/images/speakers/Engr_Ndubisi_Okoli.webp";
import fayo from "@/images/speakers/Fayo_Williams.webp";
import ifedy from "@/images/speakers/Ifedy_Ralph_Eze.webp";
import martha from "@/images/speakers/Martha_Chidimma_Egenti.webp";

const keynotes = [
  {
    img: ifedy,
    tag: "OPENING KEYNOTE",
    name: "Ifedy Ralph Eze",
    role: "CEO/MD, Founder Institute",
    company: "Co-Founder, IDEA Africa",
  },
  {
    img: fayo,
    tag: "CLOSING KEYNOTE",
    name: "Fayo Williams",
    role: "Founder & Managing Consultant",
    company: "Simply Exponential Consult Ltd.",
  },
];

const otherSpeakers = [
  {
    img: kehinde,
    topic: "ICT & Infrastructure",
    name: "Dr. (Mrs.) Kehinde Samuel-Ajakaiye",
    role: "Programme Analyst, Head of ICT",
    company: "NASENI",
  },
  {
    img: chibueze,
    topic: "Governance & Tech",
    name: "Dr. Chibueze Ofobuike",
    role: "Mayor, Aguata L.G.A.",
    company: "APGA Candidate, House of Representatives",
  },
  {
    img: cynthia,
    topic: "Cybersecurity",
    name: "Cynthia Orife",
    role: "Data/Cybersecurity Analyst",
    company: "",
  },
  {
    img: ndubisi,
    topic: "Engineering",
    name: "Engr. Dr. Ndubisi Okoli",
    role: "Speaker",
    company: "",
  },
  {
    img: martha,
    topic: "Education & Tech",
    name: "Prof. Martha C. Egenti",
    role: "Director, Awka Window on America",
    company: "Nnamdi Azikiwe University",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function PreviousSpeakers() {
  return (
    <section className="bg-[#031632] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="bg-[#83CFFF1A] text-[#83CFFF] text-xs font-semibold uppercase tracking-widest px-3 py-2 rounded-md">
            See Our Amazing Speakers
          </span>
          <p className="text-white/50 text-base max-w-3xl leading-relaxed">
            Discover the visionaries, engineers, and creatives defining the era
            of enterprise technology. Download Tech 2026 brings together the
            brightest minds shaping our digital future.
          </p>
        </motion.div>

        {/* Keynote visionaries */}
        <div className="flex flex-col gap-8">
          <motion.span
            className="flex items-center w-full gap-5 justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <hr className="w-[40%] border-white/10" />
            <p className="text-center text-[#83CFFF] text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
              Keynote Visionaries
            </p>
            <hr className="w-[40%] border-white/10" />
          </motion.span>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {keynotes.map((speaker) => (
              <motion.div
                key={speaker.tag}
                className="relative rounded-lg border border-white/3 overflow-hidden h-80 md:h-115 bg-[#0d2140]"
                variants={cardFade}
              >
                <Image
                  src={speaker.img}
                  alt={speaker.tag}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#031632]/60 via-[#031632]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 md:p-6 flex flex-col gap-2">
                  <span className="border border-[#83CFFF4D] flex items-center gap-2 bg-[#0d2140]/80 backdrop-blur-sm text-[#83CFFF] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#83CFFF]" />
                    {speaker.tag}
                  </span>
                  <h3 className="text-white text-2xl md:text-4xl font-bold leading-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-[#B6C7EB] text-sm">{speaker.role}</p>
                  <p className="flex items-center gap-2 text-[#C5C6CE] text-sm">
                    <BsBuilding size={13} />
                    {speaker.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Other Speakers */}
        <div className="flex flex-col gap-8">
          <motion.span
            className="flex items-center w-full gap-5 justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <hr className="w-[40%] border-white/10" />
            <p className="text-center text-[#83CFFF] text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
              Other Speakers
            </p>
            <hr className="w-[40%] border-white/10" />
          </motion.span>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {otherSpeakers.map((speaker) => (
              <motion.div
                key={speaker.name}
                className="bg-[#0a1e35] rounded-xl p-3 md:p-7 border border-white/10 backdrop-blur-md flex flex-col gap-4"
                variants={cardFade}
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#1a3a5c] shrink-0">
                  <Image
                    src={speaker.img}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top"
                    sizes="56px"
                  />
                </div>
                <span className="bg-[#020F22] text-white/60 text-xs px-3 py-1 rounded-sm w-fit">
                  {speaker.topic}
                </span>
                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-semibold text-base">
                    {speaker.name}
                  </h4>
                  <p className="text-white/50 text-xs">{speaker.role}</p>
                  <p className="text-white/70 text-xs">{speaker.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
