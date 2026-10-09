import { useState } from 'react';
import { PhoneCall, Mail, ShieldCheck, Menu, X } from 'lucide-react';
import logo from "../assets/gce-logo.png";
import call from "../assets/call.png";
import email from "../assets/mail.png";
import shieldIcon from "../assets/shield.png";

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact Us', href: '#contact' },
];

const PHONE = '(613) 601 2323';
const EMAIL = 'info@gcelgroup.com';

export default function Header() {
  const [active, setActive] = useState('Home');
  const [open, setOpen] = useState(false);

  const handleClick = (label: string) => {
    setActive(label);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contact">
            <a href={`tel:${PHONE.replace(/[^\d+]/g, '')}`} className="topbar__item">
              <img src={call} alt="" /> <span>(613) 601 2323</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="topbar__item">
              <img src={email} alt="" /> 
              <span>{EMAIL}</span>
            </a>
          </div>

          <div className="topbar__badge">
            <img src={shieldIcon} alt="" />
            <span>
              Authorized by the Association of
              <br />
              Professional Engineers of Ontario (PEO)
            </span>
          </div>
        </div>
      </div>

      {/* ===== Main bar (white) ===== */}
      <div className="navbar">
        <div className="container navbar__inner">
          <a href="#home" className="navbar__logo" onClick={() => handleClick('Home')}>
            <img src={logo} alt="GCE Group" />
          </a>

          <nav className={`navbar__menu ${open ? 'is-open' : ''}`}>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={active === link.label ? 'is-active' : ''}
                    onClick={() => handleClick(link.label)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={`tel:${PHONE.replace(/[^\d+]/g, '')}`} className="btn-outline btn-outline--mobile">
              {PHONE}
            </a>
          </nav>

          <a href={`tel:${PHONE.replace(/[^\d+]/g, '')}`} className="btn-outline btn-outline--desktop">
            {PHONE}
          </a>

          <button
            type="button"
            className="navbar__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
    </header>
  );
}