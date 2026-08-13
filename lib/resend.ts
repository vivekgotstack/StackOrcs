import { Resend } from "resend";

const DEFAULT_FROM = "StackOrcs <updates@stackorcs.com>";
const DEFAULT_REPLY_TO = "hello@stackorcs.com";
const DEFAULT_NEWSLETTER_SEGMENT = "StackOrcs Field Notes";

let newsletterSegmentPromise: Promise<string> | undefined;

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Email service is not configured.");
  return new Resend(apiKey);
}

export function getEmailConfig() {
  const from = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM;
  const replyTo = process.env.RESEND_REPLY_TO || DEFAULT_REPLY_TO;
  const recipient = process.env.CONTACT_RECIPIENT || replyTo;

  return { from, replyTo, recipient };
}

async function ensureNewsletterSegment(resend: Resend) {
  const listed = await resend.segments.list();
  if (listed.error) throw new Error(listed.error.message);

  const existing = listed.data?.data.find(
    (segment) => segment.name === DEFAULT_NEWSLETTER_SEGMENT,
  );
  if (existing) return existing.id;

  const created = await resend.segments.create({ name: DEFAULT_NEWSLETTER_SEGMENT });
  if (created.error || !created.data?.id) {
    throw new Error(created.error?.message || "Newsletter segment could not be created.");
  }

  return created.data.id;
}

export function getNewsletterSegmentId(resend: Resend): Promise<string> {
  const configured = process.env.RESEND_NEWSLETTER_SEGMENT_ID;
  if (configured) return Promise.resolve(configured);

  if (!newsletterSegmentPromise) {
    newsletterSegmentPromise = ensureNewsletterSegment(resend).catch((error) => {
      newsletterSegmentPromise = undefined;
      throw error;
    });
  }

  return newsletterSegmentPromise;
}
