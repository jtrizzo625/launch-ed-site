import { PageHero, HowIHelp, Venture, HowItWorks, CTA } from "@/components/Sections";

export const metadata = {
  title: "Services",
  description:
    "College counseling by grade: course and project planning in grades 9–10, college list, financial aid and testing strategy in grade 11, and essays and applications in grade 12. Plus hourly venture and project coaching.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="One counselor for the plan, the project and the application."
        lede="Support that follows your student from the first course choices in 9th grade through submitted applications and financial aid offers in 12th grade, with hands-on coaching for the things they build along the way."
      />
      <HowIHelp heading="Support by grade" label="§01 — College counseling" />
      <Venture label="§02 — Venture & project coaching" />
      <HowItWorks />
      <CTA />
    </>
  );
}
