import HudBackground from "@/components/hud/Background";
import StatusBar from "@/components/hud/StatusBar";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen text-foreground">
      <StatusBar />
      <HudBackground />
      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <header className="mb-8">
          <h1 className="font-display text-2xl sm:text-3xl tracking-[0.18em] text-[hsl(var(--hud-cyan))]">
            ELYSUIM COMMAND DASHBOARD
          </h1>
          <p className="mt-1 text-xs tracking-widest text-muted-foreground">
            Overview: Systems, Communications, Security, Launch Readiness
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg border border-hud-grid bg-black/30 p-4 backdrop-blur">
            <div className="text-sm font-display tracking-widest text-[hsl(var(--hud-cyan))]">
              SYSTEM HEALTH
            </div>
            <ul className="mt-3 space-y-1 font-mono text-sm text-muted-foreground">
              <li>CPU: 23%</li>
              <li>Memory: 41%</li>
              <li>Nodes: 12/12 ONLINE</li>
            </ul>
          </div>

          <div className="rounded-lg border border-hud-grid bg-black/30 p-4 backdrop-blur">
            <div className="text-sm font-display tracking-widest text-[hsl(var(--hud-cyan))]">
              COMMUNICATIONS
            </div>
            <ul className="mt-3 space-y-1 font-mono text-sm text-muted-foreground">
              <li>Uplink: STABLE</li>
              <li>Latency: 11.8ms</li>
              <li>Packet Loss: 0.0%</li>
            </ul>
          </div>

          <div className="rounded-lg border border-hud-grid bg-black/30 p-4 backdrop-blur">
            <div className="text-sm font-display tracking-widest text-[hsl(var(--hud-cyan))]">
              SECURITY
            </div>
            <ul className="mt-3 space-y-1 font-mono text-sm text-muted-foreground">
              <li>Access: HIGHEST OFFICIAL</li>
              <li>Encryption: AES-256</li>
              <li>Status: GREEN</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
