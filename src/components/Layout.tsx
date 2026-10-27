import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { site } from '../data/site'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/research', label: 'Research' },
  { to: '/publications', label: 'Publications' },
  { to: '/people', label: 'People' },
  { to: '/lab', label: 'Lab' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-inner">
          <NavLink to="/" className="brand" aria-label="MPM Group home">
            <span className="brand-mark">{site.labName}</span>
            <span className="brand-sub">{site.labFullName}</span>
          </NavLink>

          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav${open ? ' open' : ''}`} aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3>{site.labName}</h3>
              <p>
                {site.labFullName}
                <br />
                {site.pi.department}
                <br />
                {site.pi.institution}
              </p>
            </div>
            <div>
              <h3>Principal Investigator</h3>
              <p>
                {site.pi.name}
                <br />
                {site.pi.title}
              </p>
            </div>
            <div>
              <h3>Explore</h3>
              <div className="footer-links">
                <NavLink to="/research">Research</NavLink>
                <NavLink to="/publications">Publications</NavLink>
                <NavLink to="/lab">Laboratory</NavLink>
                <a href={site.pi.scholar} target="_blank" rel="noreferrer">
                  Google Scholar
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {site.labName} · {site.pi.name}
            </span>
            <span>Supported by DST-SERB / ANRF, Govt. of India</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
