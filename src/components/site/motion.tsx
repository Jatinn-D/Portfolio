import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from "motion/react";
import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts its children into place the first time they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const maskParent: Variants = {
  hidden: {},
  show: (c: { stagger: number; delay: number }) => ({
    transition: { staggerChildren: c.stagger, delayChildren: c.delay },
  }),
};

const maskChild: Variants = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

/**
 * Splits text into words (or letters) that slide up from behind a mask.
 * Screen readers get the plain text once; the animated pieces are hidden from them.
 */
export function MaskText({
  text,
  by = "word",
  stagger = 0.06,
  delay = 0,
  onLoad = false,
}: {
  text: string;
  by?: "word" | "char";
  stagger?: number;
  delay?: number;
  onLoad?: boolean;
}) {
  const parts = by === "word" ? text.split(" ") : Array.from(text);
  const trigger = onLoad
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return (
    <>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        className="mask-line"
        initial="hidden"
        custom={{ stagger, delay }}
        variants={maskParent}
        {...trigger}
      >
        {parts.map((part, i) => (
          <span key={`${part}-${i}`}>
            <span className="mask">
              <motion.span className="mask-inner" variants={maskChild}>
                {part}
              </motion.span>
            </span>
            {by === "word" && i < parts.length - 1 ? " " : null}
          </span>
        ))}
      </motion.span>
    </>
  );
}

/** Counts up to a number once it is on screen. */
export function CountUp({
  to,
  decimals = 0,
  suffix = "",
  delay = 0,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      delay,
      ease: EASE,
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, reduce, to, delay]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/** Pulls its child gently towards the mouse pointer. Does nothing on touch screens. */
export function Magnetic({ children, strength = 0.28 }: { children: ReactNode; strength?: number }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.5 });

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      className="magnetic"
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.span>
  );
}

/** Thin progress bar along the top of the window. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden />;
}
