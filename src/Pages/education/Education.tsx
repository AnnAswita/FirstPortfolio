import './Education.css'
import type {EducationInfo, ItemInfo} from '../../types/education'
import educationData from '../../data/education.json'
function Education() {
  const education: EducationInfo[] = educationData as EducationInfo[]
  return (
<div id="education" className="education">
  <div className="pageHeading"><h2>Education</h2></div>
  <div className="educationContainer container">

    {education.map((qualification) => (
       <div className="item">
        {qualification.content.map((item:ItemInfo) => {
          if(item.type === "h3") return <h3>{item.text}</h3>
          if(item.type === "p") return <p>{item.text}</p>;
          if(item.type === "a") return (
            <a className="educationLinks" href={item.href} target='_blank'><h3>{item.text}</h3></a>
          )
          return null;
        })} {/* depending on the type of data respective HTML tag is returned */}
    </div>
    ))}
    
  </div>
</div>
  );  
}

export default Education;