import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Cloud,
  Database,
  ShieldCheck,
  Storefront,
} from "@phosphor-icons/react/dist/ssr";
import { AmbientVideo } from "@/components/ambient-video";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "ModaStitch — Commerce Case Study",
  description:
    "How StackOrcs delivered the ModaStitch full-stack fashion commerce platform for UP24Network.",
  alternates: { canonical: "/work/modastitch" },
};

const systemLayers = [
  {
    icon: Storefront,
    title: "Storefront experience",
    text: "A responsive, editorial commerce interface designed around product discovery and a confident fashion brand.",
  },
  {
    icon: ShieldCheck,
    title: "Secured service layer",
    text: "Java 21 and Spring Boot services with protected JWT flows and a clear boundary between experience and commerce logic.",
  },
  {
    icon: Database,
    title: "Relational commerce data",
    text: "PostgreSQL foundations for the product, inventory, account, and operational data behind the storefront.",
  },
  {
    icon: Cloud,
    title: "Production operations",
    text: "A deployed system spanning Vercel, Neon PostgreSQL, and an NGINX-managed Ubuntu VPS.",
  },
];

export default function ModaStitchCaseStudy() {
  return (
    <main id="main-content" className="case-study case-study--moda">
      <section className="case-hero">
        <div className="case-hero__grid" aria-hidden="true" />
        <div className="shell">
          <Link className="case-back" href="/work">
            <ArrowLeft aria-hidden="true" /> All work
          </Link>
          <div className="case-hero__heading">
            <p className="kicker kicker--light">01 / Commerce platform</p>
            <h1>ModaStitch</h1>
            <p>
              A fashion commerce system delivered end to end—from the customer
              experience to secured services, data, deployment, and live operations.
            </p>
          </div>
          <div className="case-facts">
            <div><small>Client</small><strong>UP24Network</strong></div>
            <div><small>Engagement</small><strong>Full-stack product delivery</strong></div>
            <div><small>Status</small><strong>Live commerce platform</strong></div>
            <div><small>Core stack</small><strong>Next.js · Spring Boot · PostgreSQL</strong></div>
          </div>
        </div>
      </section>

      <section className="case-film">
        <div className="shell">
          <SectionReveal className="case-film__frame">
            <AmbientVideo
              src="/work/modastitch-showcase.mp4"
              poster="/work/modastitch-poster.jpg"
              label="Silent looping film demonstrating the ModaStitch storefront and product experience"
              preload="metadata"
            />
            <div className="case-film__caption">
              <span>Product film · Silent loop</span>
              <a href="https://modastitch.com" target="_blank" rel="noreferrer">
                Visit live site <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="case-narrative">
        <div className="shell case-narrative__grid">
          <SectionReveal>
            <p className="kicker">The brief</p>
            <h2>Make the brand feel considered. Make the system production-ready.</h2>
          </SectionReveal>
          <SectionReveal className="case-narrative__copy">
            <p>
              ModaStitch needed more than an attractive storefront. The product
              had to connect a polished shopping experience with secure backend
              services, durable data, and infrastructure capable of supporting a
              live commerce operation.
            </p>
            <p>
              StackOrcs held the complete delivery chain: interface, application
              architecture, authentication flows, database integration, and the
              production route from Vercel to an Ubuntu-hosted Spring Boot service.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="case-system">
        <div className="shell">
          <SectionReveal className="case-system__heading">
            <p className="kicker kicker--light">One connected system</p>
            <h2>Four layers. One accountable delivery path.</h2>
          </SectionReveal>
          <div className="case-system__grid">
            {systemLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <SectionReveal key={layer.title} className="case-system__card">
                  <span>0{index + 1}</span>
                  <Icon weight="duotone" aria-hidden="true" />
                  <h3>{layer.title}</h3>
                  <p>{layer.text}</p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="case-outcome">
        <div className="shell case-outcome__grid">
          <SectionReveal>
            <p className="kicker">What shipped</p>
            <h2>A live product, not a presentation layer.</h2>
          </SectionReveal>
          <SectionReveal>
            <ul>
              <li>Responsive fashion storefront and product discovery flows</li>
              <li>Secured Java services and authenticated customer paths</li>
              <li>PostgreSQL-backed product and operational foundations</li>
              <li>Production deployment across managed frontend and VPS infrastructure</li>
            </ul>
            <a className="button-link" href="https://modastitch.com" target="_blank" rel="noreferrer">
              Experience ModaStitch <ArrowUpRight aria-hidden="true" />
            </a>
          </SectionReveal>
        </div>
      </section>

      <section className="next-case">
        <Link href="/work/chatsaver" className="shell next-case__link">
          <span>Next case study · Private client</span>
          <strong>ChatSaver</strong>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
