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

export default function Home() {
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
