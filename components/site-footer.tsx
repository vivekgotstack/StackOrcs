import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { BrandMark } from "./brand-mark";
import { NewsletterPanel } from "./newsletter-panel";

const columns = [
  {
    title: "Explore",
    links: [
      ["/services", "Services"],
      ["/approach", "Approach"],
      ["/insights", "Insights"],
      ["/about", "Company"],
      ["/contact", "Contact"],
    ],
  },
  {
    title: "Trust",
    links: [
      ["/security", "Security"],
      ["/accessibility", "Accessibility"],
      ["/privacy", "Privacy"],
      ["/terms", "Terms"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <NewsletterPanel />
        <div className="footer-main">
          <div className="footer-brand">
            <BrandMark />
            <p>
              Strategy, product, cloud, and operations—engineered as one
              connected system.
            </p>
            <div className="footer-social-links">
              <a
                className="social-link"
                href="https://www.linkedin.com/company/stackorcs/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn company <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/groups/39390005/"
                target="_blank"
                rel="noreferrer"
              >
                StackOrcs Group <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
          {columns.map((column) => (
            <div className="footer-column" key={column.title}>
              <p className="footer-label">{column.title}</p>
              {column.links.map(([href, label]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
          <div className="footer-cta">
            <p className="footer-label">New business</p>
            <h2>Have an ambitious system in mind?</h2>
            <Link className="text-link" href="/contact">
              Build with StackOrcs <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} StackOrcs.</span>
          <span>Designed for momentum.</span>
          <Link href="/cookies">Cookie notice</Link>
        </div>
      </div>
    </footer>
  );
}
