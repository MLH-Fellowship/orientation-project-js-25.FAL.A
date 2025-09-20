import "./App.css";
import AddEducation from "./Components/Education/AddEducation";
import Experience from "./Components/Experience/Experience";

function App() {
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
      <button>Export</button>
    </div>
  );
}

export default App;
