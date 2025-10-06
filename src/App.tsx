import {HashRouter, Link} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import ContactMe from './Pages/ContactMe'
import PictureGallery from './Pages/PictureGallery'
import VideoGallery from './Pages/VideoGallery'
import Education from './Pages/Education'

function App() {
  
  return (
    <HashRouter>
    <header className="header">
        <nav className="navbar">
            <ul className="nav-links">
             <div><li><Link to="/About" className="navButton button" >About Me</Link></li></div>
             <div><li><Link to="/Education" className="navButton button" >Education</Link></li></div>
             <div><li><Link to="/projects" className="navButton button">Projects</Link></li></div>
             <div><li><Link to="/pictureGallery" className="navButton button">Picture Gallery</Link></li></div>
             <div><li><Link to="/videoGallery" className="navButton button">Video Gallery</Link></li></div>
             <div><li><Link to="/contactMe" className="navButton button">Contact Me</Link></li></div>
          </ul>    
        </nav>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Education" element={<Education/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contactMe" element={<ContactMe/>}/>
        <Route path="/pictureGallery" element={<PictureGallery/>}/>
        <Route path="/videoGallery" element={<VideoGallery/>}/>
      </Routes> 
      </header>
      <footer>
        <p>&copy;{new Date().getFullYear()} Ann Aswita John. All Rights Reserved.</p> 
      </footer> 
    </HashRouter>
      
  );
}

export default App;
