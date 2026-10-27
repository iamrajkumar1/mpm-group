import { useState } from 'react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { researchInterests, site, specificAims } from '../data/site'

export function Research() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <PageHero
        kicker="Research"
        title="Strategies for polycycles, cyclophanes, and molecular frameworks"
        lead="The MPM Group develops efficient catalytic and metathetic methods for complex carbocycles, heterocycles, and organometallic architectures."
      />

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <div className="grant-panel">
              <div>
                <h3>{site.grant.type}</h3>
                <p className="prose" style={{ margin: 0 }}>
                  <strong>{site.grant.title}</strong>
                </p>
                <div className="grant-meta">
                  <span>{site.grant.agency}</span>
                  <span>{site.grant.amountExact}</span>
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
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Research interests</h2>
              <p>Broad themes that guide methodology development and target synthesis.</p>
            </div>
            <div className="tag-cloud">
              {researchInterests.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>Specific research aims</h2>
              <p>Click a theme to expand the scientific objective.</p>
            </div>
            <div className="aim-list">
              {specificAims.map((aim, index) => (
                <div
                  key={aim.title}
                  className={`aim-item${open === index ? ' open' : ''}`}
                  onClick={() => setOpen(open === index ? -1 : index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setOpen(open === index ? -1 : index)
                    }
                  }}
                >
                  <div className="aim-index">{String(index + 1).padStart(2, '0')}</div>
                  <div>
                    <h3>{aim.title}</h3>
                    <p>{aim.text}</p>
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
            <div className="split">
              <div className="media-frame">
                <img
                  src="/images/equipment-fumehood.jpg"
                  alt="Labguard fume hood in the Organic Syntheses Lab"
                />
              </div>
              <div>
                <div className="section-head" style={{ marginBottom: '1rem' }}>
                  <h2>Enabling chemistry</h2>
                </div>
                <div className="prose">
                  <p>
                    Core experimental platforms include Lewis acid-catalyzed carbonyl–alkyne
                    metathesis (CAM), carbonyl–olefin metathesis (COM), base-mediated
                    carbonyl–allene metathesis (CALM), and classic cross-coupling reactions —
                    Suzuki–Miyaura, Heck, Buchwald–Hartwig, and Sonogashira.
                  </p>
                  <p>
                    These tools are applied to ferrocene, indole, carbazole, β-carboline, and
                    anthracene frameworks, with an eye toward atom-economical natural-product and
                    macrocycle synthesis.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
