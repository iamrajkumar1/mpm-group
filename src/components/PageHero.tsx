type Props = {
  kicker: string
  title: string
  lead: string
}

export function PageHero({ kicker, title, lead }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="page-kicker">{kicker}</span>
        <h1 className="page-title">{title}</h1>
        <p className="page-lead">{lead}</p>
      </div>
    </section>
  )
}
