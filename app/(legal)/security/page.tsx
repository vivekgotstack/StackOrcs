import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Security",
  description:
    "StackOrcs security governance, engineering controls, incident response, and vulnerability disclosure policy.",
};

export default function SecurityPage() {
  return (
    <LegalDocument
      eyebrow="Security policy"
      title="Security at StackOrcs"
      summary="This policy defines the safeguards StackOrcs applies to its website, internal operations, and client delivery. Security ownership, evidence, and response obligations are established before systems enter production."
      sections={[
        {
          title: "Governance and accountability",
          content: (
            <>
              <p>
                StackOrcs assigns an accountable owner for security decisions,
                access, risk acceptance, and incident coordination. Controls are
                selected against the sensitivity of the data, the exposure of
                the system, and the operational consequence of failure.
              </p>
              <ul>
                <li>
                  Access is granted on least-privilege and need-to-know terms.
                </li>
                <li>
                  Production credentials are kept out of client code and source
                  control.
                </li>
                <li>
                  Material risks, exceptions, and ownership decisions are
                  documented and reviewed.
                </li>
                <li>
                  Confidential information is used only for the purpose for which
                  it was provided.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Secure delivery lifecycle",
          content: (
            <>
              <p>
                Security requirements enter the delivery plan with functional
                requirements. StackOrcs uses architecture and threat review,
                peer-reviewed change control, protected delivery paths,
                dependency and secret controls, automated verification, and
                separated environments where the system risk requires them.
              </p>
              <p>
                Releases must be attributable to an approved change. Critical
                findings block release until resolved or formally accepted by an
                authorized owner with a recorded remediation plan.
              </p>
            </>
          ),
        },
        {
          title: "Platform and data safeguards",
          content: (
            <>
              <p>
                The StackOrcs website limits collection to information needed to
                answer inquiries, deliver requested publications, and protect the
                service. Transport is encrypted, provider credentials remain
                server-side, public inputs are validated, and administrative
                actions require a separate secret-protected route.
              </p>
              <p>
                Hosting, email delivery, logging, recovery, and retention
                controls are selected and configured according to the data they
                handle. StackOrcs does not require visitor accounts or deploy
                advertising trackers on this website.
              </p>
            </>
          ),
        },
        {
          title: "Incident response",
          content: (
            <>
              <p>
                Suspected incidents are recorded, triaged, contained, and
                investigated under an assigned incident owner. Response includes
                preservation of relevant evidence, removal of unauthorized
                access, safe restoration, validation of recovery, and a review of
                corrective actions.
              </p>
              <p>
                Affected clients, providers, and authorities are notified when a
                contract or applicable law requires it. Notices describe the
                known impact, containment status, and actions expected from the
                recipient without compromising the investigation.
              </p>
            </>
          ),
        },
        {
          title: "Vulnerability disclosure",
          content: (
            <>
              <p>
                Report a suspected vulnerability privately through the contact
                page with the affected URL or asset, reproduction steps, observed
                impact, and supporting evidence. Use the subject
                “Security report.” StackOrcs targets acknowledgement within three
                business days and an initial severity assessment within seven
                business days.
              </p>
              <p>
                Good-faith research must avoid privacy violations, persistence,
                data destruction, social engineering, denial of service, and
                access beyond what is necessary to demonstrate the issue. Allow
                reasonable time for remediation before public disclosure. A
                report does not create an entitlement to payment unless a bounty
                has been agreed in writing.
              </p>
            </>
          ),
        },
        {
          title: "Client and supplier controls",
          content: (
            <p>
              Each engagement records security responsibilities, approved access,
              data handling, environments, release authority, incident contacts,
              and exit procedures. Suppliers that handle protected information
              are assessed in proportion to risk and receive only the access
              required to perform their contracted function. Client access and
              retained material are removed or returned at the end of an
              engagement as the governing agreement requires.
            </p>
          ),
        },
        {
          title: "Assurance and evidence",
          content: (
            <p>
              StackOrcs provides security documentation, architecture records,
              control evidence, and response commitments appropriate to the
              engagement and subject to confidentiality. Certifications, audit
              results, and compliance status are represented only when they are
              current, applicable to the stated scope, and independently
              verifiable.
            </p>
          ),
        },
      ]}
    />
  );
}
