import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle,
  LockKey,
} from "@phosphor-icons/react/dist/ssr";
import { AmbientVideo } from "@/components/ambient-video";
import { ChatSaverVisual } from "@/components/chatsaver-visual";
import { PageEnding } from "@/components/page-ending";
import { SectionReveal } from "@/components/section-reveal";
import { SubpageHero } from "@/components/subpage-hero";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected digital products and platforms designed, engineered, and shipped by StackOrcs.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <SubpageHero
        index="03 / 06"
        eyebrow="Selected work"
        title="Proof lives"
        accent="in the product."
        description="A focused selection of commerce and knowledge systems shaped from interface through infrastructure—and built to keep working after launch."
      />

      <section className="work-index">
        <div className="shell work-index__intro">
          <SectionReveal>
            <p className="kicker">Case studies</p>
          </SectionReveal>
          <SectionReveal>
            <h2>Work shown with context, not theatre.</h2>
            <p>
              We share the product, the engineering responsibility, and the
              decisions we can substantiate. Client details stay private unless
              attribution is public or approved.
            </p>
          </SectionReveal>
        </div>

        <div className="shell work-list">
          <article className="work-card work-card--moda">
            <SectionReveal className="work-card__media-wrap">
              <Link
                className="work-card__media"
                href="/work/modastitch"
                aria-label="View the ModaStitch case study"
              >
                <AmbientVideo
                  className="work-card__video"
                  src="/work/modastitch-showcase.mp4"
                  poster="/work/modastitch-poster.jpg"
                  label="Silent looping product film showing the ModaStitch commerce experience"
                />
                <span className="work-card__media-label">Live commerce platform</span>
                <span className="work-card__open">
                  View case study <ArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </SectionReveal>
            <SectionReveal className="work-card__copy">
              <div className="work-card__meta">
                <span>01</span>
                <span>UP24Network</span>
                <span>Fashion commerce</span>
              </div>
              <h2>ModaStitch</h2>
              <p>
                A full-stack fashion platform engineered from storefront to
                secured services and production infrastructure.
              </p>
              <div className="work-card__tags">
                <span>Next.js</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>NGINX</span>
              </div>
              <Link className="work-text-link" href="/work/modastitch">
                Read the ModaStitch story <ArrowUpRight aria-hidden="true" />
              </Link>
            </SectionReveal>
          </article>

          <article className="work-card work-card--chatsaver">
            <SectionReveal className="work-card__media-wrap">
              <Link
                className="work-card__media"
                href="/work/chatsaver"
                aria-label="View the ChatSaver case study"
              >
                <ChatSaverVisual compact />
                <span className="work-card__media-label">Offline-first knowledge product</span>
                <span className="work-card__open">
                  View case study <ArrowUpRight aria-hidden="true" />
                </span>
              </Link>
            </SectionReveal>
            <SectionReveal className="work-card__copy">
              <div className="work-card__meta">
                <span>02</span>
                <span>Private client</span>
                <span>Knowledge systems</span>
              </div>
              <h2>ChatSaver</h2>
              <p>
                A local-first PWA that turns ChatGPT exports into an editable,
                searchable knowledge vault with optional cross-device recovery.
              </p>
              <div className="work-card__tags">
                <span>Next.js PWA</span>
                <span>IndexedDB</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
              </div>
              <Link className="work-text-link" href="/work/chatsaver">
                Read the ChatSaver story <ArrowUpRight aria-hidden="true" />
              </Link>
            </SectionReveal>
          </article>
        </div>
      </section>

      <section className="work-principles">
        <div className="shell work-principles__grid">
          <SectionReveal>
            <p className="kicker kicker--light">Our publishing standard</p>
            <h2>Specific enough to be credible. Discreet enough to be trusted.</h2>
          </SectionReveal>
          <div className="work-principles__list">
            <SectionReveal>
              <CheckCircle weight="duotone" aria-hidden="true" />
              <div>
                <h3>Show the real system</h3>
                <p>Product surfaces, architecture, and delivery responsibility—not invented impact metrics.</p>
              </div>
            </SectionReveal>
            <SectionReveal>
              <LockKey weight="duotone" aria-hidden="true" />
              <div>
                <h3>Protect the relationship</h3>
                <p>Public partners are credited. Private client identities remain private by default.</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <PageEnding
        eyebrow="Your product could be next"
        title="Bring us the system worth improving."
        description="We can start with the opportunity, the inherited complexity, or the first ambitious brief."
        action="Start a conversation"
      />
    </main>
  );
}
