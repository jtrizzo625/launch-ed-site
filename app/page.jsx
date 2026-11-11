import Link from "next/link";
import Frame from "@/components/Frame";
import { WhoFor, AboutBlock, HowIHelp, Venture, Outcomes, Packages, FAQ, CTA } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <section className="hero blueprint">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="hero-tag">[ INDEPENDENT COLLEGE COUNSELING · GRADES 9–12 ]</span>
            <h1>College counseling for students who <em>build things.</em></h1>
            <div className="dim" aria-hidden="true">
              <span className="tick" /><span className="rule" /><span className="val">9–12</span><span className="rule" /><span className="tick" />
            </div>
            <p className="lede" style={{ maxWidth: 580 }}>
              I help high school students interested in engineering, product design and entrepreneurship choose their courses,
              develop their project ideas, build their college list, navigate financial aid, and write their application essays.
            </p>
            <div className="btn-row">
              <Link href="/book" className="btn btn-primary">Book a free consultation →</Link>
              <Link href="/services" className="btn btn-outline">Explore services</Link>
            </div>
          </div>
          <div className="hero-figure">
            <Frame caption={["FIG. 01", "PROTOTYPE ASSEMBLY · REV A"]}>
              <img
                src="/hero-drawing.svg"
                alt="Blueprint-style drawing of a robotic arm holding a gear, with a circuit board and a quadcopter drone"
              />
            </Frame>
          </div>
        </div>
      </section>
      <AboutBlock />
      <WhoFor />
      <HowIHelp />
      <Venture />
      <Outcomes />
      <Packages />
      <FAQ />
      <CTA />
    </>
  );
}
