import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Binding terms governing access to and use of the StackOrcs website.",
};

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Website terms"
      title="Terms of use"
      summary="These terms govern access to the StackOrcs website and form an agreement between each visitor and StackOrcs. Client services are governed only by a separate written agreement signed by the relevant parties."
      sections={[
        {
          title: "Acceptance and eligibility",
          content: (
            <p>
              By accessing or using this website, you confirm that you can enter
              into a binding agreement and accept these terms. If you use the
              website for an organization, you confirm that you are authorized
              to act for it. If you do not accept these terms, do not use the
              website.
            </p>
          ),
        },
        {
          title: "Permitted use",
          content: (
            <>
              <p>
                You may view the website, share links to its public pages, and
                submit genuine business or publication requests. You must not:
              </p>
              <ul>
                <li>break any applicable law or infringe another person&apos;s rights;</li>
                <li>
                  probe, bypass, disable, or interfere with security, rate limits,
                  availability, or access controls;
                </li>
                <li>
                  introduce malicious code, automate abusive requests, scrape at
                  a volume that burdens the service, or attempt unauthorized
                  access;
                </li>
                <li>
                  impersonate StackOrcs or imply endorsement, partnership, or
                  authority that has not been granted in writing; or
                </li>
                <li>
                  copy, republish, sell, or commercially exploit protected site
                  materials except as applicable law expressly permits.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "Submissions and communications",
          content: (
            <>
              <p>
                You remain responsible for information submitted through the
                website and confirm that you have the right to provide it. Do not
                send credentials, regulated records, trade secrets, or other
                sensitive data unless StackOrcs has agreed in writing to receive
                and protect it for a defined purpose.
              </p>
              <p>
                You authorize StackOrcs and its delivery providers to process a
                submission only as needed to route, evaluate, and respond to it,
                operate the requested subscription, protect the service, and
                comply with law. A submission does not create a confidential,
                fiduciary, employment, partnership, or client relationship.
              </p>
            </>
          ),
        },
        {
          title: "Intellectual property",
          content: (
            <p>
              StackOrcs and its licensors retain all rights in the StackOrcs
              name, bear mark, website design, software, copy, graphics, and
              original materials. These terms grant only a personal, limited,
              revocable, non-exclusive, non-transferable right to access the
              public website for its intended purpose. No trademark licence,
              source-code licence, ownership right, or right to create derivative
              works is granted.
            </p>
          ),
        },
        {
          title: "No offer or professional advice",
          content: (
            <p>
              Website content is general business information. It is not a
              proposal, guarantee, security assurance, or legal, financial, tax,
              compliance, or other regulated professional advice. Descriptions of
              capabilities and practices do not bind StackOrcs to a scope,
              outcome, schedule, or price. An engagement begins only when the
              parties sign a written agreement.
            </p>
          ),
        },
        {
          title: "Third-party services",
          content: (
            <p>
              External links are provided for context or convenience. Third-party
              services operate independently under their own terms and privacy
              notices. StackOrcs does not control and is not responsible for
              their content, security, availability, transactions, or data
              handling. A link does not constitute endorsement unless expressly
              stated.
            </p>
          ),
        },
        {
          title: "Availability and changes",
          content: (
            <p>
              StackOrcs may maintain, modify, suspend, restrict, or withdraw any
              part of the website without guaranteeing continuous availability.
              Access may be blocked where necessary to protect the website,
              investigate misuse, comply with law, or enforce these terms.
              Published information may be corrected or updated without notice.
            </p>
          ),
        },
        {
          title: "Warranties and liability",
          content: (
            <>
              <p>
                The website is provided “as is” and “as available.” To the
                maximum extent permitted by law, StackOrcs excludes warranties
                that are not expressly stated, including implied warranties of
                merchantability, fitness for a particular purpose,
                non-infringement, accuracy, and uninterrupted availability.
              </p>
              <p>
                To the maximum extent permitted by law, StackOrcs is not liable
                for indirect, incidental, special, exemplary, or consequential
                loss, or for loss of profit, revenue, data, goodwill, or business
                opportunity arising from website use. StackOrcs&apos; aggregate
                liability arising solely from the free public website will not
                exceed the amount you paid StackOrcs for access to it. Nothing in
                these terms excludes liability that cannot lawfully be excluded.
              </p>
            </>
          ),
        },
        {
          title: "Client engagements",
          content: (
            <p>
              Every client engagement is governed by its signed agreement,
              including scope, acceptance, fees, confidentiality, data
              protection, intellectual property, security responsibilities,
              warranties, liability, termination, and dispute terms. If that
              agreement conflicts with these website terms in relation to the
              engagement, the signed agreement controls.
            </p>
          ),
        },
        {
          title: "Governing law and enforcement",
          content: (
            <p>
              These website terms are governed by the laws of India, without
              regard to conflict-of-law principles. Courts of competent
              jurisdiction in India have jurisdiction over disputes arising
              solely from use of this website, unless mandatory law requires a
              different forum. If any provision is unenforceable, it will be
              limited to the minimum extent necessary and the remaining terms
              will continue in effect. Failure to enforce a provision is not a
              waiver.
            </p>
          ),
        },
      ]}
    />
  );
}
