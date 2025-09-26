import { useState } from "react";
import { addExperience } from "../../requests/experience";
import { suggestDescription } from "../../requests/ai";

function AddExperienceForm({ setShowForm }) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    start_date: "",
    end_date: "",
    description: "",
    logo: "",
  });

  const [aiSuggestion, setAiSuggestion] = useState("");
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(form));
    addExperience(form);
    setShowForm(false);
  };

  const handleImproveDescription = async () => {
    if (!form.description.trim()) {
      return;
    }

    setIsLoadingAI(true);
    try {
      const result = await suggestDescription(form.description, "experience");
      setAiSuggestion(result.suggestion);
    } catch (error) {
      console.error("Failed to get AI suggestion");
    } finally {
      setIsLoadingAI(false);
    }
  };

  const acceptAISuggestion = () => {
    setForm({ ...form, description: aiSuggestion });
    setAiSuggestion("");
  };

  const rejectAISuggestion = () => {
    setAiSuggestion("");
  };

  return (
    <div className="AddExperienceForm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Title:</label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Company: </label>
          <input
            id="company"
            name="company"
            value={form.company}
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

        <div className="category-description">
          <label>Description: </label>
          <input
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={handleImproveDescription}
            disabled={isLoadingAI || !form.description.trim()}
          >
            {isLoadingAI ? "Improving..." : "Improve with AI"}
          </button>
        </div>

        {aiSuggestion && (
          <div>
            <p>AI Suggestion:</p>
            <p>{aiSuggestion}</p>
            <div className="button-group">
              <button type="button" onClick={acceptAISuggestion}>
                Accept
              </button>
              <button type="button" onClick={rejectAISuggestion}>
                Reject
              </button>
            </div>
          </div>
        )}

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

export default AddExperienceForm;
