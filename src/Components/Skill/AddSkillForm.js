export default function AddSkillForm({ setShowForm }) {
    return (
        <div className="AddSkillForm">
            <form>
                <div>
                    <label>Skill Name: </label>
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                    />
                </div>

                <div>
                    <label>Proficiency: </label>
                    <input 
                        type="text" 
                        id="proficiency"
                        name="proficiency"
                        required
                    />
                </div>

                <div>
                    <label>Logo URL: </label>
                    <input 
                        type="text" 
                        id="logo"
                        name="logo"
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