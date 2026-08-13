import type { Metadata } from "next";
import { ArrowUpRight, Brain, Cloud, Pulse, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { SectionReveal } from "@/components/section-reveal";
import { SubpageHero } from "@/components/subpage-hero";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "StackOrcs Field Notes: practical perspectives on digital engineering, applied AI, cloud, security, and operations.",
};

const lanes = [
  {
    title: "Engineering systems",
    text: "Architecture, delivery practices, product foundations, and the choices that determine long-term velocity.",
    icon: Pulse,
  },
  {
    title: "Applied AI",
    text: "Practical automation, agentic workflows, evaluation, governance, and where human judgment remains essential.",
    icon: Brain,
  },
  {
    title: "Cloud & operations",
    text: "Platforms, observability, resilience, messaging, and the operational reality behind reliable products.",
    icon: Cloud,
  },
  {
    title: "Trust engineering",
    text: "Security, privacy, accessibility, and the disciplines that make digital systems credible.",
    icon: ShieldCheck,
  },
];

export default function InsightsPage() {
  return (
    <main id="main-content">
      <SubpageHero
        index="05 / 05"
        eyebrow="Field Notes"
        title="Useful signal."
        accent="No content theatre."
        description="Practical perspectives for leaders responsible for building, modernizing, and operating digital systems."
      />
      <section className="page-section page-section--light">
        <div className="shell insights-intro">
          <SectionReveal>
            <p className="kicker">Editorial charter</p>
            <h2>Published when it earns attention.</h2>
          </SectionReveal>
          <SectionReveal delay={0.06}>
            <p>
              Field Notes is not a high-volume content machine. It is a focused
              publication for clear engineering lessons, informed points of view,
              and operating patterns worth carrying into real work.
            </p>
          </SectionReveal>
        </div>
        <div className="shell insight-lanes">
          {lanes.map((lane, index) => {
            const Icon = lane.icon;
            return (
              <SectionReveal className="insight-lane" key={lane.title} delay={index * 0.05}>
                <span>0{index + 1}</span>
                <Icon weight="duotone" />
                <h3>{lane.title}</h3>
                <p>{lane.text}</p>
                <ArrowUpRight aria-hidden="true" />
              </SectionReveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
