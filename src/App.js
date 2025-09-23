import "./App.css";
import AddEducation from "./Components/Education/AddEducation";
import Experience from "./Components/Experience/Experience";
import { useState } from "react";

function App() {
  const BASE_URL = process.env.API_URL;
  const [resumeData, setResumeData] = useState(null);
  const [spellcheckResults, setSpellcheckResults] = useState(null);

  const handleSpellcheck = () => {
    if (!resumeData) {
      fetch(`${BASE_URL}/resume/data`)
        .then((response) => response.json())
        .then((data) => {
          setResumeData(data);
          performSpellcheck(data);
        })
        .catch((err) => {
          console.error("Error fetching resume data for spellcheck:", err);
        });
    } else {
      performSpellcheck(resumeData);
    }
  };

  const performSpellcheck = (data) => {
    fetch(`${BASE_URL}/resume/spellcheck`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        experience: data.experience || [],
        education: data.education || [],
        skill: data.skill || [],
      }),
    })
      .then((response) => response.json())
      .then((spellcheckData) => setSpellcheckResults(spellcheckData))
      .catch((error) => console.error("Spellcheck error:", error));
  };

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="resumeSection">
        <h2>Experience</h2>
        <Experience />
        <br></br>
      </div>
      <div className="resumeSection">
        <h2>Education</h2>
        <AddEducation />
        <br></br>
      </div>
      <div className="resumeSection">
        <h2>Skills</h2>
        <p>Skill Placeholder</p>
        <button>Add Skill</button>
        <br></br>
      </div>

      <br></br>
      <button onClick={handleSpellcheck}>Perform Spellcheck</button>

      {spellcheckResults && (
        <div>
          <h2>Spellcheck Results:</h2>
          {spellcheckResults
            .filter((result) => result.after.length > 0)
            .map((result, index) => (
              <div key={index}>
                <p>
                  <strong>Original word:</strong> {result.before}
                </p>
                <p>
                  <strong>Suggested word:</strong> {result.after.join(", ")}
                </p>
              </div>
            ))}
          {spellcheckResults.filter((result) => result.after.length > 0)
            .length === 0 && <p>No spelling mistakes found!</p>}
        </div>
      )}

      <br></br>
      <button>Export</button>
    </div>
  );
}

export default App;
