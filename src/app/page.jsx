import Bio from "@/components/Bio";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <section className="mx-[90px] my-[30px]">
      <Navbar></Navbar>
      <Hero></Hero>
      <Bio></Bio>
      <Services />
    </section>
  );
}
