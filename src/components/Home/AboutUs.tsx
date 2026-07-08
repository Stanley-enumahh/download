import Image from "next/image";
import aboutImg from "@/images/about.png";

export default function AboutUs() {
  return (
    <section className="bg-[#031632] py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shrink-0">
          <Image
            src={aboutImg}
            alt="Download Tech 2025 event"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <p className="text-(--orange) font-semibold text-sm uppercase tracking-wide">
            About Us
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Dream, Develop, Dominate.
          </h2>

          <div className="flex flex-col gap-4 text-white/80 text-base leading-relaxed">
            <p>
              Download is more than a tech event — it's where ambition meets
              innovation. We equip creators, entrepreneurs, and forward-thinkers
              with the tools, insights, and digital intelligence needed to
              thrive in today's connected world.
            </p>
            <p>
              This year's edition focuses on unlocking the next wave of digital
              potential. From social strategy to emerging tech, participants
              will discover how to turn ideas into scalable movements, drive
              brand impact, and build future-ready businesses.
            </p>
            <p>
              Whether you're growing a brand, shaping a cause, or launching the
              next big idea — Download 2026 is your blueprint for navigating and
              dominating the digital frontier.
            </p>
          </div>
        </div>
      </div>

      {/* intentions */}

      <div className="mt-8 w-full flex flex-col items-center p-4 md:p-7 gap-8">
        <p className="text-(--orange) font-semibold">Know our Intention</p>

        <div className="rounded-xl p-6 md:p-10 text-center max-w-4xl bg-[#FFFFFF]/10 flex flex-col gap-8">
          <h3 className="text-lg md:text-3xl text-(--orange) font-semibold">
            Our Vision
          </h3>
          <p className="leading-7.5 text-white/80 md:text-base text-sm">
            To become Africa’s leading grassroots-driven technology and
            innovation summit—bridging the gap between emerging talents and
            global opportunities by empowering individuals and communities
            through tech, entrepreneurship, and collaboration.
          </p>
        </div>

        <div className="rounded-xl p-6 md:p-10 text-center max-w-4xl bg-[#FFFFFF]/10 flex flex-col gap-8">
          <h3 className="text-lg md:text-3xl text-(--orange) font-semibold">
            Our Mission
          </h3>
          <p className="leading-7.5 md:text-base text-sm text-white/80">
            Foster innovation, creativity, and entrepreneurship by showcasing
            emerging technologies and ideas Connect startups, tech enthusiasts,
            ecosystem builders, and industry leaders for knowledge exchange and
            networking. Equip young people with the tools, mentorship, and
            visibility needed to solve real-world problems through technology
            Drive inclusive digital transformation that elevates the
            socioeconomic potential of underserved regions, starting with Nnewi
            and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
