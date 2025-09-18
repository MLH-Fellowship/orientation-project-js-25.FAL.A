import "./education.css";

export default function DisplayEducation({
  course,
  school,
  start_date,
  end_date,
  grade,
  logo,
}) {
  return (
    <div className="education-card">
      <div className="education-logo">
        <img src={logo} alt={`${school} logo`} />
      </div>
      <div className="education-info">
        <h3 className="education-course">{course}</h3>
        <h4 className="education-school">{school}</h4>
        <p className="education-dates">
          {start_date} - {end_date}
        </p>
        <p className="education-grade">{grade}</p>
      </div>
    </div>
  );
}
