import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "The StackOrcs accessibility standard, testing practice, and remediation process.",
};

export default function AccessibilityPage() {
  return (
    <LegalDocument
      eyebrow="Accessibility statement"
      title="Access without barriers"
      summary="StackOrcs has adopted WCAG 2.2 Level AA as the accessibility standard for this website. Accessibility is treated as a product requirement across design, content, engineering, and ongoing maintenance."
      sections={[
        {
          title: "Standard and scope",
          content: (
            <>
              <p>
                This statement covers the public pages, navigation, forms, and
                first-party content published on this website. The governing
                technical reference is the Web Content Accessibility Guidelines
                2.2, Level A and Level AA success criteria.
              </p>
              <p>
                Adoption of this standard is an operating commitment. It is not
                a claim that every page has completed an independent conformance
                audit. Any verified barrier within StackOrcs&apos; control enters
                the remediation process described below.
              </p>
            </>
          ),
        },
        {
          title: "Experience requirements",
          content: (
            <ul>
              <li>
                Core content and controls must be available without a mouse.
              </li>
              <li>
                Pages must expose meaningful headings, landmarks, labels, names,
                roles, and status messages to assistive technology.
              </li>
              <li>
                Focus must remain visible and must not be obscured by persistent
                interface elements.
              </li>
              <li>
                Text, controls, and essential graphics must maintain readable
                contrast and support zoom and small-screen reflow.
              </li>
              <li>
                Non-essential motion must respect reduced-motion preferences,
                and information must not depend on colour alone.
              </li>
              <li>
                Forms must provide persistent labels, understandable
                instructions, and actionable error feedback.
              </li>
            </ul>
          ),
        },
        {
          title: "Testing and release control",
          content: (
            <>
              <p>
                Accessibility review is part of component and page delivery.
                Checks combine automated analysis with keyboard, zoom, responsive
                reflow, focus-order, contrast, and screen-reader-oriented manual
                review of critical journeys.
              </p>
              <p>
                Material accessibility regressions are release defects. New
                components must preserve semantic structure and interaction
                behaviour before they are reused across the site.
              </p>
            </>
          ),
        },
        {
          title: "Compatible use",
          content: (
            <p>
              The website is designed for current versions of major standards-
              based browsers and common platform assistive technologies. Users
              should be able to navigate with a keyboard, enlarge content,
              change orientation, use responsive layouts, and request reduced
              motion without losing essential information or functionality.
            </p>
          ),
        },
        {
          title: "Third-party services",
          content: (
            <p>
              Links and embedded destinations operated by third parties, such as
              LinkedIn, are governed by those providers once a visitor leaves
              this website. StackOrcs selects and links to external services with
              accessibility in mind, identifies external destinations where
              practical, and provides an alternative contact route when a
              third-party barrier prevents completion of a StackOrcs request.
            </p>
          ),
        },
        {
          title: "Report a barrier",
          content: (
            <>
              <p>
                Report an accessibility issue through the contact page. Include
                the page or component, the task you were attempting, your device
                and browser, and any assistive technology used. Do not include
                sensitive personal information that is not needed to investigate
                the issue.
              </p>
              <p>
                StackOrcs targets acknowledgement within three business days and
                an initial assessment within ten business days. Confirmed issues
                are prioritized by user impact, reach, and availability of an
                accessible alternative. On request, StackOrcs will provide the
                relevant information or service through a reasonable alternative
                format while remediation is underway.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
