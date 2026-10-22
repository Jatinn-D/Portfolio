interface BrowserFrameProps {
  src: string;
  alt: string;
  url: string;
  href: string;
  external?: boolean;
  priority?: boolean;
  label: string;
}

/** A screenshot inside a simple browser window, showing the real address. */
export function BrowserFrame({ src, alt, url, href, external, priority, label }: BrowserFrameProps) {
  return (
    <a
      className="browser"
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className="browser-bar" aria-hidden>
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">{url}</span>
      </div>
      <img
        src={src}
        alt={alt}
        width={1240}
        height={591}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </a>
  );
}
