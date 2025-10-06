import video from '../assets/Proctored_Exam_Portal.mp4'
import './VideoGallery.css'
function VideoGallery() {
  return (
    <div id="videoGallery" className="videoGallery">
  <div className="pageHeading"><h2>Video Gallery</h2></div>
    <div className="videoContainer container">
      <h3>Video 1:</h3>
      <p className="videoDescription">This is a demo video of <em>Proctored Exam Portal</em> an application to conduct exams online where tutors 
      will be able to monitor students and detect malpractices. This was developed as part of my bachelor's final year project.</p>
      <video width="500px" height="300px" controls>
        <source src={video} type="video/mp4" />
        Browser does not support video tag</video>
    </div>
</div>
  );  
}

export default VideoGallery;