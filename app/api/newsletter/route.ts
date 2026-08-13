import { NextResponse } from "next/server";
import { newsletterWelcomeEmail } from "@/lib/email-templates";
import {
  cleanText,
  clientAddress,
  isAllowedOrigin,
  rateLimit,
  validEmail,
} from "@/lib/request-guard";
import {
  getEmailConfig,
  getNewsletterSegmentId,
  getResend,
} from "@/lib/resend";

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ message: "Invalid request origin." }, { status: 403 });
  }
  if (!rateLimit(`newsletter:${clientAddress(request)}`, 5, 10 * 60_000)) {
    return NextResponse.json({ message: "Please wait before trying again." }, { status: 429 });
  }
  try {
    const body = await request.json();
    if (cleanText(body.website, 200)) return NextResponse.json({ ok: true });
    const email = cleanText(body.email, 254).toLowerCase();
    const firstName = cleanText(body.firstName, 80);
    if (!validEmail(email)) {
      return NextResponse.json({ message: "Enter a valid work email." }, { status: 400 });
    }
    const resend = getResend();
    const segmentId = await getNewsletterSegmentId(resend);
    const { from, replyTo } = getEmailConfig();
    const created = await resend.contacts.create({
      email,
      firstName: firstName || undefined,
      unsubscribed: false,
      segments: [{ id: segmentId }],
    });
    if (created.error) {
      const added = await resend.contacts.segments.add({ email, segmentId });
      if (added.error) throw new Error(added.error.message);
      return NextResponse.json({ ok: true, existing: true });
    }
    const welcome = await resend.emails.send({
      from,
      to: [email],
      replyTo,
      subject: "Welcome to StackOrcs Field Notes",
      html: newsletterWelcomeEmail(firstName),
    });
    if (welcome.error) throw new Error(welcome.error.message);
    return NextResponse.json({ ok: true, existing: false });
  } catch (error) {
    console.error("Newsletter subscription failed", error);
    return NextResponse.json(
      { message: "Subscription is temporarily unavailable. Please try again shortly." },
      { status: 503 },
    );
  }
}
