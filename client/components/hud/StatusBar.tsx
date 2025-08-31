import React from "react";
import { ShieldAlert, Wifi, Lock, Satellite } from "lucide-react";

export default function StatusBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20 backdrop-blur bg-black/30 border-b border-hud-grid">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Satellite className="size-5 text-[hsl(var(--hud-cyan))]" />
          <span className="font-display tracking-widest text-sm text-[hsl(var(--hud-cyan))]">AEGIS LAUNCH NETWORK</span>
          <span className="ml-3 text-xs text-muted-foreground">NODE LC-04</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Wifi className="size-4 text-[hsl(var(--hud-green))]" /> LINK SECURE
          </div>
          <div className="flex items-center gap-1">
            <Lock className="size-4 text-[hsl(var(--hud-green))]" /> AES-256
          </div>
          <div className="flex items-center gap-1 text-[hsl(var(--hud-amber))]">
            <ShieldAlert className="size-4" /> DEFCON: 3
          </div>
        </div>
      </div>
    </header>
  );
}
