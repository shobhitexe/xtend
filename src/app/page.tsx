import {
  Services,
  Hero,
  HomeSlider,
  Process,
  Growth,
  WebTechnologies,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeSlider />
      <Services />
      <Process />
      <Growth />
      <WebTechnologies />
    </main>
  );
}
