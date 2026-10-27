import { useMemo, useState } from 'react'
import { PageHero } from '../components/PageHero'
import { publications } from '../data/publications'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'research', label: 'Research' },
  { id: 'review', label: 'Reviews' },
  { id: 'account', label: 'Accounts' },
] as const

type FilterId = (typeof filters)[number]['id']

export function Publications() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<FilterId>('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return [...publications]
      .sort((a, b) => b.year - a.year || b.id - a.id)
      .filter((pub) => (filter === 'all' ? true : pub.type === filter))
      .filter((pub) => {
        if (!q) return true
        const hay = `${pub.title} ${pub.authors} ${pub.journal} ${pub.year}`.toLowerCase()
        return hay.includes(q)
      })
  }, [query, filter])

  return (
    <>
      <PageHero
        kicker="Publications"
        title="Selected papers and reviews"
        lead="Twenty publications spanning Chem. Soc. Rev., ACS Omega, Chemical Record, Beilstein J. Org. Chem., and related journals — searchable and filterable."
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
              aria-label="Search publications"
            />
            <div className="filter-chips" role="group" aria-label="Publication type">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`chip${filter === item.id ? ' active' : ''}`}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <p style={{ color: 'var(--muted)', margin: '0 0 1rem', fontSize: '0.92rem' }}>
            Showing {filtered.length} of {publications.length}
          </p>

          {filtered.length === 0 ? (
            <div className="empty-state">No publications match this search.</div>
          ) : (
            <div className="pub-list">
              {filtered.map((pub, index) => (
                <article className="pub-item" key={pub.id} style={{ animationDelay: `${index * 30}ms` }}>
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
                    <div className="pub-badges">
                      <span className="badge">{pub.type}</span>
                      {pub.impactFactor ? (
                        <span className="badge muted">IF {pub.impactFactor}</span>
                      ) : null}
                    </div>
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
