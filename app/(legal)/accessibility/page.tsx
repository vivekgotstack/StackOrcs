import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "The StackOrcs commitment to an accessible and inclusive web experience.",
};

export default function AccessibilityPage() {
  return (
    <LegalDocument
      eyebrow="Trust center"
      title="Accessibility statement"
      summary="StackOrcs aims to make this website usable by as many people as possible, across devices, input methods, and assistive technologies."
      sections={[
        {
          title: "Our target",
          content: (
            <p>
              The site is designed with WCAG 2.2 Level AA principles in mind,
              including keyboard access, semantic structure, visible focus,
              readable contrast, responsive layouts, and reduced-motion support.
            </p>
          ),
        },
        {
          title: "Supported interaction",
          content: (
            <ul>
              <li>Navigate core content and controls with a keyboard.</li>
              <li>Skip repeated navigation and move directly to content.</li>
              <li>Use zoom and responsive reflow on smaller screens.</li>
              <li>Reduce non-essential motion through system preferences.</li>
              <li>Understand forms through persistent labels and clear states.</li>
            </ul>
          ),
        },
        {
          title: "Known limitations",
          content: (
            <p>
              Third-party destinations, including LinkedIn, are outside
              StackOrcs&apos; control. The supplied brand image contains the logo
              on a white field, which is intentionally presented as a bounded
              brand tile for clarity.
            </p>
          ),
        },
        {
          title: "Continuous improvement",
          content: (
            <p>
              Accessibility is an ongoing practice. The site should be reviewed
              when content, components, browsers, or assistive technologies
              change, and issues should be prioritized according to user impact.
            </p>
          ),
        },
        {
          title: "Feedback",
          content: (
            <p>
              If part of the site is difficult to use, contact StackOrcs with
              the page, device, browser, assistive technology if relevant, and
              the result you were trying to achieve.
            </p>
          ),
        },
      ]}
    />
  );
}
