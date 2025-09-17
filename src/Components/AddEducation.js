import { useState } from "react";

function AddEducation() {
  const [form, setForm] = useState({
    course: "",
    school: "",
    start_date: "",
    end_date: "",
    grade: "",
    logo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="AddEducation">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course:</label>
          <input
            id="course"
            name="course"
            value={form.course}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>School: </label>
          <input
            id="school"
            name="school"
            value={form.school}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Start Date: </label>
          <input
            id="start_date"
            type="month"
            name="start_date"
            value={form.start_date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>End Date: </label>
          <input
            id="end_date"
            type="month"
            name="end_date"
            value={form.end_date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Grade: </label>
          <input
            id="grade"
            name="grade"
            value={form.grade}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Logo URL: </label>
          <input
            id="logo"
            name="logo"
            value={form.logo}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add Education</button>
      </form>
    </div>
  );
}

export default AddEducation;
