import Link from "next/link";
import Frame from "@/components/Frame";
import { site } from "@/lib/site";

const iconProps = {
  className: "icon", viewBox: "0 0 24 24", fill: "none", stroke: "#0f2440",
  strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true,
};

export const paths = [
  {
    title: "They take things apart",
    text: "They love robotics, drones, vehicles, aircraft, and hands-on LEGO or Minecraft challenges. They'd rather fix something than replace it.",
    icon: <svg {...iconProps}><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" /></svg>,
  },
  {
    title: "They teach themselves",
    text: "They learn from YouTube tutorials and forums. They've made a game, a website, or a Discord bot. They tinker with code just to see what happens.",
    icon: <svg {...iconProps}><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></svg>,
  },
  {
    title: "They have a \"side hustle\"",
    text: "They start their own thing, whether that's a service like car detailing or lawn mowing, or a product like a custom phone case or T-shirt. They naturally think about how to turn a business idea into reality.",
    icon: <svg {...iconProps}><path d="M4 20h16M6 16l4-5 3 3 5-7M15 7h3v3" /></svg>,
  },
  {
    title: "They notice what could be better",
    text: "They redesign their room, critique how apps work, sketch in the margins of their notes, or point out what's annoying about everyday things (physical or digital).",
    icon: <svg {...iconProps}><path d="M3 21l3-1 12-12-2-2L4 18l-1 3zM14 6l2 2M17 3l4 4" /></svg>,
  },
];

export function WhoFor() {
  return (
    <section id="for" className="section white">
      <div className="wrap">
        <div className="section-head">
          <span className="label">§03 — Who this is for</span>
          <h2>Does this sound like your student?</h2>
          <p className="section-intro">Many students don&apos;t know what they want to major in or which careers interest them. That&apos;s okay. If at least one of the following is true of your student, we may be a good fit.</p>
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
        <p className="common-thread">The common thread: they&apos;re happiest when they&apos;re tinkering or creating things</p>
      </div>
    </section>
  );
}

export const problems = [
  {
    title: "The portfolio",
    body: "MIT Admissions describes strong applicants as having “engineering or crafting projects of their own design and making that are substantial, original, and technically creative.” Having led teams that took product ideas from prototype to eight-figure revenue at various companies, I coach students through the process—from brainstorming and building to launching and iterating.",
  },
  {
    title: "The major decision",
    body: "Many universities admit students directly into engineering or business programs, and seats are limited. Students who start in another major and try to switch later may find it difficult, or at some schools impossible. Based on each school's unique rules and their interests, I help students choose the right major for them.",
  },
  {
    title: "The college list",
    body: "Engineering, business, and design programs are often harder to get into than the university as a whole. I help students build a balanced college list that accounts for the specific considerations of these majors.",
  },
  {
    title: "Course planning",
    body: "Engineering programs expect higher levels of calculus, physics and chemistry before college. Getting there by senior year depends on choices made as early as 9th grade. I help students who may be interested in the engineering path plan their courses early.",
  },
  {
    title: "The essay",
    body: "I specialize in helping students explain technical work to nontechnical readers in a way that reveals their character and values.",
  },
];

export function EngineeringProblem() {
  return (
    <section id="problem" className="section blueprint problem-section">
      <div className="wrap">
        <div className="section-head">
          <span className="label">§02 — The problem</span>
          <h2>General college advice doesn&apos;t account for admission to engineering, business, and design programs. <em>I do.</em></h2>
        </div>
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div key={problem.title} className={`path${index === 0 ? " problem-featured" : ""}`}>
              <h3>{problem.title}</h3>
              <p>{problem.body}</p>
            </div>
          ))}
        </div>
        <Link href="#services" className="pkg-link">See how I help →</Link>
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
      "Project portfolio development coaching",
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
      "Application essay coaching: personal statements, supplemental essays, University of California Personal Insight Questions, and more",
      "Activities list and project write-ups",
      "Application timelines and submissions",
      "Comparing financial aid offers",
    ],
  },
];

export function HowIHelp({ heading = "How I help", label = "§04 — How I help" }) {
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
  <>I spent nine years as a product management leader, helping teams of engineers and designers launch and commercialize products at companies like Lyft, Intuit, and Headway (work featured in <a href={site.forbesUrl}>Forbes</a>).</>,
  <>Along the way, I sat on hiring committees and read hundreds of résumés from college students and recent grads for positions in product management, engineering, design, marketing and operations.</>,
  <>Now I help high school students navigate the unique challenges of applying to engineering, design, and business programs.</>,
  <>My work on college essay writing has been published in the <a href={site.chronicleUrl}>San Francisco Chronicle</a>. I&apos;m also a College Counselor for ScholarMatch, hold a certificate in college counseling from NACAC (Core Concepts for IECs), am a career counselor for TheJobForum, and previously sat on the advisory board of Junior Achievement Northern California.</>,
  <>Earlier in my career, I was part of the inaugural class of Schwarzman Scholars, a highly selective graduate fellowship. I earned a Master&apos;s in Global Affairs from Tsinghua University in Beijing, China.</>,
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
  ["Set the strategy", "Who this is for, what success looks like, and what to skip."],
  ["Build the roadmap", "Milestones that fit around school, sports, and healthy rest."],
  ["Launch it", "Release a first version, find real users, and learn from them."],
  ["Tell the story", "Turn the build log into essays, activities and portfolios."],
];

export function Venture({ label = "§05 — maker portfolio building" }) {
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
  detail: "Admitted to Stanford University, School of Engineering (Mechanical Engineering)",
};

export const testimonials = [
  {
    tag: "LOG_01 · STUDENT",
    quote:
      "My favorite part of working with James was how open he was. Working with him was a dialogue: he wasn’t doing it for me or telling me what to do; he was guiding me to discover more about myself and express it. James also helped me talk about a technical design project in a way that was specific, understandable to a nontechnical audience, and clear about my impact. With his help, I looked at my application and felt like I was a standout candidate.",
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
          <span className="label">§06 — Testimonials</span>
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
    items: ["Balanced college list and early decision/early action strategy", "Merit and need-based aid strategy", "All essays and the activities list", "Comparing financial aid offers"],
  },
  {
    bar: ["ANY GRADE", "BUILD"],
    title: "Maker Portfolio Project Coaching",
    text: "Hourly coaching for students building a product, business, app or device, tailored to where the project is today.",
    items: ["Product strategy and roadmap", "Launching and finding first users", "Measuring what's working", "Documenting the work for applications"],
  },
];

export function Packages() {
  return (
    <section id="packages" className="section white">
      <div className="wrap">
        <div className="section-head">
          <span className="label">§07 — Packages</span>
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
