"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { BrandMark } from "./brand-mark";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={"site-header " + (scrolled ? "site-header--scrolled" : "")}>
      <div className="site-header__inner shell">
        <BrandMark priority />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : ""}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/contact">
          Start a project
          <ArrowUpRight weight="bold" aria-hidden="true" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <List />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile navigation"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ x: -28 }}
                animate={{ x: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <Link href={item.href}>
                  <span>0{index + 1}</span>
                  {item.label}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
