import './Projects.css'
import projectsData from "../../data/projects.json"
import type {Project} from "../../types/projects"

function Projects() {
  const projects: Project[] = projectsData
  return (
    <div id="projects" className='projects'>
      <div className="pageHeading"><h2>My Projects</h2></div>
      <div className="projectContainer container">
      {projects.map((project) => (
        <div className="projectCard card"> {/*Add more contents to project card to enhance it*/}
          <h3>{project.title}</h3>
          <p>{project.content}</p>
          </div>
      ))}
        
      </div>
    </div>
  );  
}

export default Projects;