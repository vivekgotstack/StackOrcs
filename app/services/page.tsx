import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  BracketsCurly,
  Cloud,
  DeviceMobile,
  Pulse,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { SubpageHero } from "@/components/subpage-hero";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product engineering, cloud systems, applied AI, messaging, observability, security, and ongoing digital operations from StackOrcs.",
};

const services = [
  {
    index: "01",
    title: "Product engineering",
    icon: BracketsCurly,
    description:
      "New products and modernized platforms shaped around the real workflow, then engineered for speed, maintainability, and scale.",
    deliverables: [
      "Product strategy & discovery",
      "Web applications & platforms",
      "API and service development",
      "Legacy modernization",
    ],
  },
  {
    index: "02",
    title: "Experience systems",
    icon: DeviceMobile,
    description:
      "Responsive, accessible experiences with strong information architecture, purposeful motion, and reusable design systems.",
    deliverables: [
      "UX and interaction design",
      "Design systems",
      "Frontend architecture",
      "Accessibility engineering",
    ],
  },
  {
    index: "03",
    title: "Cloud & platforms",
    icon: Cloud,
    description:
      "Reliable cloud foundations, delivery pipelines, services, and integrations that support continuous change without operational chaos.",
    deliverables: [
      "Cloud architecture",
      "Platform engineering",
      "CI/CD and infrastructure",
      "Performance & cost tuning",
    ],
  },
  {
    index: "04",
    title: "Applied AI",
    icon: Brain,
    description:
      "Useful AI built around business processes and trusted data, with human control, evaluation, and security designed in.",
    deliverables: [
      "AI opportunity mapping",
      "Intelligent search & RAG",
      "Workflow agents",
      "Evaluation & guardrails",
    ],
  },
  {
    index: "05",
    title: "Messaging & operations",
    icon: Pulse,
    description:
      "Messaging architecture, observability, monitoring, incident readiness, and managed improvement for systems that cannot go dark.",
    deliverables: [
      "Event and messaging systems",
      "Monitoring & alerting",
      "SRE and incident readiness",
      "Managed engineering",
    ],
  },
  {
    index: "06",
    title: "Security engineering",
    icon: ShieldCheck,
    description:
      "Threat-aware architecture and secure delivery practices that make trust part of the product, not a late compliance sprint.",
    deliverables: [
      "Threat modeling",
      "Identity & access",
      "Application security",
      "Security posture reviews",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      <SubpageHero
        index="01 / 05"
        eyebrow="Capabilities"
        title="The complete"
        accent="delivery chain."
        description="From the first strategic decision to live operations, StackOrcs connects the disciplines that determine whether a digital system actually works."
      />
      <section className="page-section page-section--light">
        <div className="shell">
          <div className="page-intro">
            <SectionReveal>
              <p className="kicker">Built as a system</p>
            </SectionReveal>
            <SectionReveal delay={0.06}>
              <h2>
                Deep where it matters.
                <br />
                Connected everywhere.
              </h2>
            </SectionReveal>
          </div>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <SectionReveal
                  className="service-card"
                  key={service.index}
                  delay={(index % 2) * 0.06}
                >
                  <div className="service-card__head">
                    <span>{service.index}</span>
                    <Icon weight="duotone" aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="engagement-band">
        <div className="shell engagement-band__grid">
          <SectionReveal>
            <p className="kicker kicker--light">Ways to engage</p>
            <h2>Meet the work where it is.</h2>
          </SectionReveal>
          <div className="engagement-options">
            {[
              ["A", "Define", "A focused discovery to create direction, scope, and a credible route forward."],
              ["B", "Build", "An embedded cross-functional team to design and ship a product or platform."],
              ["C", "Evolve", "Ongoing product engineering, operations, and optimization around a live system."],
            ].map(([letter, title, text]) => (
              <SectionReveal className="engagement-option" key={letter}>
                <span>{letter}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="page-cta">
        <div className="shell">
          <SectionReveal>
            <p className="kicker">Not sure where to start?</p>
            <h2>Bring the messy version.</h2>
            <p>
              We can help turn an opportunity, bottleneck, or inherited system
              into a clear engineering brief.
            </p>
            <Link className="button-link" href="/contact">
              Talk with StackOrcs <ArrowUpRight aria-hidden="true" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
