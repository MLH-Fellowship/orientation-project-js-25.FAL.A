import "./App.css";
import AddEducation from "./Components/Education/AddEducation";
import AddSkill from "./Components/Skill/AddSkill";

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="resumeSection">
        <h2>Experience</h2>
        <p>Experience Placeholder</p>
        <button>Add Experience</button>
        <br></br>
      </div>
      <div className="resumeSection">
        <h2>Education</h2>
        <AddEducation />
        <br></br>
      </div>
      <div className="resumeSection">
        <h2>Skills</h2>
        <AddSkill />
        <br></br>
      </div>
      <br></br>
      <button>Export</button>
    </div>
  );
}

export default App;
