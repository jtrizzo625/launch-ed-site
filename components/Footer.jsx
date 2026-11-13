import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <strong>LAUNCH EDUCATIONAL CONSULTING</strong>
          <span>College counseling for students who build things. Virtual, serving families nationwide.</span>
          <a href={`mailto:${site.email}`} style={{ color: "#b7c4d3", fontSize: 14 }}>{site.email}</a>
        </div>
        <div className="footer-links">
          <Link href="/#for">Who this is for</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#about">About</Link>
          <Link href="/#packages">Packages</Link>
          <a href={site.calendlyUrl}>Book a free consultation</a>
        </div>
        <div className="footer-aside">
          <span>Only need help with essays?</span>
          <a href={site.essayLaunchUrl}>Visit Essay Launch →</a>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Launch Educational Consulting LLC</span>
        <span>BUILT FOR BUILDERS</span>
      </div>
    </footer>
  );
}
