"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "ACCESS TICKET",
    price: "₦2,000",
    color: "#F48636",
    tag: "For Students in Okofia & NAUTH",
    perks: [
      "Full day event access",
      "Access to all main stage sessions & panels",
      "Networking with peers, professionals & recruiters",
      "Light Refreshment",
      "Digital Certificate",
      "Eligibility for student scholarships & opportunities announced at event",
    ],
  },
  {
    name: "DEV TICKET",
    price: "₦5,000",
    color: "#2DD4BF",
    tag: "For Early-Career Professionals and Self-Taught Techies",
    perks: [
      "Full day event access",
      "Access to all main stage sessions & panels",
      "Access to hands-on workshops",
      "Light Refreshment",
      "Networking with speakers, recruiters & founders",
      "Digital Certificate of Attendance",
      "Eligibility for job & internship leads shared at the event",
    ],
  },
  {
    name: "ARCHITECT TICKET",
    price: "₦15,000",
    color: "#EAB308",
    tag: "For Tech Professionals & SME Owners",
    perks: [
      "Full day event access",
      "Priority seating",
      "Access to all workshops & breakout sessions",
      "Dedicated networking session with speakers & panelists",
      "Physical event programme booklet",
      "Refreshment",
      "Digital certificate of attendance",
      "Listed in event's community directory",
    ],
  },
  {
    name: "FOUNDER TICKET",
    price: "₦30,000",
    color: "#c8e63c",
    tag: "For Startup Founders & Ecosystem Leaders",
    perks: [
      "Full day event access",
      "WiFi Access",
      "VIP seating at the front",
      "Access to all sessions & workshops",
      "Refreshment",
      "Startup pitch session access & eligibility",
      "Official Download branded item",
      "Dedicated event programme booklet",
      "Digital + Physical certificate of participation",
    ],
  },
  {
    name: "UNICORN TICKET",
    price: "₦100,000",
    color: "#A855F7",
    tag: "For Investors, Executives & Institutional Partners",
    perks: [
      "Full day premium event access",
      "Reserved front-row VIP seating",
      "Refreshment",
      "Access to all sessions, workshops & exclusive rooms",
      "Private pre-event dinner/night out with the organising team & keynote speakers",
      "Dedicated one-on-one meeting slot with a speaker or founder of choice",
      "Logo/name recognition on backdrop in venue",
      "Premium branded merchandise package",
      "Complimentary ticket for a plus-one",
      "Post-event impact report delivered directly",
      "First-priority invite to the next edition & future Download Tech partnerships",
    ],
  },
];

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function TicketTiers() {
  return (
    <section className="bg-[#031632] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <motion.p
          className="text-center text-white/50 text-xs font-semibold uppercase tracking-widest"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        >
          Ticket Tiers
        </motion.p>

        {/* Top row — 3 tickets */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {tiers.slice(0, 3).map((tier) => (
            <motion.div key={tier.name} variants={cardVariant}>
              <TicketCard tier={tier} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row — 2 tickets centered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2xl md:mx-auto w-full"
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {tiers.slice(3).map((tier) => (
            <motion.div key={tier.name} variants={cardVariant}>
              <TicketCard tier={tier} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TicketCard({ tier }: { tier: (typeof tiers)[0] }) {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-5 h-full"
      style={{ backgroundColor: tier.color }}
    >
      {/* Header */}
      <div className="flex flex-col gap-1">
        <p className="text-[#031632] text-xs font-bold uppercase tracking-widest">
          {tier.name}
        </p>
        <p className="text-[#031632] text-4xl font-extrabold">{tier.price}</p>
        <p className="text-[#031632]/70 text-xs font-semibold uppercase tracking-wide">
          {tier.tag}
        </p>
      </div>

      {/* Perks */}
      <div className="flex flex-col gap-2">
        <p className="text-[#031632] text-xs font-bold uppercase tracking-widest">
          Perks
        </p>
        <ul className="flex flex-col gap-1.5">
          {tier.perks.map((perk) => (
            <li
              key={perk}
              className="flex items-start gap-2 text-[#031632] text-xs"
            >
              <span className="mt-0.5 shrink-0">✔</span>
              {perk}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-auto rounded-xl bg-[#031632]/15 p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between text-[#031632] text-sm">
          <span className="font-semibold">{tier.name}</span>
          <span className="font-bold">{tier.price}</span>
        </div>
        <hr className="border-[#031632]/20" />
        <a
          href="https://www.funzweb.com/events/download-tech-event-2026-409"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center bg-[#F48636] hover:opacity-90 transition-opacity text-white font-bold py-3 rounded-lg text-sm"
        >
          GET TICKETS
        </a>
      </div>
    </div>
  );
}
