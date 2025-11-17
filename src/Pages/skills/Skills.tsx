import './Skills.css'
import type {SkillsInfo} from '../../types/skills'
import skillData from '../../data/skills.json'
function Skills() {
  const skillList: SkillsInfo[] = skillData as SkillsInfo[]
  return (
<div id="skills" className="skills">
  <div className="pageHeading"><h2>Skills</h2></div>
  <div className="skillsContainer container">
     {skillList.map((skill) => (
          <div className="skill-card card">
            <h3>{skill.name}</h3>
            <span className="stars">
              {"★".repeat(skill.level) + "☆".repeat(5 - skill.level)}
            </span>
          </div>
        ))}
    
    <span></span>
</div>
</div>
  );  
}

export default Skills;