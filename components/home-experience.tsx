import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PageEnding } from "./page-ending";

const pageLinks = [
  {
    number: "01",
    href: "/services",
    title: "Services",
    description:
      "Product engineering, cloud systems, applied AI, messaging, operations, and security delivery.",
  },
  {
    number: "02",
    href: "/approach",
    title: "Approach",
    description:
      "How StackOrcs frames the problem, shapes the system, ships safely, and keeps it moving.",
  },
  {
    number: "03",
    href: "/insights",
    title: "Insights",
    description:
      "Field notes on engineering, AI, cloud, security, observability, and practical delivery.",
  },
  {
    number: "04",
    href: "/about",
    title: "Company",
    description:
      "The operating principles, name, network, and long-term perspective behind StackOrcs.",
  },
  {
    number: "05",
    href: "/contact",
    title: "Start a project",
    description:
      "Share the ambition, constraints, timing, and context. We will respond with a clear next step.",
  },
];

const trustLinks = [
  ["Security", "/security"],
  ["Accessibility", "/accessibility"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
];

export function HomeExperience() {
  return (
    <main id="main-content" className="gateway-home">
      <section className="gateway-hero">
        <video
          className="gateway-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/stackorcs-brand-hero-poster.jpg"
          controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/stackorcs-brand-hero.mp4" type="video/mp4" />
        </video>
        <div className="shell gateway-hero__grid">
          <div className="gateway-hero__copy">
            <p className="gateway-availability">
              <span /> Engineering partner for ambitious teams
            </p>
            <h1>
              We build digital systems
              <em>that move business.</em>
            </h1>
            <p className="gateway-hero__lede">
              StackOrcs connects strategy, product engineering, cloud, AI,
              security, and operations into one accountable delivery system.
            </p>
            <div className="gateway-actions">
              <Link className="gateway-primary" href="/contact">
                Start a conversation
                <span>
                  <ArrowUpRight weight="bold" aria-hidden="true" />
                </span>
              </Link>
              <Link className="gateway-secondary" href="/services">
                Explore services <ArrowDown aria-hidden="true" />
              </Link>
            </div>
            <div className="gateway-signals" aria-label="Delivery principles">
              <span>Remote-first</span>
              <span>Secure by design</span>
              <span>Performance-minded</span>
            </div>
          </div>
        </div>
      </section>

      <section className="gateway-directory">
        <div className="shell">
          <div className="gateway-directory__heading">
            <p className="kicker">Navigate StackOrcs</p>
            <div>
              <h2>One company. Clear routes.</h2>
              <p>
                Go directly to the capability, operating model, thinking, or
                conversation you need.
              </p>
            </div>
          </div>

          <nav className="gateway-links" aria-label="Explore StackOrcs">
            {pageLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </nav>

          <div className="gateway-trust">
            <div>
              <span>Trust center</span>
              <strong>Standards, safeguards, and clear commitments.</strong>
            </div>
            <nav aria-label="Trust center">
              {trustLinks.map(([label, href]) => (
                <Link href={href} key={href}>
                  {label} <ArrowUpRight aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <PageEnding
        eyebrow="A serious system starts with a clear conversation"
        title="Bring us the ambition."
        description="Tell us what must change, what cannot fail, and where momentum is being lost. We will turn it into a practical delivery path."
        action="Start a project"
      />
    </main>
  );
}
