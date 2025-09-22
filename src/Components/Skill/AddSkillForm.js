

export default function AddSkillForm() {

    return (
        <form>
            <label>Skill Name: </label>
            <input type="text" />
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            <button type="submit">Add Skill</button>
        </form>
    )
}