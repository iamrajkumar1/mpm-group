import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import {
  researchInterests,
  site,
} from '../data/site'

export function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-media" aria-hidden="true">
          <img
            src="/images/lab-interior.jpg"
            alt=""
            fetchPriority="high"
          />
        </div>
        <div className="container home-hero-content">
          <h1 className="home-brand">{site.labName}</h1>
          <p className="home-headline">
            Organic synthesis at the interface of metathesis, polycycles, and molecular design.
          </p>
          <p className="home-support">
            The research group of {site.pi.name}, Assistant Professor of Chemistry at{' '}
            {site.pi.institution}.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/research">
              Explore research
            </Link>
            <Link className="btn btn-ghost" to="/publications">
              View publications
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="split split-profile">
              <div>
                <span className="page-kicker">Principal Investigator</span>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    color: 'var(--navy)',
                    margin: '0 0 1rem',
                    maxWidth: '16ch',
                  }}
                >
                  {site.pi.fullName}
                </h2>
                <div className="prose">
                  <p>
                    {site.pi.title}, {site.pi.department}, {site.pi.institution}. Teaching experience{' '}
                    {site.pi.experience.teaching}; research experience {site.pi.experience.research}.
                  </p>
                  <p>
                    Trained at <strong>IIT Bombay</strong> and <strong>KU Leuven</strong>, Dr. Meshram
                    leads the Organic Syntheses Laboratory with a focus on transition-metal catalysis,
                    cyclophane chemistry, and diversity-oriented routes to complex molecular
                    architectures.
                  </p>
                </div>
                <div className="cta-row" style={{ marginTop: '1.25rem' }}>
                  <Link className="btn btn-outline" to="/about">
                    Academic profile
                  </Link>
                  <Link className="btn btn-outline" to="/contact">
                    Contact
                  </Link>
                </div>
                <div className="stat-strip">
                  {site.stats.map((stat) => (
                    <div className="stat" key={stat.label}>
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pi-photo-wrap">
                <img
                  className="pi-photo"
                  src="/images/pi-portrait.jpg"
                  alt={`${site.pi.name}, Principal Investigator`}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Research focus</h2>
              <p>
                Building polycycles, cyclophanes, and ferrocene-based macrocycles through catalytic
                and metathetic strategies.
              </p>
            </div>
            <div className="tag-cloud">
              {researchInterests.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <div className="grant-panel">
                <div>
                  <h3>Flagship grant</h3>
                  <p className="prose" style={{ margin: 0 }}>
                    {site.grant.title}
                  </p>
                  <div className="grant-meta">
                    <span>{site.grant.agency}</span>
                    <span>{site.grant.type}</span>
                    <span>{site.grant.amount}</span>
                  </div>
                  <div className="cta-row" style={{ marginTop: '1.25rem' }}>
                    <Link className="btn btn-outline" to="/research">
                      Project details
                    </Link>
                  </div>
                </div>
                <div className="grant-logo grant-logo-stack">
                  <img
                    className="logo-anrf"
                    src="/images/anrf-mark.svg"
                    alt="Anusandhan National Research Foundation (ANRF)"
                  />
                  <img src="/images/serb-dst-logo.jpg" alt="SERB, DST, Government of India" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Inside the laboratory</h2>
              <p>Organic Syntheses Lab at KTHM College, supported by DST-SERB infrastructure.</p>
            </div>
            <div className="split">
              <div className="media-frame">
                <img src="/images/lab-entrance.jpg" alt="Organic Syntheses Lab entrance" />
              </div>
              <div>
                <div className="prose">
                  <p>
                    The laboratory provides a working environment for synthetic organic chemistry —
                    from cross-coupling and metathesis to microwave-assisted synthesis — with
                    instrumentation procured under the major DST-SERB project.
                  </p>
                  <p>
                    Meet the students, browse publications, and explore facilities across the site.
                  </p>
                </div>
                <div className="cta-row" style={{ marginTop: '1.25rem' }}>
                  <Link className="btn btn-primary" to="/lab">
                    Lab & facilities
                  </Link>
                  <Link className="btn btn-outline" to="/people">
                    Research team
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
