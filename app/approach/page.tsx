import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Binoculars,
  Blueprint,
  CodeBlock,
  Pulse,
} from "@phosphor-icons/react/dist/ssr";
import { SubpageHero } from "@/components/subpage-hero";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "A transparent, outcome-led approach to product strategy, design, engineering, launch, and continuous improvement.",
};

const phases = [
  {
    number: "01",
    label: "Orient",
    icon: Binoculars,
    title: "Find the signal",
    text: "We align on the business outcome, user reality, constraints, risks, and the decisions that cannot be postponed.",
    output: "Shared brief · opportunity map · first delivery slice",
  },
  {
    number: "02",
    label: "Shape",
    icon: Blueprint,
    title: "Make it tangible",
    text: "Experience, architecture, data, and operations are shaped together around a thin but meaningful end-to-end path.",
    output: "Prototype · system design · delivery plan",
  },
  {
    number: "03",
    label: "Build",
    icon: CodeBlock,
    title: "Ship in clear increments",
    text: "We work in small, demonstrable releases with automated quality, direct feedback, and real operational visibility.",
    output: "Production software · documentation · launch readiness",
  },
  {
    number: "04",
    label: "Evolve",
    icon: Pulse,
    title: "Learn from the system",
    text: "Usage, performance, reliability, and business signals guide the next investment instead of assumptions and backlog gravity.",
    output: "Operational insight · roadmap · continuous improvement",
  },
];

export default function ApproachPage() {
  return (
    <main id="main-content">
      <SubpageHero
        index="02 / 06"
        eyebrow="How we work"
        title="Momentum without"
        accent="the mystery."
        description="A visible delivery system built around decisions, evidence, and working software—not ceremony for its own sake."
      />
      <section className="page-section page-section--warm">
        <div className="shell">
          <div className="approach-ledger">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <SectionReveal className="approach-row" key={phase.number}>
                  <div className="approach-row__number">{phase.number}</div>
                  <div className="approach-row__icon">
                    <Icon weight="duotone" aria-hidden="true" />
                  </div>
                  <div className="approach-row__copy">
                    <p>{phase.label}</p>
                    <h2>{phase.title}</h2>
                    <span>{phase.text}</span>
                  </div>
                  <div className="approach-row__output">
                    <small>Typical output</small>
                    <strong>{phase.output}</strong>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="principles-section">
        <div className="shell principles-grid">
          <SectionReveal>
            <p className="kicker kicker--light">Operating principles</p>
            <h2>Less theatre. More traction.</h2>
          </SectionReveal>
          <div className="principle-list">
            {[
              ["01", "Senior attention", "The people shaping the work stay close to the work."],
              ["02", "Visible tradeoffs", "We explain the cost, risk, and consequence behind important choices."],
              ["03", "Working evidence", "Prototypes, tests, telemetry, and shipped slices beat speculative certainty."],
              ["04", "Sustainable ownership", "Documentation and clear architecture help your team carry the system forward."],
            ].map(([number, title, text]) => (
              <SectionReveal className="principle-item" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="page-cta page-cta--dark">
        <div className="shell">
          <SectionReveal>
            <p className="kicker kicker--light">Ready when you are</p>
            <h2>Start with one useful conversation.</h2>
            <Link className="button-link button-link--light" href="/contact">
              Share the challenge <ArrowUpRight aria-hidden="true" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
