import { useState } from 'react'
import { Lightbox } from '../components/Lightbox'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { equipment, gallery, site } from '../data/site'

export function Lab() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)

  return (
    <>
      <PageHero
        kicker="Laboratory"
        title="Organic Syntheses Lab"
        lead={`${site.pi.department}, ${site.pi.institution}. Infrastructure strengthened under the DST-SERB major project.`}
      />

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="split">
              <div className="media-frame">
                <img
                  src="/images/lab-entrance.jpg"
                  alt="Organic Syntheses Lab entrance with DST-SERB signage"
                />
              </div>
              <div>
                <div className="prose">
                  <p>
                    The Organic Syntheses Laboratory supports research in transition-metal catalysis,
                    metathesis, and the construction of polycycles, cyclophanes, and ferrocene-based
                    macrocycles.
                  </p>
                  <p>
                    We gratefully acknowledge MVP Samaj’s KTHM College for infrastructural support,
                    and DST-SERB, New Delhi, for the major grant under Empowerment and Equity
                    Opportunities for Excellence in Science.
                  </p>
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
              <h2>Major equipment</h2>
              <p>Procured under the DST-SERB project and currently in working condition.</p>
            </div>
            <div className="equip-grid">
              {equipment.map((item) => (
                <article
                  className="equip-card"
                  key={item.name}
                  onClick={() =>
                    setLightbox({ src: item.image, caption: `${item.name} · ${item.model}` })
                  }
                >
                  <img src={item.image} alt={item.name} />
                  <div className="equip-body">
                    <h3>{item.name}</h3>
                    <p>{item.blurb}</p>
                    <div className="equip-meta">
                      {item.make} · {item.model}
                      <br />
                      Sanctioned cost: {item.cost}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Gallery</h2>
              <p>Lab spaces, instrumentation, campus, and the research community.</p>
            </div>
            <div className="gallery-grid">
              {gallery.map((shot) => (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() => setLightbox({ src: shot.src, caption: shot.caption })}
                  aria-label={`Open ${shot.caption}`}
                >
                  <img src={shot.src} alt={shot.alt} />
                </button>
              ))}
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
