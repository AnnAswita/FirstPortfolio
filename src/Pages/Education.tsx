import './Education.css'
function Education() {
  return (
<div id="education" className="education">
  <div className="pageHeading"><h2>Education</h2></div>
  <div className="educationContainer container">
    <div className="item">
        <h3>Master in Software Engineering</h3>
        <p>2025-Present</p>
    </div>
    <div className="item"> 
        <a className="educationLinks" href="https://www.ul.ie/" target='_blank'><h3>University of Limerick</h3></a>
        <p>Limerick, Ireland</p>
    </div> 

    <div className="item">
        <h3>Bachelor in Computer Science and Engineering (Honours)</h3>
        <p>2017-2021</p>
    </div>
    <div className="item">
        <a className="educationLinks" href="https://mgmits.ac.in/" target='_blank'><h3>Muthoot Institute of Technology and Science</h3></a>
        <p>Affiliated to</p>
        <a className="educationLinks" href="https://www.ktu.edu.in/" target='_blank'><h3>APJ Abdul Kalam University</h3></a>
        <p>Kerala, India</p>
    </div>
  </div>
</div>

  );  
}

export default Education;