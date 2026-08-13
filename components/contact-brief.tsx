"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, SpinnerGap, Warning } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";

type Status = "idle" | "sending" | "success" | "error";

const serviceOptions = [
  "Product engineering",
  "Experience & design systems",
  "Cloud & platform engineering",
  "Applied AI & automation",
  "Monitoring & digital operations",
  "Security engineering",
  "Not sure yet",
];

const timelineOptions = [
  "As soon as possible",
  "Within 1–3 months",
  "Within 3–6 months",
  "Exploring for later",
];

export function ContactBrief() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Delivery failed.");
      form.reset();
      setStatus("success");
      setMessage("Your project signal is with StackOrcs. A branded confirmation is on its way.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Delivery failed. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__head">
        <span>PROJECT SIGNAL / SECURE DELIVERY</span>
        <i />
      </div>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="field-row">
        <label className="text-field">
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" maxLength={100} required />
        </label>
        <label className="text-field">
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
      </div>
      <div className="field-row field-row--single">
        <label className="text-field">
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" maxLength={140} />
        </label>
      </div>
      <fieldset className="contact-choice contact-choice--services">
        <legend>What do you need?</legend>
        <div className="contact-choice__grid">
          {serviceOptions.map((option, index) => (
            <label className="contact-choice__option" key={option}>
              <input name="service" type="radio" value={option} />
              <span>0{index + 1}</span>
              <strong>{option}</strong>
              <Check weight="bold" aria-hidden="true" />
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="contact-choice contact-choice--timeline">
        <legend>Ideal timeline</legend>
        <div className="contact-choice__grid">
          {timelineOptions.map((option, index) => (
            <label className="contact-choice__option" key={option}>
              <input name="timeline" type="radio" value={option} />
              <span>0{index + 1}</span>
              <strong>{option}</strong>
              <Check weight="bold" aria-hidden="true" />
            </label>
          ))}
        </div>
      </fieldset>
      <label className="text-field text-field--challenge">
        <span>Tell us about the challenge</span>
        <textarea
          name="challenge"
          rows={6}
          minLength={20}
          maxLength={4000}
          placeholder="Context, goals, constraints, or the messy version—anything useful."
          required
        />
      </label>
      <div className="contact-form__actions">
        <button className="button-link" type="submit" disabled={status === "sending"}>
          {status === "sending" ? (
            <>Sending securely <SpinnerGap className="spin" aria-hidden="true" /></>
          ) : (
            <>Send project brief <ArrowUpRight aria-hidden="true" /></>
          )}
        </button>
        <p>
          Submitted details are used only to respond to your inquiry. No mailing-list
          enrollment is bundled into this form.
        </p>
      </div>
      <AnimatePresence mode="wait">
        {status === "success" || status === "error" ? (
          <motion.div
            key={status}
            className={"form-notice form-notice--" + status}
            initial={{ clipPath: "inset(100% 0 0 0)", y: 12 }}
            animate={{ clipPath: "inset(0 0 0 0)", y: 0 }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            role="status"
          >
            {status === "success" ? <Check weight="bold" /> : <Warning weight="bold" />}
            <span>{message}</span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
