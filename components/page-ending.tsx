import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { SectionReveal } from "./section-reveal";

export function PageEnding({
  eyebrow,
  title,
  description,
  action = "Talk with StackOrcs",
  href = "/contact",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: string;
  href?: string;
}) {
  return (
    <section className="page-cta">
      <div className="shell">
        <SectionReveal>
          <p className="kicker">{eyebrow}</p>
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
          <Link className="button-link" href={href}>
            {action} <ArrowUpRight aria-hidden="true" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
