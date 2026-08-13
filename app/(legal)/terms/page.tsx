import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the StackOrcs website.",
};

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Trust center"
      title="Website terms"
      summary="These terms set the ground rules for using this website. A separate written agreement governs any client engagement."
      sections={[
        {
          title: "Using this website",
          content: (
            <p>
              You may use the website for lawful informational and business
              inquiry purposes. You must not interfere with its security,
              availability, or operation, or attempt unauthorized access.
            </p>
          ),
        },
        {
          title: "Information, not advice",
          content: (
            <p>
              Site content is general information and is not legal, financial,
              security, or other regulated professional advice. Capabilities and
              approaches described here do not guarantee a specific outcome.
            </p>
          ),
        },
        {
          title: "Intellectual property",
          content: (
            <p>
              The StackOrcs name, bear mark, site design, copy, and original
              materials are protected by applicable intellectual property laws.
              No rights are granted except the limited right to access and use
              the site under these terms.
            </p>
          ),
        },
        {
          title: "Third-party links",
          content: (
            <p>
              Links to services such as LinkedIn are provided for convenience.
              StackOrcs does not control those services and is not responsible
              for their content, availability, or data practices.
            </p>
          ),
        },
        {
          title: "Availability and liability",
          content: (
            <p>
              The website is provided on an “as available” basis. To the extent
              permitted by law, StackOrcs disclaims implied warranties and is
              not liable for indirect or consequential loss arising solely from
              use of the website.
            </p>
          ),
        },
        {
          title: "Client work",
          content: (
            <p>
              Statements made on this site are not an offer or binding
              commitment. Scope, deliverables, fees, intellectual property,
              confidentiality, warranties, and liability for client work are
              agreed separately in writing.
            </p>
          ),
        },
        {
          title: "Changes and applicable law",
          content: (
            <p>
              These terms may be revised from time to time. Mandatory rights
              under applicable local law remain unaffected. Governing law and
              venue for client engagements will be stated in the relevant
              written agreement.
            </p>
          ),
        },
      ]}
    />
  );
}
