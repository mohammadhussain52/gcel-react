import type { ReactNode } from 'react';
import callIcon from '../../assets/call-f.svg';
import telIcon from '../../assets/tel-f.svg';
import mailIcon from '../../assets/mail-f.svg';
import mapIcon from '../../assets/map-f.svg';
import footerLogo from '../../assets/footer-gce.png';
import FooterCta from './FooterCta';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact Us', href: '#contact' },
];

const COMPETENCIES = [
  { label: 'Structural Engineering & Design', href: '#services' },
  { label: 'Building Sciences & Engineering', href: '#services' },
  { label: 'Parking Garage Inspections', href: '#services' },
  { label: 'Precast Concrete', href: '#services' },
  { label: 'Permit Approvals', href: '#services' },
];

const CONTACTS: { icon: string; text: string; href?: string }[] = [
  { icon: callIcon, text: 'Direct: (613) 601 2323', href: 'tel:+16136012323' },
  { icon: telIcon, text: 'Office: (613) 230 7007', href: 'tel:+16132307007' },
  { icon: mailIcon, text: 'info@gcelgroup.com', href: 'mailto:info@gcelgroup.com' },
  { icon: mailIcon, text: 'mafard@gcelgroup.com', href: 'mailto:mafard@gcelgroup.com' },
  { icon: mapIcon, text: '310 Miwate Pvt., Suite #1101, Ottawa, Ontario, Canada, K1R 0E8' },
];

const SOCIALS: { name: string; href: string; icon: ReactNode }[] = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.9 9.5H4V20h2.9V9.5zM5.5 4.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20 14c0-3.1-1.7-4.7-4-4.7-1.3 0-2.1.7-2.5 1.3V9.5h-2.9V20h2.9v-5.6c0-1.5.7-2.4 1.9-2.4s1.7.9 1.7 2.4V20H20v-6z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <FooterCta />

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-col--brand">
              <a href="#home" className="footer-logo">
                <img src={footerLogo} alt="GCE Group" />
              </a>
              <p className="footer-about">
                Grand Canada Engineering Limited (GCE) — Leaders in structural engineering,
                building sciences, and certified infrastructure supply since 1996. Authorized by
                the Association of Professional Engineers of Ontario (PEO).
              </p>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                {QUICK_LINKS.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Core Competencies</h4>
              <ul className="footer-list">
                {COMPETENCIES.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-contact">
                {CONTACTS.map((c) => (
                  <li key={c.text}>
                    <img className="footer-contact__icon" src={c.icon} alt="" />
                    {c.href ? <a href={c.href}>{c.text}</a> : <span>{c.text}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} Grand Canada Engineering Limited. All Rights Reserved.
            </p>
            <div className="footer-social">
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name} className="footer-social__link">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}