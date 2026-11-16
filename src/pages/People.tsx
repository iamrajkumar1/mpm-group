import { useState } from 'react'
import { Lightbox } from '../components/Lightbox'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { site, team, type TeamMember } from '../data/site'

function MemberList({ members }: { members: TeamMember[] }) {
  return (
    <div className="member-list">
      {members.map((person) => (
        <div className="member" key={`${person.name}-${person.role ?? 'member'}-${person.since ?? ''}`}>
          <div>
            <strong>{person.name}</strong>
            {person.role ? <span>{person.role}</span> : null}
          </div>
          {person.since ? <span>{person.since}</span> : null}
        </div>
      ))}
    </div>
  )
}

export function People() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)

  return (
    <>
      <PageHero
        kicker="People"
        title="The research team"
        lead="Present and former students of the Organic Syntheses Laboratory with Dr. Meshram."
      />

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="people-grid">
              <aside className="pi-card">
                <div className="pi-photo-wrap">
                  <img
                    className="pi-photo"
                    src="/images/pi-portrait.jpg"
                    alt={`${site.pi.name}, Principal Investigator`}
                  />
                </div>
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
                </div>
                <div className="profile-links">
                  {site.pi.profiles.map((profile) => (
                    <a
                      key={profile.label}
                      href={profile.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {profile.label}
                    </a>
                  ))}
                </div>
              </aside>

              <div className="member-groups">
                <div className="member-group">
                  <h3>Present students</h3>
                  <MemberList members={team.present} />
                </div>

                <div className="member-group">
                  <h3>Former students</h3>
                  <MemberList members={team.former} />
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
