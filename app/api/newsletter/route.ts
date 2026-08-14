import { NextResponse } from "next/server";
import {
  newsletterOwnerEmail,
  newsletterWelcomeEmail,
} from "@/lib/email-templates";
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
    const { from, replyTo, recipient } = getEmailConfig();
    const [ownerDelivery, welcomeDelivery] = await Promise.all([
      resend.emails.send({
        from,
        to: [recipient],
        replyTo: email,
        subject: `New Field Notes subscriber${firstName ? ` — ${firstName}` : ""}`,
        html: newsletterOwnerEmail(email, firstName),
      }),
      resend.emails.send({
        from,
        to: [email],
        replyTo,
        subject: "Welcome to StackOrcs Field Notes",
        html: newsletterWelcomeEmail(firstName),
      }),
    ]);
    if (ownerDelivery.error) throw new Error(ownerDelivery.error.message);
    if (welcomeDelivery.error) {
      console.warn("Newsletter welcome delivery skipped", welcomeDelivery.error.message);
    }

    let existing = false;
    try {
      const segmentId = await getNewsletterSegmentId(resend);
      const created = await resend.contacts.create({
        email,
        firstName: firstName || undefined,
        unsubscribed: false,
        segments: [{ id: segmentId }],
      });
      if (created.error) {
        existing = true;
        const added = await resend.contacts.segments.add({ email, segmentId });
        if (added.error) console.warn("Newsletter contact sync skipped", added.error.message);
      }
    } catch (syncError) {
      console.warn("Newsletter contact sync skipped", syncError);
    }

    return NextResponse.json({
      ok: true,
      existing,
      welcomeSent: !welcomeDelivery.error,
    });
  } catch (error) {
    console.error("Newsletter subscription failed", error);
    return NextResponse.json(
      { message: "Subscription is temporarily unavailable. Please try again shortly." },
      { status: 503 },
    );
  }
}
