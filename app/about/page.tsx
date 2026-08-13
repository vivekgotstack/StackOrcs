import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Crosshair,
  Handshake,
  Lightning,
  TreeStructure,
} from "@phosphor-icons/react/dist/ssr";
import { SectionReveal } from "@/components/section-reveal";
import { SubpageHero } from "@/components/subpage-hero";

export const metadata: Metadata = {
  title: "Company",
  description:
    "StackOrcs is a modern digital engineering company built around clarity, craft, ownership, and business outcomes.",
};

const values = [
  {
    title: "Clarity over noise",
    text: "We turn complexity into understandable choices, systems, and next steps.",
    icon: Crosshair,
  },
  {
    title: "Craft with consequence",
    text: "Quality matters most where it improves trust, speed, resilience, and the user experience.",
    icon: Lightning,
  },
  {
    title: "One connected system",
    text: "Strategy, design, engineering, security, and operations work better when they share context.",
    icon: TreeStructure,
  },
  {
    title: "Ownership that lasts",
    text: "We leave the product and the people around it more capable than when we arrived.",
    icon: Handshake,
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <SubpageHero
        index="05 / 06"
        eyebrow="Company"
        title="Serious engineering."
        accent="Human partnership."
        description="StackOrcs is built for organizations that need thoughtful digital systems and a partner who can hold the whole picture."
      />
      <section className="page-section page-section--light">
        <div className="shell about-statement">
          <SectionReveal>
            <p className="kicker">Why StackOrcs</p>
          </SectionReveal>
          <SectionReveal delay={0.06}>
            <h2>
              Technology changes quickly.
              <br />
              Good partnership does not.
            </h2>
            <p>
              The strongest digital products come from close collaboration,
              candid decisions, and engineering that respects both the business
              and the people using the system. StackOrcs exists to bring those
              things into one delivery relationship.
            </p>
          </SectionReveal>
        </div>
        <div className="shell values-grid">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <SectionReveal
                className="value-card"
                key={value.title}
                delay={index * 0.05}
              >
                <span>0{index + 1}</span>
                <Icon weight="duotone" aria-hidden="true" />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </SectionReveal>
            );
          })}
        </div>
      </section>
      <section className="company-note">
        <div className="shell company-note__grid">
          <SectionReveal className="company-note__mark">
            <span>
              <Image
                src="/stackorcs-logo.png"
                alt="StackOrcs bear mark"
                fill
                sizes="130px"
              />
            </span>
          </SectionReveal>
          <SectionReveal className="company-note__copy" delay={0.06}>
            <p className="kicker kicker--light">The name</p>
            <h2>Builders who protect the whole stack.</h2>
            <p>
              “Stack” reflects the connected layers behind every useful digital
              experience. “Orcs” brings the energy: resilient, practical, and
              ready to do the difficult work.
            </p>
            <a
              className="text-link"
              href="https://www.linkedin.com/company/stackorcs/"
              target="_blank"
              rel="noreferrer"
            >
              Follow StackOrcs on LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
          </SectionReveal>
        </div>
      </section>
      <section className="page-cta">
        <div className="shell">
          <SectionReveal>
            <p className="kicker">Build with us</p>
            <h2>Let&apos;s make the difficult feel clear.</h2>
            <Link className="button-link" href="/contact">
              Start a conversation <ArrowUpRight aria-hidden="true" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
