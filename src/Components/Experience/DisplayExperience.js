export default function DisplayExperience({
  title,
  company,
  start_date,
  end_date,
  description,
  logo,
}) {
  return (
    <div className="category-card">
      <div className="category-logo">
        <img src={logo} alt={`${company} logo`} />
      </div>
      <div className="category-info">
        <h3 className="category-company">{company}</h3>
        <h4 className="category-title">{title}</h4>
        <p className="category-dates">
          {start_date} - {end_date}
        </p>
        <p className="category-description">{description}</p>
      </div>
    </div>
  );
}
