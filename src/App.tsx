import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { initLenis, scrollTop } from "./lib/scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ArrowRightIcon } from "./components/icons";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => initLenis(), []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="to-top"
            onClick={scrollTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
          >
            <ArrowRightIcon size={19} style={{ transform: "rotate(-90deg)" }} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}