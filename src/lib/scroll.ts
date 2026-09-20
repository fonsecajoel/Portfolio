import Lenis from "lenis";

let lenis: Lenis | null = null;
let cleanup: (() => void) | null = null;

export function initLenis(): () => void {
  if (lenis) return () => {};
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  let rafId = 0;
  const raf = (time: number) => {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);
  cleanup = () => {
    cancelAnimationFrame(rafId);
    lenis?.destroy();
    lenis = null;
    cleanup = null;
  };
  return cleanup;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 84;
  if (lenis) lenis.scrollTo(top, { duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4) });
  else window.scrollTo({ top, behavior: "smooth" });
}

export function scrollTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.1 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}