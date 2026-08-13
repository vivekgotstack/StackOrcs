"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { X } from "@phosphor-icons/react";

const storageKey = "stackorcs-cookie-choice-v1";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!window.localStorage.getItem(storageKey));
  }, []);

  const dismiss = () => {
    window.localStorage.setItem(storageKey, "essential-only");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          className="cookie-notice"
          initial={{ y: 120, rotate: 1.5 }}
          animate={{ y: 0, rotate: 0 }}
          exit={{ y: 120, rotate: -1.5 }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          aria-label="Cookie notice"
        >
          <button aria-label="Close cookie notice" onClick={dismiss}>
            <X />
          </button>
          <p className="eyebrow">Privacy, by default</p>
          <p>
            This site uses only essential storage for your cookie choice. No
            advertising trackers are active.
          </p>
          <div>
            <button className="button button--small" onClick={dismiss}>
              Continue
            </button>
            <Link href="/cookies">Read notice</Link>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
