import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "Cookie and local storage information for the StackOrcs website.",
};

export default function CookiesPage() {
  return (
    <LegalDocument
      eyebrow="Trust center"
      title="Cookie notice"
      summary="A concise explanation of the browser storage used by the current StackOrcs website."
      sections={[
        {
          title: "What browser storage is",
          content: (
            <p>
              Cookies and local storage allow a website to remember small pieces
              of information in your browser. Some are necessary for a service
              to work; others support analytics, personalization, or advertising.
            </p>
          ),
        },
        {
          title: "What this site uses",
          content: (
            <>
              <p>
                The current site stores one preference named
                <code> stackorcs-cookie-choice-v1</code>. It records that you
                dismissed the cookie notice so the notice does not appear on
                every visit.
              </p>
              <div className="legal-table">
                <span>Storage</span>
                <span>Purpose</span>
                <span>Duration</span>
                <strong>stackorcs-cookie-choice-v1</strong>
                <span>Essential preference</span>
                <span>Until browser data is cleared</span>
              </div>
            </>
          ),
        },
        {
          title: "Analytics and advertising",
          content: (
            <p>
              No advertising, cross-site tracking, or third-party analytics
              cookies are intentionally set by the current site. This notice
              will be updated before those technologies are introduced.
            </p>
          ),
        },
        {
          title: "Your control",
          content: (
            <p>
              You can clear local storage through your browser settings. Doing
              so resets the preference and the cookie notice may appear again.
              Blocking essential storage does not prevent you from reading the
              site.
            </p>
          ),
        },
        {
          title: "Third-party destinations",
          content: (
            <p>
              Following a link to LinkedIn or another third-party service may
              allow that service to set its own cookies. Those are governed by
              the third party&apos;s notices and controls.
            </p>
          ),
        },
      ]}
    />
  );
}
