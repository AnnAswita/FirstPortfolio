import './Projects.css'
function Projects() {
  return (
    <div id="projects" className='projects'>
      <div className="pageHeading"><h2>My Projects</h2></div>
      <div className="projectContainer container">
        <div className="projectCard">
          <h3>Proctored Exam Portal</h3>
          <p>This is an application which can be used by educational instituions to conduct online exams. 
            It detects the eye gaze data and detects any malpractices performed by students during examination.If any malpractice is detected 
            then there is a facility where students can justify thier side. Tutors considering the justification of the student
            and video evidence recorded by the application can make a decision.
          </p>
        </div>
        <div className="projectCard">
          <h3>Fake Medicine Detector</h3>
          <p>This application can be used to detect fake medicine available in the market. Traditional supply 
            chain is transformed into secure and transperant such that customers can verify all transactions from 
            manufacturer till the retailer. This application uses Rfid tags and blockchain for recording the transaction data.
          </p>
        </div>
      </div>
    </div>
  
       
  );  
}

export default Projects;