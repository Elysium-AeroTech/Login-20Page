import React from "react";

export function Radar({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <svg viewBox="0 0 200 200" className="absolute inset-0">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,255,170,0.25)" />
            <stop offset="100%" stopColor="rgba(0,255,170,0)" />
          </radialGradient>
          <linearGradient id="sweep" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,255,170,0)" />
            <stop offset="10%" stopColor="rgba(0,255,170,0.8)" />
            <stop offset="60%" stopColor="rgba(0,255,170,0)" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="98" fill="url(#glow)" stroke="rgba(0,255,170,0.35)" strokeWidth="1" />
        {/* grid rings */}
        {[20, 40, 60, 80].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} stroke="rgba(0,255,170,0.25)" strokeWidth="0.5" fill="none" />
        ))}
        {/* cross lines */}
        <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(0,255,170,0.25)" strokeWidth="0.5" />
        <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(0,255,170,0.25)" strokeWidth="0.5" />
        {/* sweep */}
        <g className="origin-center animate-radar-sweep">
          <path d="M100 100 L100 0 A100 100 0 0 1 100 100 Z" fill="url(#sweep)" />
        </g>
        {/* blips */}
        {[{ x: 60, y: 40 }, { x: 150, y: 130 }, { x: 80, y: 150 }].map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="hsl(var(--hud-green))" className="animate-pulse-glow" />
        ))}
      </svg>
    </div>
  );
}

export default Radar;
