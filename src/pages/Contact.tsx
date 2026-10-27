import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { site } from '../data/site'

export function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Get in touch"
        lead="For research collaboration, student openings, or academic correspondence with the MPM Group."
      />

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="contact-grid">
              <div>
                <ul className="contact-list">
                  <li>
                    <span>Principal Investigator</span>
                    <strong>{site.pi.fullName}</strong>
                  </li>
                  <li>
                    <span>Email</span>
                    {site.pi.emails.map((email) => (
                      <div key={email}>
                        <a href={`mailto:${email}`}>{email}</a>
                      </div>
                    ))}
                  </li>
                  <li>
                    <span>Phone</span>
                    <a href={`tel:${site.pi.phone.replace(/\s+/g, '')}`}>{site.pi.phone}</a>
                  </li>
                  <li>
                    <span>Address</span>
                    <div>{site.pi.address}</div>
                  </li>
                  <li>
                    <span>Profiles</span>
                    <a href={site.pi.scholar} target="_blank" rel="noreferrer">
                      Google Scholar
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="media-frame">
                  <img src="/images/kthm-campus.jpg" alt="KTHM College, Nashik" />
                </div>
                <p style={{ marginTop: '0.85rem', color: 'var(--muted)', lineHeight: 1.55 }}>
                  {site.pi.institutionFull}
                  <br />
                  {site.pi.affiliation}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
