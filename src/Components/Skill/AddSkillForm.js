import { useState } from "react"

export default function AddSkillForm({ setShowForm }) {
    const [form, setForm] = useState({
        name: "",
        proficiency: "",
        logo: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(form))
        // API call will go here
        setShowForm(false)
    }

    return (
        <div className="AddSkillForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Skill Name: </label>
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
                    <label>Proficiency: </label>
                    <input 
                        type="text" 
                        id="proficiency"
                        name="proficiency"
                        value={form.proficiency}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Logo URL: </label>
                    <input 
                        type="text" 
                        id="logo"
                        name="logo"
                        value={form.logo}
                        onChange={handleChange}
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
    )
}