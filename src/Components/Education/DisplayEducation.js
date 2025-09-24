export default function DisplayEducation({
  course,
  school,
  start_date,
  end_date,
  grade,
  logo,
}) {
  return (
    <div className="category-card">
      <div className="category-logo">
        <img src={logo} alt={`${school} logo`} />
      </div>
      <div className="category-info">
        <h3 className="category-course">{course}</h3>
        <h4 className="category-school">{school}</h4>
        <p className="category-dates">
          {start_date} - {end_date}
        </p>
        <p className="category-grade">{grade}</p>
      </div>
    </div>
  );
}
