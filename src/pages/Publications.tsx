import { useMemo, useState } from 'react'
import { PageHero } from '../components/PageHero'
import { publications } from '../data/publications'

export function Publications() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return [...publications]
      .sort((a, b) => b.year - a.year || b.id - a.id)
      .filter((pub) => {
        if (!q) return true
        const hay = `${pub.title} ${pub.authors} ${pub.journal} ${pub.year}`.toLowerCase()
        return hay.includes(q)
      })
  }, [query])

  return (
    <>
      <PageHero
        kicker="Publications"
        title="Research Articles"
        lead="Twenty research articles spanning Chem. Soc. Rev., ACS Omega, Chemical Record, Beilstein J. Org. Chem., and related journals."
      />

      <section className="section-tight">
        <div className="container">
          <div className="filters">
            <input
              className="search-input"
              type="search"
              placeholder="Search title, author, journal, year…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search research articles"
            />
          </div>

          <p style={{ color: 'var(--muted)', margin: '0 0 1rem', fontSize: '0.92rem' }}>
            Showing {filtered.length} of {publications.length}
          </p>

          {filtered.length === 0 ? (
            <div className="empty-state">No articles match this search.</div>
          ) : (
            <div className="pub-list">
              {filtered.map((pub, index) => (
                <article
                  className="pub-item"
                  key={pub.id}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <div className="pub-num">{String(pub.id).padStart(2, '0')}</div>
                  <div>
                    <h2 className="pub-title">{pub.title}</h2>
                    <p className="pub-meta">
                      {pub.authors}
                      <br />
                      <em>{pub.journal}</em> {pub.year}, {pub.details}
                      {pub.doi ? (
                        <>
                          {' · '}
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: 'var(--accent)', fontWeight: 600 }}
                          >
                            DOI
                          </a>
                        </>
                      ) : null}
                    </p>
                    {pub.impactFactor ? (
                      <div className="pub-badges">
                        <span className="badge muted">IF {pub.impactFactor}</span>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
