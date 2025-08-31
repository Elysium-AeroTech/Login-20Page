import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import HudBackground from "@/components/hud/Background";
import StatusBar from "@/components/hud/StatusBar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen dark text-foreground">
      <StatusBar />
      <HudBackground />
      <div className="relative flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="max-w-md text-center rounded-lg border border-hud-grid bg-black/40 p-8 backdrop-blur">
          <h1 className="font-display text-4xl tracking-[0.2em] text-[hsl(var(--hud-amber))]">
            404
          </h1>
          <p className="mt-2 text-sm text-muted-foreground tracking-widest">
            PAGE NOT FOUND
          </p>
          <a
            href="/"
            className="mt-6 inline-block rounded-md border border-hud-grid bg-[hsl(var(--hud-cyan))]/10 px-4 py-2 text-sm tracking-widest text-[hsl(var(--hud-cyan))] hover:bg-[hsl(var(--hud-cyan))]/20"
          >
            RETURN TO ACCESS PORTAL
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
