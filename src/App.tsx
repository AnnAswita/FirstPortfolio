import {HashRouter, Link} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'

import './App.css'
import Home from './Pages/home/Home'
import About from './Pages/about/About'
import Projects from './Pages/projects/Projects'
import ContactMe from './Pages/contact/ContactMe'
import PictureGallery from './Pages/pictureGallery/PictureGallery'
import VideoGallery from './Pages/videoGallery/VideoGallery'
import Education from './Pages/education/Education'
import Skills from './Pages/skills/Skills'
import Blog from './Pages/blog/Blog'

function App() {
  
  return (
    <HashRouter>
    <header className="header">
        <nav className="navbar">
            <ul className="nav-links">
             <div><li><Link to="/About" className="navButton button" >About Me</Link></li></div>
             <div><li><Link to="/Education" className="navButton button" >Education</Link></li></div>
             <div><li><Link to="/Skills" className="navButton button" >Skills</Link></li></div>
             <div><li><Link to="/Blog" className="navButton button" >Blog</Link></li></div>
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
        <Route path="/Skills" element={<Skills/>}/>
         <Route path="/Blog" element={<Blog/>}/>
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
