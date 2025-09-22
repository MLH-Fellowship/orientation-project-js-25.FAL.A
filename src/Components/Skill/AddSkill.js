import { useState } from "react"
import AddSkillForm from "./AddSkillForm"
import DisplaySkill from "./DisplaySkill"

export default function AddSkill() {
    const [showForm, setShowForm] = useState(false)
    const [skillData, setSkillData] = useState([])

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
    )
}