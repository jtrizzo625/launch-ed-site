import { PageHero, CTA } from "@/components/Sections";

export const metadata = {
  title: "Resources",
  description: "Guides for families of students interested in engineering, design and entrepreneurship.",
  alternates: { canonical: "/resources" },
};

const docs = [
  ["DOC_01 · COLLEGE LISTS", "Direct admit vs. broad entry: how engineering programs really admit"],
  ["DOC_02 · PORTFOLIOS", "Should your student submit a Maker Portfolio?"],
  ["DOC_03 · ESSAYS", "How to write about a startup without sounding like a pitch deck"],
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Field notes for families of builders."
        lede="Practical guides on college lists, portfolios and essays for students who make things. New articles are on the way."
      />
      <section className="section graph">
        <div className="wrap grid-3">
          {docs.map(([tag, title]) => (
            <div key={tag} className="doc-card">
              <span className="tag">{tag}</span>
              <h3>{title}</h3>
              <span className="status">STATUS: coming soon</span>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
