import "./App.css";
import AddEducation from "./Components/Education/AddEducation";
import AddSkill from "./Components/Skill/AddSkill";
import Experience from "./Components/Experience/Experience";
import AddInfo from "./Components/userInfo/AddInfo";

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="resumeSection">
        <h2>Information</h2>
        <AddInfo />
        <br></br>
      </div>
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
        <AddSkill />
        <br></br>
      </div>
      <br></br>
      <button>Export</button>
    </div>
  );
}

export default App;
