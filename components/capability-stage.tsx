"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Brain,
  BracketsCurly,
  Cloud,
  Pulse,
  ShieldCheck,
} from "@phosphor-icons/react";

const capabilities = [
  {
    id: "product",
    index: "01",
    title: "Digital products",
    short: "Web, mobile & platforms",
    body: "We turn complex workflows into clear, high-performance digital products with dependable foundations and a user experience people understand immediately.",
    icon: BracketsCurly,
    tags: ["Product strategy", "UX systems", "Next.js", "APIs"],
  },
  {
    id: "cloud",
    index: "02",
    title: "Cloud systems",
    short: "Architecture that scales",
    body: "Cloud foundations, migrations, APIs, and delivery pipelines designed for speed without giving away reliability, security, or operational control.",
    icon: Cloud,
    tags: ["Architecture", "DevOps", "Platform engineering", "FinOps"],
  },
  {
    id: "ai",
    index: "03",
    title: "Applied AI",
    short: "Automation with purpose",
    body: "Practical AI systems that augment real work: intelligent search, workflow automation, copilots, and secure orchestration around your data.",
    icon: Brain,
    tags: ["AI strategy", "RAG", "Agents", "Automation"],
  },
  {
    id: "operations",
    index: "04",
    title: "Digital operations",
    short: "Observable by design",
    body: "Monitoring, incident readiness, messaging systems, performance budgets, and ongoing engineering that keep critical experiences healthy.",
    icon: Pulse,
    tags: ["Observability", "SRE", "Messaging", "Support"],
  },
  {
    id: "security",
    index: "05",
    title: "Security engineering",
    short: "Trust in every layer",
    body: "Security is built into architecture, delivery, and operations through least privilege, threat-aware design, secure defaults, and audit-ready practices.",
    icon: ShieldCheck,
    tags: ["Threat modeling", "IAM", "AppSec", "Governance"],
  },
];

export function CapabilityStage() {
  const [active, setActive] = useState(capabilities[0]);
  const ActiveIcon = active.icon;

  return (
    <div className="capability-stage">
      <div className="capability-tabs" role="tablist" aria-label="Capabilities">
        {capabilities.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active.id === item.id}
            onClick={() => setActive(item)}
          >
            <span>{item.index}</span>
            <strong>{item.title}</strong>
            <small>{item.short}</small>
            <ArrowRight aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="capability-display" role="tabpanel">
        <div className="display-grid" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className="capability-display__content"
            initial={{ clipPath: "inset(0 100% 0 0)", x: 32 }}
            animate={{ clipPath: "inset(0 0% 0 0)", x: 0 }}
            exit={{ clipPath: "inset(0 0 0 100%)", x: -18 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="capability-icon">
              <ActiveIcon weight="duotone" aria-hidden="true" />
            </span>
            <p className="eyebrow">Capability / {active.index}</p>
            <h3>{active.title}</h3>
            <p className="capability-description">{active.body}</p>
            <div className="tag-list">
              {active.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="signal-track" aria-hidden="true">
          <motion.span
            animate={{ x: ["0%", "900%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
