import GalleryHero from "@/components/Gallery/GalleryHero";
import Gallery from "@/components/Gallery/Gallery";
import NewsLetter from "@/components/Sponsor/NewsLetter";

export default function GalleryBody() {
  return (
    <main style={{ background: "#031632", overflow: "hidden" }}>
      <GalleryHero />
      <Gallery />
      <NewsLetter />
    </main>
  );
}
