"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle,
  CirclesThreePlus,
  Code,
  Gauge,
  GlobeHemisphereWest,
  LockKey,
  Strategy,
} from "@phosphor-icons/react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { CapabilityStage } from "./capability-stage";
import { MagneticLink } from "./magnetic-link";
import { SectionReveal } from "./section-reveal";
import { SystemOrbit } from "./system-orbit";

const disciplines = [
  {
    code: "STR",
    title: "Strategy & discovery",
    text: "Align the opportunity, users, risks, and route to value before complexity compounds.",
    icon: Strategy,
  },
  {
    code: "EXP",
    title: "Experience systems",
    text: "Accessible interfaces and design systems that remain coherent as products grow.",
    icon: CirclesThreePlus,
  },
  {
    code: "ENG",
    title: "Engineering",
    text: "Fast frontends, dependable services, integrations, data, and platform foundations.",
    icon: Code,
  },
  {
    code: "OPS",
    title: "Operate & evolve",
    text: "Observability, monitoring, incident readiness, optimization, and sustained delivery.",
    icon: Gauge,
  },
];

const principles = [
  "Business outcomes before technical theatre",
  "Performance and accessibility from the first commit",
  "Security, observability, and ownership built in",
  "Systems your team can understand and evolve",
];

export function HomeExperience() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 160]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.25], [0, -3]);

  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-lines" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="shell hero-grid">
          <motion.div
            className="hero-copy"
            style={reduceMotion ? undefined : { y: heroY, rotate: heroRotate }}
          >
            <motion.div
              className="availability"
              initial={{ x: -12, clipPath: "inset(0 4% 0 0)" }}
              animate={{ x: 0, clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span />
              Engineering partner for ambitious teams
            </motion.div>
            <h1>
              <span className="hero-line">
                <motion.span
                  initial={{ y: "6%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Digital systems,
                </motion.span>
              </span>
              <span className="hero-line hero-line--accent">
                <motion.span
                  initial={{ y: "6%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  built to move.
                </motion.span>
              </span>
            </h1>
            <motion.p
              className="hero-lede"
              initial={{ clipPath: "inset(0 0 4% 0)", y: 10 }}
              animate={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
            >
              StackOrcs turns high-stakes ideas into fast products, intelligent
              platforms, and observable operations—without the drag of a
              fragmented delivery chain.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
            >
              <MagneticLink href="/contact">Start a conversation</MagneticLink>
              <Link className="quiet-link" href="/services">
                Explore capabilities <ArrowDown aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.div
              className="hero-proof"
              initial={{ x: -24 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <div>
                <GlobeHemisphereWest weight="duotone" aria-hidden="true" />
                <span>Remote-first delivery</span>
              </div>
              <div>
                <LockKey weight="duotone" aria-hidden="true" />
                <span>Secure by design</span>
              </div>
              <div>
                <Gauge weight="duotone" aria-hidden="true" />
                <span>Performance-minded</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={{ scale: 0.84, rotate: 4 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <SystemOrbit />
          </motion.div>
        </div>
        <div className="hero-index shell" aria-hidden="true">
          <span>SO / 001</span>
          <span>STRATEGY · DESIGN · ENGINEERING · OPERATIONS</span>
        </div>
      </section>

      <div className="motion-ribbon" aria-label="StackOrcs capability highlights">
        <div>
          {[
            "PRODUCT ENGINEERING",
            "CLOUD SYSTEMS",
            "APPLIED AI",
            "OBSERVABILITY",
            "SECURE DELIVERY",
            "PRODUCT ENGINEERING",
            "CLOUD SYSTEMS",
            "APPLIED AI",
            "OBSERVABILITY",
            "SECURE DELIVERY",
          ].map((item, index) => (
            <span key={item + index}>
              {item} <i />
            </span>
          ))}
        </div>
      </div>

      <section className="intro-section section section--light">
        <div className="shell intro-grid">
          <SectionReveal>
            <p className="kicker">One connected engineering partner</p>
          </SectionReveal>
          <SectionReveal className="intro-statement" delay={0.05}>
            <h2>
              Big-firm capability.
              <br />
              <em>Zero assembly required.</em>
            </h2>
            <p>
              Strategy should inform design. Design should survive engineering.
              Engineering should make operations easier. StackOrcs brings the
              complete chain together so your product moves with intent.
            </p>
          </SectionReveal>
        </div>
        <div className="shell discipline-grid">
          {disciplines.map((item, index) => {
            const Icon = item.icon;
            return (
              <SectionReveal
                key={item.code}
                className="discipline-card"
                delay={index * 0.06}
              >
                <div className="discipline-card__top">
                  <span>{item.code}</span>
                  <Icon weight="duotone" aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="card-corner" aria-hidden="true" />
              </SectionReveal>
            );
          })}
        </div>
      </section>

      <section className="capabilities-section section section--ink">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <SectionReveal>
              <p className="kicker kicker--light">Capability system</p>
              <h2>Everything required to build, run, and evolve.</h2>
            </SectionReveal>
            <SectionReveal delay={0.08}>
              <p>
                Select a capability to inspect how StackOrcs joins product
                thinking with modern engineering and operational discipline.
              </p>
            </SectionReveal>
          </div>
          <SectionReveal delay={0.12}>
            <CapabilityStage />
          </SectionReveal>
        </div>
      </section>

      <section className="operating-section section section--warm">
        <div className="shell operating-grid">
          <div className="operating-sticky">
            <SectionReveal>
              <p className="kicker">A calmer way to build</p>
              <h2>
                Clear decisions.
                <br />
                Clean handoffs.
                <br />
                Continuous signal.
              </h2>
            </SectionReveal>
          </div>
          <div className="operating-steps">
            {[
              [
                "01",
                "Frame the right problem",
                "We turn goals, constraints, users, and technical realities into a shared delivery brief.",
              ],
              [
                "02",
                "Shape the system",
                "Experience and architecture evolve together through testable slices, not disconnected documents.",
              ],
              [
                "03",
                "Ship with confidence",
                "Small releases, automated quality checks, observability, and direct feedback keep momentum visible.",
              ],
              [
                "04",
                "Operate and improve",
                "We watch the signals that matter and evolve the product around real usage and business priorities.",
              ],
            ].map(([number, title, text]) => (
              <SectionReveal className="operating-step" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section section section--light">
        <div className="shell trust-grid">
          <SectionReveal className="trust-visual">
            <div className="trust-orbit" aria-hidden="true">
              <span className="trust-orbit__core">SO</span>
              <i />
              <i />
              <i />
              <b>SECURE</b>
              <b>FAST</b>
              <b>VISIBLE</b>
            </div>
            <div className="trust-status">
              <span>Operational posture</span>
              <strong>Built in, not bolted on</strong>
              <div>
                <i />
              </div>
            </div>
          </SectionReveal>
          <SectionReveal className="trust-copy" delay={0.08}>
            <p className="kicker">Enterprise discipline, practical delivery</p>
            <h2>Trust is a product feature.</h2>
            <p className="trust-lede">
              Performance, security, accessibility, and observability shape the
              architecture from the start. They are not an expensive clean-up
              phase.
            </p>
            <ul>
              {principles.map((principle) => (
                <li key={principle}>
                  <CheckCircle weight="fill" aria-hidden="true" />
                  {principle}
                </li>
              ))}
            </ul>
            <Link className="text-link text-link--dark" href="/security">
              Read our trust approach <ArrowUpRight aria-hidden="true" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-cta__beam" aria-hidden="true" />
        <div className="shell">
          <SectionReveal>
            <p className="kicker kicker--light">Your next system starts here</p>
            <h2>
              Bring us the ambition.
              <span>We&apos;ll engineer the momentum.</span>
            </h2>
            <div className="closing-actions">
              <MagneticLink href="/contact" className="magnetic-link--light">
                Tell us what you are building
              </MagneticLink>
              <a
                className="quiet-link quiet-link--light"
                href="https://www.linkedin.com/in/stackorcs"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
