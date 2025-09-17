import { useState } from "react";

function AddEducationForm({ setShowForm }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(form));
    try {
      const response = await fetch(`.../resume/education`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        alert("Education was added successfully!!");
      } else {
        alert("Failed to add the education");
      }
    } catch (error) {
      console.error("Error adding education:", error);
      alert("An error occurred while adding the education");
    }
    setShowForm(false);
  };

  return (
    <div className="AddEducationForm">
      <form onSubmit={(e) => handleSubmit(e)}>
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

        <div className="button-group">
          <button type="cancel" onClick={() => setShowForm(false)}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddEducationForm;
