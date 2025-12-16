import './Education.css'
import type {EducationInfo, ItemInfo} from '../../types/education'
import educationData from '../../data/education.json'
//loads Data from json file and renders it dynamically
function Education() {
  // Cast imported JSON data to EducationInfo[] to enable TypeScript compile-time checking
  const education: EducationInfo[] = educationData as EducationInfo[]
  return (
<div id="education" className="education">
  <div className="pageHeading"><h2>Education</h2></div>
  <div className="educationContainer container">
    {/* Mapping over each qualification in the 'education' array */}
    {education.map((qualification) => (
       <div className="item">
        {qualification.content.map((item:ItemInfo) => {
          if(item.type === "h3") return <h3>{item.text}</h3>// Rendering as a <h3> header if type is "h3"
          if(item.type === "p") return <p>{item.text}</p>; // Rendering as a <p> paragraph if type is "p"
          if(item.type === "a") return (
            <a className="educationLinks" href={item.href} target='_blank'><h3>{item.text}</h3></a> 
            // Rendering as a <a> anchor if type is "a" with hypertext as h3
          )
          return null;
        })} {/* depending on the type of data specified in the json file respective HTML tag is returned */}
    </div>
    ))}
    
  </div>
</div>
  );  
}

export default Education;