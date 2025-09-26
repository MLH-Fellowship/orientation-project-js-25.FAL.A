import { useState } from "react";

export default function AddInfoForm({ setShowForm, setInfoData, currentInfo }) {
  const [form, setForm] = useState({
    name: currentInfo?.name || "",
    phone: currentInfo?.phone || "",
    email: currentInfo?.email || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(form));
    setInfoData(form);
    setShowForm(false);
  };

  return (
    <div className="AddInfoForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Phone Number: </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 234 567 8900"
            required
          />
        </div>

        <div>
          <label>Email Address: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="button-group">
          <button type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
