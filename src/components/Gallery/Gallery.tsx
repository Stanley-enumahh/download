"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import g1 from "@/images/gallery/g1.webp";
import g2 from "@/images/gallery/g2.webp";
import g3 from "@/images/gallery/g3.webp";
import g4 from "@/images/gallery/g4.webp";
import g5 from "@/images/gallery/g5.webp";
import g6 from "@/images/gallery/g6.webp";
import g7 from "@/images/gallery/g7.webp";
import g8 from "@/images/gallery/g8.webp";
import g9 from "@/images/gallery/g9.webp";
import g10 from "@/images/gallery/g10.webp";
import g11 from "@/images/gallery/g11.webp";
import g12 from "@/images/gallery/g12.webp";

type GalleryImage = {
  src: StaticImageData;
  alt: string;
  span: "normal" | "wide" | "tall";
};

// span controls the size — wide = 2 cols, tall = 2 rows, normal = 1x1
const images: GalleryImage[] = [
  { src: g1, alt: "Download Tech team photo", span: "wide" },
  { src: g2, alt: "Main stage presentation", span: "normal" },
  { src: g3, alt: "Dream Develop screen", span: "normal" },
  { src: g4, alt: "Startup pitch session", span: "normal" },
  { src: g5, alt: "Networking session", span: "normal" },
  { src: g6, alt: "Winner announcement", span: "wide" },
  { src: g7, alt: "Group photo with attendees", span: "tall" },
  { src: g8, alt: "Panel discussion", span: "normal" },
  { src: g9, alt: "Workshop session", span: "normal" },
  { src: g10, alt: "Award ceremony", span: "wide" },
  { src: g11, alt: "Speakers on stage", span: "normal" },
  { src: g12, alt: "Volunteers group photo", span: "wide" },
];

const INITIAL_COUNT = 7;

export default function GalleryBody() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? images : images.slice(0, INITIAL_COUNT);

  return (
    <section className="bg-[#031632] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <p className="text-center text-[#4a90d9] text-xs font-semibold uppercase tracking-widest">
          Relive the Download Moments
        </p>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[320px] gap-3 md:gap-6">
          {visible.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg
                ${img.span === "wide" ? "col-span-2" : ""}
                ${img.span === "tall" ? "row-span-2" : ""}
              `}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Load more */}
        {!showAll && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="shadow-[0_0_20px_rgba(200,230,60,0.35)] text-[#c8e63c] duration-200 hover:bg-[#c8e63c] hover:text-[#031632] cursor-pointer transition-colors font-semibold px-10 py-3 rounded-full text-sm"
            >
              LOAD MORE MOMENTS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
