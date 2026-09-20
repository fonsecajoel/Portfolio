import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { animate, useInView } from "framer-motion";

export function useTypewriter(words: string[], typeMs = 75, holdMs = 1900) {
  const [text, setText] = useState("");
  useEffect(() => {
    let i = 0;
    let c = 0;
    let deleting = false;
    let alive = true;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (!alive) return;
      const word = words[i];
      setText(word.slice(0, c));
      if (!deleting) {
        if (c < word.length) {
          c += 1;
          timer = setTimeout(tick, typeMs);
        } else {
          deleting = true;
          timer = setTimeout(tick, holdMs);
        }
      } else if (c > 0) {
        c -= 1;
        timer = setTimeout(tick, typeMs / 2);
      } else {
        deleting = false;
        i = (i + 1) % words.length;
        timer = setTimeout(tick, 300);
      }
    };
    tick();
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [words, typeMs, holdMs]);
  return { text };
}

export function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark"
  );
  const apply = (next: "dark" | "light") => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };
  const toggle = () => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      apply(next);
      return next;
    });
  };
  const set = (t: "dark" | "light") => {
    apply(t);
    setTheme(t);
  };
  return { theme, toggle, set };
}

export function CountUp({
  value,
  suffix = "",
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: duration / 1000,
      ease: [0.22, 0.61, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span className="stat-count" ref={ref}>
      {display.toLocaleString("pt-PT")}
      {suffix}
    </span>
  );
}

/** 3D tilt card com glare que segue o rato. */
export function useTilt(max = 10) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: ReactMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateX(${-(py - 0.5) * 2 * max}deg) rotateY(${(px - 0.5) * 2 * max}deg) translateY(-6px)`;
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  return { ref, onMove, onLeave };
}