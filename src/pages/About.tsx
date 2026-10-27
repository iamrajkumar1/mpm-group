import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { awards, education, experience, site, symposia } from '../data/site'

export function About() {
  return (
    <>
      <PageHero
        kicker="About"
        title={site.pi.fullName}
        lead={`${site.pi.title} · ${site.pi.department} · ${site.pi.institution}. Teaching ${site.pi.experience.teaching}; research ${site.pi.experience.research}.`}
      />

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="split">
              <div>
                <img
                  className="pi-photo"
                  src="/images/pi-portrait.jpg"
                  alt={`${site.pi.name} at the laboratory`}
                />
                <p style={{ margin: '0.75rem 0 0', color: 'var(--muted)', fontSize: '0.85rem' }}>
                  Placeholder portrait from lab documents — swap with a formal profile photograph
                  when ready.
                </p>
              </div>
              <div className="prose">
                <p>
                  Dr. Meshram earned his Ph.D. in synthetic organic chemistry at the{' '}
                  <strong>Indian Institute of Technology Bombay</strong> under Prof. Sambasivarao
                  Kotha, followed by an Erasmus Mundus postdoctoral fellowship at{' '}
                  <strong>KU Leuven</strong> with Prof. Dr. Erik Van der Eycken, and further
                  postdoctoral research at IIT Bombay.
                </p>
                <p>
                  Since 2019 he has served as Assistant Professor at KTHM College, Nashik, where he
                  leads the MPM Group and a DST-SERB major project on transition-metal-catalyzed
                  construction of polycycles, cyclophanes, and ferrocene-based macrocycles.
                </p>
                <p>
                  Memberships:{' '}
                  {site.pi.memberships.map((m, i) => (
                    <span key={m.label}>
                      {i ? '; ' : ''}
                      <strong>{m.label}</strong> ({m.id})
                    </span>
                  ))}
                  . Books / book chapters: 01 each. Invited lectures: 05.
                </p>
                <div className="cta-row" style={{ marginTop: '1.25rem' }}>
                  <a
                    className="btn btn-primary"
                    href={site.pi.scholar}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Scholar
                  </a>
                  <Link className="btn btn-outline" to="/contact">
                    Contact details
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Professional experience</h2>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <div className="timeline-item" key={item.role + item.period}>
                  <div className="timeline-year">{item.period}</div>
                  <div>
                    <h3>{item.role}</h3>
                    <p>
                      <strong style={{ color: 'var(--ink)' }}>{item.org}</strong>
                      <br />
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Education</h2>
            </div>
            <div className="timeline">
              {education.map((item) => (
                <div className="timeline-item" key={item.degree}>
                  <div className="timeline-year">{item.period}</div>
                  <div>
                    <h3>{item.degree}</h3>
                    <p>
                      <strong style={{ color: 'var(--ink)' }}>{item.org}</strong>
                      {item.detail ? (
                        <>
                          <br />
                          {item.detail}
                        </>
                      ) : null}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Awards & fellowships</h2>
            </div>
            <div className="timeline">
              {awards.map((item) => (
                <div className="timeline-item" key={item.title}>
                  <div className="timeline-year">{item.year}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Symposia & meetings</h2>
              <p>Selected participation and presentations (13 listed on CV).</p>
            </div>
            <div className="member-list">
              {symposia.map((item) => (
                <div className="member" key={item}>
                  <div>
                    <strong style={{ fontWeight: 500 }}>{item}</strong>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="media-frame">
              <img src="/images/kthm-campus.jpg" alt="KTHM College campus building" />
            </div>
            <p style={{ marginTop: '0.85rem', color: 'var(--muted)', fontSize: '0.92rem' }}>
              {site.pi.institutionFull}. {site.pi.affiliation}.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
