import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How StackOrcs handles information on this website.",
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Trust center"
      title="Privacy notice"
      summary="This notice explains what information the StackOrcs website handles, why it is handled, and the choices available to visitors."
      sections={[
        {
          title: "Scope",
          content: (
            <>
              <p>
                This notice applies to this website and communications initiated
                through it. It does not automatically apply to client systems or
                third-party platforms linked from the site.
              </p>
            </>
          ),
        },
        {
          title: "Information you provide",
          content: (
            <>
              <p>
                When you submit a project brief, StackOrcs processes the contact,
                company, project, and timing information you provide to respond
                to the inquiry. If you separately subscribe to Field Notes, your
                name and email address are used to manage that subscription and
                deliver publication updates.
              </p>
            </>
          ),
        },
        {
          title: "Technical information",
          content: (
            <>
              <p>
                Hosting and email delivery providers may process standard request information such
                as IP address, device and browser details, requested pages, and
                timestamps to deliver, secure, and diagnose the service.
              </p>
            </>
          ),
        },
        {
          title: "Cookies and local storage",
          content: (
            <>
              <p>
                The current site uses local storage only to remember whether you
                dismissed the cookie notice. No advertising cookies are set by
                the site. See the <a href="/cookies">cookie notice</a> for more
                detail.
              </p>
            </>
          ),
        },
        {
          title: "Sharing and retention",
          content: (
            <>
              <p>
                StackOrcs does not sell personal information. Resend processes
                inquiry and subscriber data as the email delivery provider.
                Other providers may handle limited technical data where
                necessary to host, protect, or operate the website. Retention is
                limited to operational, communication, and legal needs.
              </p>
            </>
          ),
        },
        {
          title: "Your choices",
          content: (
            <>
              <p>
                Every Field Notes broadcast includes an unsubscribe link.
                Depending on applicable law, you may also have rights to access,
                correct, delete, restrict, or object to processing of your
                personal information. Use the contact page to raise a request.
              </p>
            </>
          ),
        },
        {
          title: "Changes",
          content: (
            <>
              <p>
                This notice may be updated as the website, service providers, or
                legal requirements change. The update date above indicates the
                latest published version.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
