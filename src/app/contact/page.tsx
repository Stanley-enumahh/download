import ContactHero from "@/components/contact/contactHero";
import ContactForm from "@/components/contact/contactForm";
import NewsLetter from "@/components/Sponsor/NewsLetter";

export default function ContactUs() {
  return (
    <main style={{ background: "#031632", overflow: "hidden" }}>
      <ContactHero />
      <ContactForm />
      <NewsLetter />
    </main>
  );
}
