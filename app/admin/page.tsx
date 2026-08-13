import type { Metadata } from "next";
import { AdminPublisher } from "@/components/admin-publisher";

export const metadata: Metadata = {
  title: "Release Desk",
  robots: { index: false, follow: false, noarchive: true },
};

export default function AdminPage() {
  return (
    <main id="main-content" className="admin-page">
      <div className="shell admin-grid">
        <div className="admin-intro">
          <p className="kicker kicker--light">Private operations</p>
          <h1>Field Notes<br /><em>release desk.</em></h1>
          <p>
            Turn a published StackOrcs article or company update into a branded,
            unsubscribe-safe broadcast. Draft first by default; send immediately
            only when the content is final.
          </p>
          <div className="admin-controls">
            <span>Protected API key</span>
            <span>Segment-scoped audience</span>
            <span>One-click unsubscribe</span>
          </div>
        </div>
        <AdminPublisher />
      </div>
    </main>
  );
}
