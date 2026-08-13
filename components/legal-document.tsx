import type { ReactNode } from "react";
import Link from "next/link";
import { PageEnding } from "./page-ending";

export type LegalSection = {
  title: string;
  content: ReactNode;
};

export function LegalDocument({
  eyebrow,
  title,
  summary,
  sections,
  updated = "August 13, 2026",
}: {
  eyebrow: string;
  title: string;
  summary: string;
  sections: LegalSection[];
  updated?: string;
}) {
  return (
    <main id="main-content" className="legal-page">
      <header className="legal-hero">
        <div className="shell legal-hero__grid">
          <div>
            <p className="kicker kicker--light">{eyebrow}</p>
            <h1>{title}</h1>
          </div>
          <div>
            <p>{summary}</p>
            <span>Last updated {updated}</span>
          </div>
        </div>
      </header>
      <div className="shell legal-layout">
        <aside>
          <p>On this page</p>
          {sections.map((section, index) => (
            <a key={section.title} href={"#section-" + (index + 1)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {section.title}
            </a>
          ))}
        </aside>
        <article>
          {sections.map((section, index) => (
            <section key={section.title} id={"section-" + (index + 1)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              <div>{section.content}</div>
            </section>
          ))}
          <div className="legal-contact">
            <p>Policy enquiries and rights requests</p>
            <Link href="/contact">Contact the StackOrcs team</Link>
          </div>
        </article>
      </div>
      <PageEnding
        eyebrow="Policy and trust enquiries"
        title="Raise a request with StackOrcs."
        description="Send a privacy request, accessibility issue, security report, or question about these terms through our secure contact channel."
      />
    </main>
  );
}
