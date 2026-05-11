import { useState } from 'react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: "Type's Of plant's", href: '#trending' },
  { label: 'Contact', href: '#footer' },
  { label: 'Privacy', href: '#footer' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return

    setSubscribed(true)
    setEmail('')
    window.setTimeout(() => setSubscribed(false), 2500)
  }

  return (
    <footer id="footer" className="footer-section">
      <div className="page-shell footer-grid">
        <div>
          <a href="#home" className="footer-brand brand-link">
            <img src="/assets/icon-logo.png" alt="" className="brand-logo" />
            <span className="brand-text">FloraVision.</span>
          </a>
          <p className="footer-quote">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to
            thrive and elevate your living environment."
          </p>
          <div className="social-links" aria-label="Social links">
            <a href="#footer" className="social-link">FB</a>
            <a href="#footer" className="social-link">TW</a>
            <a href="#footer" className="social-link">LI</a>
          </div>
        </div>

        <div>
          <h3 className="footer-heading">Quick Link's</h3>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">For Every Update.</h3>
          <form className="subscribe-row" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Email"
              aria-label="Email address"
            />
            <button type="submit">{subscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}</button>
          </form>
          <p className="copyright">FloraVision &copy; all right reserve</p>
        </div>
      </div>
    </footer>
  )
}
