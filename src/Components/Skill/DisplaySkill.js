import "./skill.css"

export default function DisplaySkill({ name, proficiency, logo }) {
    return (
        <div className="skill-card">
            <div className="skill-logo">
                <img src={logo} alt={`${name} logo`} />
            </div>
            <div className="skill-info">
                <h3 className="skill-name">{name}</h3>
                <p className="skill-proficiency">{proficiency}</p>
            </div>
        </div>
    )
}