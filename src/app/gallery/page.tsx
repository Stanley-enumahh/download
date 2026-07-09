import GalleryHero from "@/components/Gallery/GalleryHero";
import NewsLetter from "@/components/Sponsor/NewsLetter";

export default function Gallery() {
  return (
    <main style={{ background: "#031632", overflow: "hidden" }}>
      <GalleryHero />
      <NewsLetter />
    </main>
  );
}
