import Image from "next/image";
import convener1 from "@/images/convener1.png";
import convener2 from "@/images/convener2.png";
import productManager1 from "@/images/productManager1.png";
import productManager2 from "@/images/productManager2.png";

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
        <div className="flex flex-col items-center text-center gap-4">
          <p className="text-[#F48636] font-semibold text-sm">Meet the Team</p>
          <h2 className="text-white text-xl md:text-5xl font-bold leading-tight max-w-3xl">
            Get to know the brilliant minds driving our Vision forward.
          </h2>
        </div>

        {/* Team grid */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-between gap-4 md:gap-8">
          {team.map((member) => (
            <div
              key={member.alt}
              className="w-[280px] md:w-[300px] h-[420px] md:h-[420px]"
            >
              <Image
                src={member.img}
                alt={member.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
