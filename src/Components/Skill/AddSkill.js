import { useState, useEffect } from "react";
import AddSkillForm from "./AddSkillForm";
import DisplaySkill from "./DisplaySkill";
import { getSkills } from "../../requests/skill";

export default function AddSkill() {
  const [showForm, setShowForm] = useState(false);
  const [skillData, setSkillData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSkills();
        setSkillData(data);
      } catch (error) {
        console.error("Error fetching skill data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section>
      {skillData.length === 0 && <p>No skills added yet.</p>}
      <div className="skill-wrapper">
        {!showForm &&
          skillData.map((skill, index) => (
            <DisplaySkill
              key={index}
              name={skill.name}
              proficiency={skill.proficiency}
              logo={skill.logo}
            />
          ))}
      </div>

      {showForm ? (
        <AddSkillForm setShowForm={setShowForm} />
      ) : (
        <>
          <p>You can add a new skill here</p>
          <button onClick={() => setShowForm(true)}>Add Skill</button>
        </>
      )}
    </section>
  );
}
