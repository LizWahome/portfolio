import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PositioningStatement } from "@/components/PositioningStatement";
import { WhatIDo } from "@/components/WhatIDo";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { AnalyticalApproach } from "@/components/AnalyticalApproach";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PositioningStatement />
        <WhatIDo />
        <FeaturedProjects />
        <AnalyticalApproach />
        <Experience />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
