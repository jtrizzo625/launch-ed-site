import Link from "next/link";

const links = [
  { href: "/#for", label: "Who it's for" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#packages", label: "Packages" },
  { href: "/resources", label: "Resources" },
];

export function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
      <rect x="0.5" y="0.5" width="35" height="35" fill="none" stroke="#7fa8d1" strokeWidth="1" />
      <path d="M9 26 L18 9 L27 26 Z" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M18 9 V30 M6 26 H30" stroke="#7fa8d1" strokeWidth="0.8" strokeDasharray="2 2" />
      <circle cx="18" cy="26" r="2" fill="#b4521f" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo" aria-label="Launch Educational Consulting home">
          <LogoMark />
          <span className="logo-text">
            <span className="logo-name">LAUNCH</span>
            <span className="logo-sub">EDUCATIONAL_CONSULTING</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link href="/book" className="btn btn-primary">Book a consultation →</Link>
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav className="menu" aria-label="Mobile">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
            <Link href="/book">Book a consultation →</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
