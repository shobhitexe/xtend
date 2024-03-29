"use client";

import {
  Services,
  Hero,
  HomeSlider,
  Process,
  Growth,
  WebTechnologies,
  WhoIsThisFor,
  TeamBehind,
  RunningTheShow,
  Contact,
  Footer,
} from "@/components";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 5 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="font-instrumentSans">
      <Hero />
      <HomeSlider />
      <Services />
      <Process />
      <Growth />
      <WebTechnologies />
      <WhoIsThisFor />
      <TeamBehind />
      <RunningTheShow />
      <Contact />
      <Footer />
    </main>
  );
}
