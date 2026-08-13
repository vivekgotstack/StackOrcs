"use client";

import { useEffect, useRef } from "react";

export function AmbientVideo({
  className,
  src,
  poster,
  label,
  preload = "metadata",
}: {
  className?: string;
  src: string;
  poster: string;
  label: string;
  preload?: "none" | "metadata" | "auto";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!video) return;

    const syncPlayback = () => {
      if (motionPreference.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      void video.play().catch(() => {
        // The poster remains visible when a browser declines autoplay.
      });
    };

    syncPlayback();
    motionPreference.addEventListener("change", syncPlayback);

    return () => motionPreference.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      poster={poster}
      controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
