import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import CortexioShowcase from "@/components/CortexioShowcase";
import { Ventures } from "@/components/Ventures";

export default function Home() {
  return (
    <>
      <Navbar homeOnly />
      <main className="overflow-x-clip bg-luxury-black">
        <Hero />
        <Ventures />
        <CortexioShowcase />
        <Contact />
      </main>
      <Footer homeOnly />
    </>
  );
}