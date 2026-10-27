import { useState } from 'react'
import { Lightbox } from '../components/Lightbox'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { site, team } from '../data/site'

export function People() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)

  return (
    <>
      <PageHero
        kicker="People"
        title="The research team"
        lead="PhD scholars, project associates, and MSc students working with Dr. Meshram in the Organic Syntheses Laboratory."
      />

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="people-grid">
              <aside className="pi-card">
                <img
                  className="pi-photo"
                  src="/images/pi-portrait.jpg"
                  alt={`${site.pi.name}, Principal Investigator`}
                />
                <h2>{site.pi.name}</h2>
                <div className="role">{site.pi.role}</div>
                <div className="prose">
                  <p>
                    {site.pi.title}
                    <br />
                    {site.pi.department}
                    <br />
                    {site.pi.institution}
                  </p>
                  <p style={{ fontSize: '0.85rem' }}>
                    Temporary portrait from lab materials. A formal headshot can replace this image
                    later.
                  </p>
                </div>
              </aside>

              <div className="member-groups">
                <div className="member-group">
                  <h3>PhD students</h3>
                  <div className="member-list">
                    {team.phd.map((person) => (
                      <div className="member" key={person.name}>
                        <div>
                          <strong>{person.name}</strong>
                          <span>{person.role}</span>
                        </div>
                        <span>{person.since}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="member-group">
                  <h3>Project associate</h3>
                  <div className="member-list">
                    {team.project.map((person) => (
                      <div className="member" key={person.name}>
                        <div>
                          <strong>{person.name}</strong>
                          <span>{person.role}</span>
                        </div>
                        <span>{person.since}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="member-group">
                  <h3>MSc project students</h3>
                  <div className="member-list">
                    {team.msc.map((person) => (
                      <div className="member" key={person.name}>
                        <div>
                          <strong>{person.name}</strong>
                          <span>{person.role}</span>
                        </div>
                        <span>{person.since}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="photo-mosaic">
              <figure
                onClick={() =>
                  setLightbox({
                    src: '/images/group-with-leadership.jpg',
                    caption:
                      'MPM Group with Hon. Principal Dr. R. D. Darekar, Head Dr. S. R. Labhade, and IQAC Coordinator Dr. N. D. Gaikwad',
                  })
                }
              >
                <img
                  src="/images/group-with-leadership.jpg"
                  alt="MPM Group with college leadership"
                />
                <figcaption>
                  MPM Group with Hon. Principal Dr. R. D. Darekar, Head, Department of Chemistry Dr.
                  S. R. Labhade, and IQAC Coordinator Dr. N. D. Gaikwad
                </figcaption>
              </figure>
              <figure
                onClick={() =>
                  setLightbox({
                    src: '/images/group-coworkers.jpg',
                    caption: 'Dr. Meshram with his co-workers',
                  })
                }
              >
                <img src="/images/group-coworkers.jpg" alt="Dr. Meshram with co-workers" />
                <figcaption>Dr. Meshram with his co-workers</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {lightbox ? (
        <Lightbox
          src={lightbox.src}
          caption={lightbox.caption}
          onClose={() => setLightbox(null)}
        />
      ) : null}
    </>
  )
}
