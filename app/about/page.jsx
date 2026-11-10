import { PageHero, AboutBlock, CTA } from "@/components/Sections";

export const metadata = {
  title: "About James Rizzo",
  description:
    "James Rizzo is a former product leader at Lyft and Intuit, a Schwarzman Scholar, and a college counselor helping students who build things get into engineering, design and business programs.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="I spent nine years launching products. Now I help students launch themselves."
      />
      <AboutBlock label="§01 — Background" />
      <CTA />
    </>
  );
}
