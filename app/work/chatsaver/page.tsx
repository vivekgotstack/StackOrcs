import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowsClockwise,
  Database,
  DownloadSimple,
  FileText,
  WifiSlash,
} from "@phosphor-icons/react/dist/ssr";
import { ChatSaverVisual } from "@/components/chatsaver-visual";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "ChatSaver — Knowledge Product Case Study",
  description:
    "How StackOrcs engineered an offline-first ChatGPT knowledge vault with secure cross-device recovery.",
  alternates: { canonical: "/work/chatsaver" },
};

const capabilities = [
  {
    icon: FileText,
    title: "Import and shape",
    text: "Parse ChatGPT exports locally and turn selected conversations into editable question-and-answer notes.",
  },
  {
    icon: WifiSlash,
    title: "Work offline",
    text: "Keep creating, reading, searching, editing, sharing, and exporting without waiting for a network request.",
  },
  {
    icon: ArrowsClockwise,
    title: "Synchronize safely",
    text: "Push bounded idempotent mutations, then pull cursor-based deltas for dependable cross-device continuity.",
  },
  {
    icon: Database,
    title: "Recover completely",
    text: "Use PostgreSQL-backed snapshots, deletion markers, and normalized recovery when a local vault is cleared.",
  },
];

export default function ChatSaverCaseStudy() {
  return (
    <main id="main-content" className="case-study case-study--chatsaver">
      <section className="case-hero case-hero--crimson">
        <div className="case-hero__grid" aria-hidden="true" />
        <div className="shell">
          <Link className="case-back" href="/work">
            <ArrowLeft aria-hidden="true" /> All work
          </Link>
          <div className="case-hero__heading">
            <p className="kicker kicker--light">02 / Knowledge product</p>
            <h1>ChatSaver</h1>
            <p>
              An offline-first knowledge vault that turns ChatGPT exports into
              notes users can edit, search, carry, and recover across devices.
            </p>
          </div>
          <div className="case-facts">
            <div><small>Client</small><strong>Private client</strong></div>
            <div><small>Engagement</small><strong>Product and platform engineering</strong></div>
            <div><small>Experience</small><strong>Installable offline-first PWA</strong></div>
            <div><small>Core stack</small><strong>Next.js · IndexedDB · Spring Boot</strong></div>
          </div>
        </div>
      </section>

      <section className="chatsaver-showcase">
        <div className="shell">
          <SectionReveal>
            <ChatSaverVisual />
          </SectionReveal>
        </div>
      </section>

      <section className="case-narrative">
        <div className="shell case-narrative__grid">
          <SectionReveal>
            <p className="kicker">The product idea</p>
            <h2>Turn conversation history into knowledge people can actually use.</h2>
          </SectionReveal>
          <SectionReveal className="case-narrative__copy">
            <p>
              Chat exports are valuable but difficult to revisit. ChatSaver
              reshapes selected conversations into editable Q&amp;A blocks, then
              makes them searchable, portable, and available without a connection.
            </p>
            <p>
              The architecture keeps IndexedDB as the immediate working source of
              truth. A secured Spring Boot and PostgreSQL service adds identity,
              backup, recovery, and cross-device synchronization when connectivity
              is available.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="case-system case-system--crimson">
        <div className="shell">
          <SectionReveal className="case-system__heading">
            <p className="kicker kicker--light">Product architecture</p>
            <h2>Local speed. Durable recovery. Clear ownership.</h2>
          </SectionReveal>
          <div className="case-system__grid">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <SectionReveal key={capability.title} className="case-system__card">
                  <span>0{index + 1}</span>
                  <Icon weight="duotone" aria-hidden="true" />
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="case-callout">
        <div className="shell case-callout__grid">
          <SectionReveal>
            <span>Offline-first invariant</span>
            <blockquote>
              Creating, reading, updating, searching, and deleting a local note
              does not require a network request.
            </blockquote>
          </SectionReveal>
          <SectionReveal className="case-callout__notes">
            <div>
              <DownloadSimple weight="duotone" aria-hidden="true" />
              <p>Imported ChatGPT content is parsed locally before any optional synchronization.</p>
            </div>
            <div>
              <ArrowsClockwise weight="duotone" aria-hidden="true" />
              <p>Pending local changes are preserved until the server acknowledges them.</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="case-outcome">
        <div className="shell case-outcome__grid">
          <SectionReveal>
            <p className="kicker">What shipped</p>
            <h2>A serious application around a simple promise.</h2>
          </SectionReveal>
          <SectionReveal>
            <ul>
              <li>Selective ChatGPT export import and editable Q&amp;A generation</li>
              <li>Offline search, favorites, autosave, sharing, and Markdown export</li>
              <li>Secure device sessions with rotating refresh-token protection</li>
              <li>Idempotent sync, cursor recovery, and tenant-scoped server reads</li>
            </ul>
            <Link className="button-link" href="/contact">
              Discuss a product like this <ArrowUpRight aria-hidden="true" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <section className="next-case">
        <Link href="/work/modastitch" className="shell next-case__link">
          <span>Next case study · UP24Network</span>
          <strong>ModaStitch</strong>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
