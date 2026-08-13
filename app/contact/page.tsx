import type { Metadata } from "next";
import {
  ArrowUpRight,
  Clock,
  LinkedinLogo,
  LockKey,
} from "@phosphor-icons/react/dist/ssr";
import { ContactBrief } from "@/components/contact-brief";
import { SubpageHero } from "@/components/subpage-hero";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Share your product, cloud, AI, security, or digital operations challenge with StackOrcs.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <SubpageHero
        index="04 / 05"
        eyebrow="New business"
        title="Bring the ambition."
        accent="And the messy bits."
        description="Tell us what needs to change, what is getting in the way, and why it matters. We will start there."
      />
      <section className="contact-section">
        <div className="shell contact-grid">
          <SectionReveal className="contact-aside">
            <p className="kicker">Start the signal</p>
            <h2>Useful context makes for a useful first conversation.</h2>
            <div className="contact-notes">
              <div>
                <Clock weight="duotone" aria-hidden="true" />
                <span>
                  <strong>Focused first response</strong>
                  We&apos;ll use the context you share to make the next step
                  productive.
                </span>
              </div>
              <div>
                <LockKey weight="duotone" aria-hidden="true" />
                <span>
                  <strong>Private, branded delivery</strong>
                  Your brief is sent securely to StackOrcs and never added to the newsletter.
                </span>
              </div>
            </div>
            <a
              className="linkedin-panel"
              href="https://www.linkedin.com/in/stackorcs"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo weight="fill" aria-hidden="true" />
              <span>
                <small>Prefer a direct message?</small>
                Connect with StackOrcs on LinkedIn
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <ContactBrief />
          </SectionReveal>
        </div>
      </section>
      <section className="contact-expectation">
        <div className="shell">
          <SectionReveal>
            <p className="kicker kicker--light">What happens next</p>
          </SectionReveal>
          <div>
            {[
              ["01", "We read the context", "No automated qualification maze."],
              ["02", "We clarify the fit", "A focused exchange around goals, timing, and constraints."],
              ["03", "We shape a next step", "A useful workshop, technical review, or delivery proposal."],
            ].map(([number, title, text]) => (
              <SectionReveal className="expectation-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
