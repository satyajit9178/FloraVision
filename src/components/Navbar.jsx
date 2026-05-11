import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Plants Type', href: '#trending', hasArrow: true },
  { label: 'More', href: '#best-o2' },
  { label: 'Contact', href: '#footer' },
]

function SearchIcon() {
  return (
    <svg width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10.8" cy="10.8" r="7.4" />
      <path d="m16.2 16.2 5 5" />
    </svg>
  )
}

function BagIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 9.5h15v11a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-11Z" />
      <path d="M8 9.5V5a4 4 0 0 1 8 0v4.5" />
      <circle cx="12" cy="14.5" r="1.2" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="#home" className="brand-link" aria-label="FloraVision home">
          <img src="/assets/icon-logo.png" alt="" className="brand-logo" />
          <span className="brand-text">FloraVision.</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="nav-link">
                {link.label}
                {link.hasArrow ? <span aria-hidden="true"> &#9662;</span> : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="icon-button" aria-label="Search">
            <SearchIcon />
          </button>
          <button className="icon-button" aria-label="Shopping bag">
            <BagIcon />
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="mobile-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="nav-link" href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  )
}

export { BagIcon }
