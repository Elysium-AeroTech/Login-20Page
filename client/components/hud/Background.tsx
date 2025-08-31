import React from "react";

export function HudBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 hud-grid" />
      <div className="absolute inset-0 hud-scanlines" />
      <div className="absolute inset-0 hud-vignette" />
    </div>
  );
}

export default HudBackground;
