import photo from '../../assets/photo.jpg'
import './About.css'
function About() {
  return (
    <div id="about" className="about">
  <div className="pageHeading"><h2>About Me</h2></div>
  <div id="hero" className="aboutContainer container">
    <div className="imgContainer">
      <img src={photo} alt="Profile Photo" className="photo profilePhoto" />
    </div>
    <h1 className="name">Ann Aswita John</h1>
    <p className="aboutContent"> I'm a student at <em>University of limerick, Ireland</em>, pursuing <em>Master's in Software Engineering</em>.<br/>
      I completed my undergraduation in <em>Computer Science and Engineering(Honours)</em> and worked 
      as a <em>Junior Software Engineer</em>.</p>
    </div>
    </div>
  );  
}

export default About;