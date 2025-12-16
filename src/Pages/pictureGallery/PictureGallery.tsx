import photoOne from '../../assets/mits.jpg'
import photoTwo from '../../assets/trip.jpg'
import photoThree from '../../assets/hackathone.jpg'
import photoFour from '../../assets/friends.jpg'
import photoFive from '../../assets/friends2.jpg'
import photoSix from '../../assets/iconPhoto.png'
import './PictureGallery.css'
//Pictures are stored in assets, displayed in picture containers using img tag
function PictureGallery() {
  return (
<div id="pictureGallery" className="pictureGallery">
  <div className="pageHeading"><h2>Picture Gallery</h2></div>
  <div className='picContainer'>
    <img className="pic" src={photoOne} alt="" />
    <img className="pic" src={photoTwo} alt="" />
    <img className="pic" src={photoThree} alt="" />
    <img className="pic" src={photoFour} alt="" />
     <img className="pic" src={photoFive} alt="" />
      <img className="pic" src={photoSix} alt="" />
  </div>
  

</div>
  );  
}

export default PictureGallery;