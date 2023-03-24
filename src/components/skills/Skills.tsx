import "../../assets/skills.css";

function Skills({skills}: SkillTypes)
{
    const languages = (skills.languages).map((language: string, key: number) => (<li key={key}>{ language }</li>));
    const frameworks = (skills.frameworks).map((framework: string, key: number) => (<li key={key}>{ framework }</li>))
    const tools = (skills.tools).map((tool: string, key: number) => (<li key={key}>{ tool }</li>));
    return (
        <div className="skills">
            <div className="languages">
                <strong>Languages</strong>
                <ul>
                    {languages}
                </ul>
            </div>
            <div className="frameworks">
                <strong>Frameworks</strong>
                <ul>
                    {frameworks}
                </ul>
            </div>
            <div className="tools">
                <strong>Tools</strong>
                <ul>
                    {tools}
                </ul>
            </div>
        </div>
    )
}

interface SkillTypes{
    skills: any;
}

export default Skills;