import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import LogosBar from "@/components/LogosBar";
import Capabilities from "@/components/Capabilities";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Deliverables from "@/components/Deliverables";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <LogosBar />
      <Capabilities />
      <Approach />
      <Services />
      <Industries />
      <Deliverables />
      <CTA />
    </>
  );
}
