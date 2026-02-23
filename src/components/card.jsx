import "./card.css";
export default function Card({
  image,
  category,
  title,
  description,
  tags = [],
  link = "#",
}) {
  return (
    <article className="card card--work">
      {/* MEDIA */}
      <div className="card__media">
        <img src={image} alt={title} />
      </div>

      {/* BODY */}
      <div className="card__body">
        <span className="card__meta">{category}</span>

        <h3 className="card__title">{title}</h3>

        <p className="card__description">{description}</p>

        <div className="card__tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>

        <a href={link} className="card__action">
          View Project →
        </a>
      </div>
    </article>
  );
}