import Link from "next/link";
import Frame from "@/components/Frame";
import { site } from "@/lib/site";

const iconProps = {
  className: "icon", viewBox: "0 0 24 24", fill: "none", stroke: "#0f2440",
  strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true,
};

export const paths = [
  {
    title: "Mechanical or aerospace engineers",
    text: "You're interested in robotics, drones, vehicles, aircraft and other engineering challenges in the physical realm.",
    icon: <svg {...iconProps}><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" /></svg>,
  },
  {
    title: "Coders",
    text: "You love to ship games or apps, contribute to open-source projects, and keep tabs on digital startups.",
    icon: <svg {...iconProps}><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></svg>,
  },
  {
    title: "Founders",
    text: "You want to start a small business or venture, which means tackling everything from pricing to branding to operations.",
    icon: <svg {...iconProps}><path d="M4 20h16M6 16l4-5 3 3 5-7M15 7h3v3" /></svg>,
  },
  {
    title: "Designers",
    text: "You see problems in the world and dream about designing elegant, creative, human-centered solutions to them.",
    icon: <svg {...iconProps}><path d="M3 21l3-1 12-12-2-2L4 18l-1 3zM14 6l2 2M17 3l4 4" /></svg>,
  },
];

export function WhoFor() {
  return (
    <section id="for" className="section white">
      <div className="wrap">
        <div className="section-head">
          <span className="label">§02 — Who this is for</span>
          <h2>Does this sound like your student?</h2>
        </div>
        <div className="grid-4">
          {paths.map((p) => (
            <div key={p.title} className="path">
              {p.icon}
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const stages = [
  {
    bar: ["GRADES 9–10", "EXPLORE"],
    title: "Grades 9–10: Explore & Build",
    items: [
      "Course planning for engineering, design or business major readiness",
      "Project portfolio development coaching (products, businesses, apps, devices and more)",
      "Extracurricular activities planning and prioritization",
      "Career and interest exploration coaching",
    ],
  },
  {
    bar: ["GRADE 11", "PLAN"],
    title: "Grade 11: Plan & Position",
    items: [
      "Building a balanced college list",
      "Financial aid strategy for both merit and need-based aid",
      "Early decision / early action strategy",
      "Testing strategy (SAT/ACT)",
    ],
  },
  {
    bar: ["GRADE 12", "APPLY"],
    title: "Grade 12: Apply",
    items: [
      "Application essays: personal statement, supplemental essays, UC PIQs and more",
      "Activities list and project write-ups",
      "Application timeline and submission",
      "Comparing financial aid offers",
    ],
  },
];

export function HowIHelp({ heading = "How I help", label = "§03 — How I help" }) {
  return (
    <section id="services" className="section graph">
      <div className="wrap">
        <div className="section-head">
          <span className="label">{label}</span>
          <h2>{heading}</h2>
        </div>
        <div className="grid-3">
          {stages.map((s) => (
            <div key={s.title} className="module">
              <div className="module-bar"><span>{s.bar[0]}</span><span>{s.bar[1]}</span></div>
              <div className="module-body">
                <h3>{s.title}</h3>
                <ul className="spec">
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Headshot() {
  return (
    <Frame caption={["FIG. 02", "J. RIZZO"]} light>
      {site.headshot ? (
        <img src={site.headshot} alt="James Rizzo, founder of Launch Educational Consulting" />
      ) : (
        <div className="placeholder">[Headshot]</div>
      )}
    </Frame>
  );
}

export const aboutParagraphs = [
  <>I spent nine years as a product management leader, leading teams of engineers and designers to launch and commercialize new products at companies like Lyft, Intuit and Headway (work featured in <a href={site.forbesUrl}>Forbes</a>).</>,
  <>Along the way, I sat on hiring committees and read hundreds of résumés from college students and recent grads who majored in disciplines like engineering, business, and design.</>,
  <>Now I help high school builders who are just starting their journey navigate the unique challenges that come with being admitted to a STEM major and landing in a STEM career: building things that matter to them, choosing colleges and programs that suit them, and helping them to tell their story on their application.</>,
  <>My work on college essay writing has been published in the <a href={site.chronicleUrl}>San Francisco Chronicle</a>. I&apos;m also a College Counselor for ScholarMatch, hold a certificate in college counseling from NACAC (Core Concepts for IECs), am a career counselor for TheJobForum, and previously sat on the advisory board of Junior Achievement Northern California.</>,
  <>Prior to that, I was part of the inaugural class of Schwarzman Scholars, a highly selective graduate fellowship, where I earned a Master&apos;s in Global Affairs from Tsinghua University in Beijing, China.</>,
];

export function AboutBlock({ label = "§01 — About James Rizzo" }) {
  return (
    <section id="about" className="section graph">
      <div className="wrap about-grid">
        <Headshot />
        <div className="about-copy">
          <span className="label">{label}</span>
          <h2>A product leader turned college counselor.</h2>
          <div className="about-text">
            {aboutParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export const ventureSteps = [
  ["Find a real problem", "Talk to the people who have it before building anything."],
  ["Set the strategy", "Who it's for, what success looks like, what to skip."],
  ["Build the roadmap", "Milestones that fit around school, sports, and healthy rest."],
  ["Ship it", "Launch a first version, get real users, learn from them."],
  ["Tell the story", "Turn the build log into essays, activities and portfolios."],
];

export function Venture({ label = "§04 — Venture coaching" }) {
  return (
    <section id="venture" className="section blueprint">
      <div className="wrap">
        <div className="section-head">
          <span className="label">{label}</span>
          <h2>Your student has ideas. I coach them on how to bring them to life.</h2>
          <p className="lede">Students get the same playbook I used to launch products at Lyft and Intuit, scaled to a teenager&apos;s time and budget.</p>
        </div>
        <div className="grid-5">
          {ventureSteps.map(([t, d], i) => (
            <div key={t} className="vstep">
              <span className="num">STEP_0{i + 1} {i === 4 ? "✓" : "→"}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    ["Free consultation", "30 minutes with you and your student to understand goals and timing."],
    ["A written plan", "A roadmap of courses, projects, deadlines and essays, built around your student."],
    ["Regular coaching", "Live sessions over video, with feedback between meetings."],
    ["Apply with confidence", "Applications that show who your student is and what they've built."],
  ];
  return (
    <section className="section graph">
      <div className="wrap">
        <div className="section-head">
          <span className="label">How it works</span>
          <h2>From first conversation to submitted application.</h2>
        </div>
        <div className="grid-4">
          {steps.map(([t, d], i) => (
            <div key={t} className="step">
              <span className="num">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials. Add a quote by filling in `quote`; entries with quote: null are hidden.
// Only publish quotes you have written permission to use.
export const featuredTestimonial = {
  quote:
    "Working with James was an incredible experience! He helped me take my essay to the next level with thoughtful, detailed feedback and expert advice. Thanks to his guidance, my essay became so much stronger and more effective.",
  name: "Ethan C.",
  detail: "Admitted to Stanford University, School of Engineering (Mech. E)",
};

export const testimonials = [
  {
    tag: "LOG_01 · STUDENT",
    quote:
      "My favorite part of working with James was how open he was. Working with him was a dialogue, he wasn’t doing it for me or telling me what to do, he was guiding me to discover more about myself and express it. Also, James helped me talk about a technical design project I worked on in a way that was specific, understandable for a non technical audience, and made my impact clear. As a result of James’s help, I looked at my application and felt like I was a standout candidate.",
    by: "Andrew W. · 2026 application pending",
  },
  {
    tag: "LOG_02 · STUDENT",
    quote:
      "Working with James was extremely helpful. He gave clear, thoughtful feedback. His comments were always detailed, honest and easy to apply, and I could tell he genuinely cared about helping me improve my writing. Thanks to his guidance, my essays became more focused, personal, and effective. I would highly recommend him to any student looking for college application guidance.",
    by: "Aaron S. · Admitted to UC Davis, Managerial Economics",
  },
  // Parent testimonial: replace null with the quote and fill in `by`.
  { tag: "LOG_03 · PARENT", quote: null, by: "" },
];

export function FeaturedQuote() {
  const t = featuredTestimonial;
  if (!t || !t.quote) return null;
  return (
    <section className="featured-quote">
      <div className="wrap">
        <figure>
          <blockquote>“{t.quote}”</blockquote>
          <figcaption>
            <strong>{t.name}</strong>
            <span>{t.detail}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function Outcomes() {
  if (!site.showOutcomes) return null;
  const shown = testimonials.filter((t) => t.quote);
  if (shown.length === 0) return null;
  return (
    <section id="testimonials" className="section graph">
      <div className="wrap">
        <div className="section-head">
          <span className="label">§05 — Testimonials</span>
          <h2>What students say.</h2>
        </div>
        <div className={shown.length === 2 ? "grid-2" : "grid-3"}>
          {shown.map((t) => (
            <figure key={t.tag} className="quote">
              <span className="label" style={{ fontSize: 11.5 }}>{t.tag}</span>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>{t.by}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export const packages = [
  {
    bar: ["GRADES 9–10", "PLAN"],
    title: "Builder Roadmap",
    text: "A yearly plan for younger students: course planning, extracurricular and summer strategy, and a project to build over time.",
    items: ["Course and extracurricular planning", "Project and portfolio development", "Career and interest exploration", "Rolls into the Application Package"],
  },
  {
    bar: ["GRADES 11–12", "APPLY"],
    title: "Application Package",
    text: "Full support from junior spring through submitted applications and financial aid offers.",
    items: ["Balanced college list and ED/EA strategy", "Merit and need-based aid strategy", "All essays and the activities list", "Comparing financial aid offers"],
  },
  {
    bar: ["ANY GRADE", "BUILD"],
    title: "Venture & Project Coaching",
    text: "Hourly coaching for students building a product, business, app or device, tailored to where the project is today.",
    items: ["Product strategy and roadmap", "Launching and finding first users", "Measuring what's working", "Documenting the work for applications"],
  },
];

export function Packages() {
  return (
    <section id="packages" className="section white">
      <div className="wrap">
        <div className="section-head">
          <span className="label">§06 — Packages</span>
          <h2>Choose the support that fits where your student is.</h2>
          <p className="lede">Pricing depends on your student&apos;s grade, goals and college list. I&apos;ll share a clear quote after your free consultation.</p>
        </div>
        <div className="grid-3">
          {packages.map((p) => (
            <div key={p.title} className="module">
              <div className="module-bar"><span>{p.bar[0]}</span><span>{p.bar[1]}</span></div>
              <div className="module-body">
                <h3>{p.title}</h3>
                <p className="pkg-text">{p.text}</p>
                <ul className="spec">
                  {p.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
                <Link href="/book" className="pkg-link">Discuss on a free call →</Link>
              </div>
            </div>
          ))}
        </div>
        <p className="lede" style={{ marginTop: 32, fontSize: 16 }}>
          Only need help with essays? <a href={site.essayLaunchUrl}>Essay Launch</a> offers essay-only coaching.
        </p>
      </div>
    </section>
  );
}

export const faqs = [
  ["Do you work with students outside Los Angeles?", "Yes. All sessions take place over video, so I work with families nationwide."],
  ["When should we start?", "Students can start as early as 9th grade, when course and project choices begin to shape their options. Many families start college application support in the spring of junior year."],
  ["Does my student need to have a project already?", "No. Some students come with a product or business underway; others come with an idea or just a curiosity. Venture coaching starts wherever your student is."],
  ["Will you write my student's essays or build their project?", "No. Your student does the writing and the building. I coach, ask questions and give feedback, so the work stays authentically theirs."],
  ["Can you guarantee admission to a particular college?", "No one can honestly guarantee admission. What I can promise is a thoughtful plan, a balanced college list, and applications that show who your student really is."],
  ["How does pricing work?", "Multi-year planning and application support are offered as packages; venture coaching is hourly. After a free consultation, I'll send a quote based on your student's needs."],
];

export function FAQ() {
  return (
    <section id="faq" className="section graph">
      <div className="wrap">
        <div className="section-head">
          <span className="label">§07 — FAQ</span>
          <h2>Common questions.</h2>
        </div>
        <div className="faq">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="cta blueprint">
      <div className="wrap">
        <span className="label">Next step</span>
        <h2>Let&apos;s talk about what your student is building.</h2>
        <p className="lede">A free 30-minute consultation. You&apos;ll leave with at least one concrete next step, whether or not we work together.</p>
        <Link href="/book" className="btn btn-primary">Book a free consultation →</Link>
      </div>
    </section>
  );
}

export function PageHero({ label, title, lede }) {
  return (
    <section className="page-hero blueprint">
      <div className="wrap">
        <span className="label">{label}</span>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>
  );
}
