import { PageHero } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata = {
  title: "Book a Free Consultation",
  description: "Book a free 30-minute consultation with James Rizzo of Launch Educational Consulting.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <PageHero
        label="Book a consultation"
        title="Let's talk about what your student is building."
        lede="A free 30-minute video call with you and your student. You'll leave with at least one concrete next step, whether or not we work together."
      />
      <section className="section graph" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="booking">
            <iframe
              src={`${site.calendlyUrl}?hide_gdpr_banner=1&primary_color=b4521f`}
              title="Schedule a free consultation"
              loading="lazy"
            />
          </div>
          <p className="lede" style={{ marginTop: 24, fontSize: 16 }}>
            Prefer email? Write to <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
