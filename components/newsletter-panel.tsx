"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, SpinnerGap } from "@phosphor-icons/react";

export function NewsletterPanel() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Subscription failed.");
      form.reset();
      setStatus("success");
      setMessage(
        result.existing
          ? "You are already on the Field Notes list."
          : "You are in. Check your inbox for the welcome note.",
      );
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  }

  return (
    <section className="newsletter-panel" aria-labelledby="newsletter-title">
      <div className="newsletter-panel__signal" aria-hidden="true">
        <i /><i /><i />
      </div>
      <div>
        <p className="footer-label">StackOrcs Field Notes</p>
        <h2 id="newsletter-title">Useful signal for digital leaders.</h2>
        <p>
          Concise perspectives on engineering, AI, cloud, security, and operating
          modern digital systems. Published when there is something worth saying.
        </p>
      </div>
      <form onSubmit={subscribe}>
        <label>
          <span className="sr-only">First name</span>
          <input name="firstName" type="text" autoComplete="given-name" placeholder="First name" maxLength={80} />
        </label>
        <label>
          <span className="sr-only">Work email</span>
          <input name="email" type="email" autoComplete="email" placeholder="Work email" maxLength={254} required />
        </label>
        <label className="honeypot" aria-hidden="true">
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
        <button type="submit" disabled={status === "sending"} aria-label="Subscribe to Field Notes">
          {status === "sending" ? <SpinnerGap className="spin" /> : status === "success" ? <Check /> : <ArrowRight />}
        </button>
        <p className={"newsletter-status newsletter-status--" + status} role="status">
          {message || "No spam. Unsubscribe in one click."}
        </p>
      </form>
    </section>
  );
}
