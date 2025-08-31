import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import HudBackground from "@/components/hud/Background";
import CodeRain from "@/components/hud/CodeRain";
import StatusBar from "@/components/hud/StatusBar";
import { KeyRound, Fingerprint, AlertTriangle } from "lucide-react";

export default function Index() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
  }

  return (
    <div className="relative min-h-screen text-foreground">
      <div className="dark">
        <StatusBar />
        <HudBackground />

        <main className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <section className="order-2 lg:order-1">
            <h1 className="font-display text-3xl sm:text-4xl tracking-[0.18em] text-[hsl(var(--hud-green))] text-glow">
              SPECIAL LOGIN — HIGHEST OFFICIAL OF ELYSUIM
            </h1>
            <p className="mt-2 text-sm text-muted-foreground tracking-widest">
              Classified access only. All attempts are logged and audited.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div className="grid gap-2">
                <Label htmlFor="operator" className="tracking-wide text-xs text-muted-foreground">
                  OFFICIAL ID
                </Label>
                <Input
                  id="operator"
                  required
                  placeholder="ELYSUIM-XXXXX"
                  className="h-11 bg-black/40 backdrop-blur border-hud-grid text-[hsl(var(--hud-cyan))] placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="key" className="tracking-wide text-xs text-muted-foreground">
                  SECURITY PHRASE
                </Label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    id="key"
                    type="password"
                    required
                    placeholder="••••••••••••"
                    className="h-11 pl-10 bg-black/40 backdrop-blur border-hud-grid text-[hsl(var(--hud-green))] placeholder:text-muted-foreground/60"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="otp" className="tracking-wide text-xs text-muted-foreground">
                  CLEARANCE CODE
                </Label>
                <Input
                  id="otp"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  placeholder="000000"
                  className="h-11 tracking-[0.5em] text-center bg-black/40 backdrop-blur border-hud-grid text-[hsl(var(--hud-amber))] placeholder:text-muted-foreground/60"
                />
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Fingerprint className="size-4 text-[hsl(var(--hud-green))]" />
                  BIOMETRIC READY
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--hud-green))] animate-pulse" />
                  SECURE CHANNEL
                </div>
              </div>

              <div className="relative mt-2 overflow-hidden rounded-lg border border-hud-grid bg-black/30">
                <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-[rgba(0,255,170,0.15)] to-transparent animate-sweep" />
                <div className="p-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    { k: "ALERT", v: "GREEN", c: "text-[hsl(var(--hud-green))]" },
                    { k: "SECTOR", v: "LC-04" },
                    { k: "PROTOCOL", v: "OMEGA" },
                    { k: "HANDSHAKE", v: "TLS1.3" },
                    { k: "CYPHER", v: "AES-256" },
                    { k: "SATLINK", v: "OK" },
                  ].map((it) => (
                    <div key={it.k} className="text-xs">
                      <div className="text-muted-foreground">{it.k}</div>
                      <div className={`font-mono tracking-widest ${it.c ?? ""}`}>{it.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-11 flex-1 bg-[hsl(var(--hud-green))] text-black hover:bg-[hsl(var(--hud-green))]/90"
                >
                  AUTHORIZE
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  className="h-11 bg-[hsl(var(--hud-red))] hover:bg-[hsl(var(--hud-red))]/90"
                >
                  <AlertTriangle className="mr-2" /> LOCKDOWN
                </Button>
              </div>

              <div className="pt-3">
                <Button asChild className="h-11 w-full border border-hud-grid bg-transparent text-[hsl(var(--hud-cyan))] hover:bg-[hsl(var(--hud-cyan))]/10 tracking-widest">
                  <a href="/dashboard">SECONDARY AUTH — DASHBOARD</a>
                </Button>
              </div>
            </form>
          </section>

          <aside className="order-1 lg:order-2">
            <div className="relative rounded-lg border border-hud-grid bg-black/30 overflow-hidden">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-2 text-xs text-muted-foreground/80 border-b border-hud-grid bg-black/40 backdrop-blur">
                <span className="font-display tracking-widest text-[hsl(var(--hud-cyan))]">REALTIME CIPHER STREAM</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[hsl(var(--hud-green))] animate-pulse"/> LIVE</span>
              </div>
              <div className="h-[360px] sm:h-[420px]">
                <CodeRain className="w-full h-full" density={14} />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-muted-foreground">
              <div className="rounded-lg border border-hud-grid bg-black/30 p-4">
                <div className="font-display tracking-widest text-[hsl(var(--hud-cyan))] text-sm">SYSTEM DIAGNOSTICS</div>
                <ul className="mt-2 space-y-1 font-mono">
                  <li>• Thrusters: STANDBY</li>
                  <li>• Guidance: OK</li>
                  <li>• Warheads: SAFE</li>
                </ul>
              </div>
              <div className="rounded-lg border border-hud-grid bg-black/30 p-4">
                <div className="font-display tracking-widest text-[hsl(var(--hud-cyan))] text-sm">NETWORK STATUS</div>
                <ul className="mt-2 space-y-1 font-mono">
                  <li>• Uplink: STABLE</li>
                  <li>• Latency: 12ms</li>
                  <li>• Packet Loss: 0.0%</li>
                </ul>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
