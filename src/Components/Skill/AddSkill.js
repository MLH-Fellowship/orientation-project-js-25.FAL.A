import { useState, useEffect } from "react"

import AddSkillForm from "./AddSkillForm"

export default function AddSkill() {

    const [showForm, setShowForm] = useState(false)
    const [skillData, setSkillData] = useState([])

    if (showForm) {
        return <AddSkillForm setShowForm={setShowForm} />
    }

    return (
        <div>
            <p>You can add a new skill here</p>
            <button onClick={() => setShowForm(true)}>Add Skill</button>
        </div>
    )
}