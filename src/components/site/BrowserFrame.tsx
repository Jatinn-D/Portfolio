import { ExternalLink } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useState, type PointerEvent } from "react";
import { EASE } from "./motion";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url: string;
  href: string;
  external?: boolean;
  priority?: boolean;
  label: string;
  /** Wipe the frame into view when it scrolls on screen. */
  reveal?: boolean;
  /** Text for the small label that follows the mouse. */
  hoverLabel?: string;
}

/** A screenshot inside a simple browser window, showing the real address. */
export function BrowserFrame({
  src,
  alt,
  url,
  href,
  external,
  priority,
  label,
  reveal,
  hoverLabel,
}: BrowserFrameProps) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const x = useSpring(px, { stiffness: 500, damping: 40, mass: 0.4 });
  const y = useSpring(py, { stiffness: 500, damping: 40, mass: 0.4 });

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set(e.clientX - r.left + 14);
    py.set(e.clientY - r.top + 14);
  };

  const revealProps =
    reveal && !reduce
      ? {
          initial: { clipPath: "inset(18% 6% 18% 6% round 10px)", opacity: 0.4 },
          whileInView: { clipPath: "inset(0% 0% 0% 0% round 10px)", opacity: 1 },
          viewport: { once: true, margin: "0px 0px -15% 0px" },
          transition: { duration: 1.1, ease: EASE },
        }
      : {};

  return (
    <motion.a
      className="browser"
      href={href}
      aria-label={label}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
      onPointerLeave={() => setHover(false)}
      onPointerMove={hoverLabel ? onMove : undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...revealProps}
    >
      <div className="browser-bar" aria-hidden>
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">{url}</span>
        <span className="live-badge">
          <span className="live-dot" />
          Live
        </span>
      </div>
      <div className="browser-shot">
        <img
          src={src}
          alt={alt}
          width={1240}
          height={591}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      {hoverLabel && (
        <motion.span
          className="cursor-pill"
          aria-hidden
          style={{ x, y }}
          initial={false}
          animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.6 }}
          transition={{ duration: 0.2 }}
        >
          {hoverLabel}
          <ExternalLink size={13} />
        </motion.span>
      )}
    </motion.a>
  );
}
