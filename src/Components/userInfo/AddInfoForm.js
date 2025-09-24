export default function AddInfoForm({ setShowForm }) {
  return (
    <div className="AddInfoForm">
      <form>
        <div>
          <label>Name: </label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label>Phone Number: </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 234 567 8900"
            required
          />
        </div>

        <div>
          <label>Email Address: </label>
          <input type="email" id="email" name="email" required />
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