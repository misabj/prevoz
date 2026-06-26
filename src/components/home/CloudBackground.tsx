"use client";

export function CloudBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-sky-50">
      {/* Cloud video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
        poster="/images/hero/road-1.jpg"
      >
        <source src="/videos/clouds.mp4" type="video/mp4" />
      </video>

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/70 to-white/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
    </div>
  );
}
