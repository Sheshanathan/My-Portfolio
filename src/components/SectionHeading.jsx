export default function SectionHeading({ index, eyebrow, title, description }) {
  return <div className="section-heading"><p className="section-kicker"><span>{index}</span> {eyebrow}</p><div className="section-heading-row"><h2>{title}</h2>{description && <p>{description}</p>}</div></div>
}
