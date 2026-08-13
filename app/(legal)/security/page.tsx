import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Security",
  description:
    "The security principles used for the StackOrcs website and delivery approach.",
};

export default function SecurityPage() {
  return (
    <LegalDocument
      eyebrow="Trust center"
      title="Security at StackOrcs"
      summary="Security is treated as an engineering property: designed into architecture, delivery, and operations from the start."
      sections={[
        {
          title: "Secure-by-design principles",
          content: (
            <ul>
              <li>Minimize data collection and system exposure.</li>
              <li>Use least privilege for people, services, and automation.</li>
              <li>Keep dependencies and platforms current and supported.</li>
              <li>Make important activity observable and reviewable.</li>
              <li>Plan for failure, recovery, and responsible disclosure.</li>
            </ul>
          ),
        },
        {
          title: "Website posture",
          content: (
            <p>
              The public site minimizes backend surface area. Inquiry and
              newsletter routes validate input, restrict same-origin requests,
              apply rate limits, and keep provider credentials server-side. The
              admin broadcast route requires a timing-safe secret comparison.
              No visitor account or advertising tracker is required.
            </p>
          ),
        },
        {
          title: "Delivery practices",
          content: (
            <p>
              Client delivery practices are tailored to system risk and may
              include threat modeling, protected branches, code review,
              dependency controls, secret management, automated testing,
              environment separation, logging, and incident runbooks.
            </p>
          ),
        },
        {
          title: "Client responsibility",
          content: (
            <p>
              Security is shared. Exact responsibilities, controls, access, and
              response procedures should be defined for each engagement and
              reflected in the relevant contract and architecture.
            </p>
          ),
        },
        {
          title: "Report a concern",
          content: (
            <p>
              If you believe you have found a security issue, contact StackOrcs
              privately with enough detail to reproduce and evaluate it. Do not
              access data that is not yours, degrade service, or publicly
              disclose an unresolved issue.
            </p>
          ),
        },
        {
          title: "No certification claim",
          content: (
            <p>
              This page describes principles and intended practices. It does not
              claim a certification, audit result, or compliance status unless
              that is separately stated in a current, verifiable document.
            </p>
          ),
        },
      ]}
    />
  );
}
