import { AiFillLinkedin,AiFillGithub, AiFillMail } from 'react-icons/ai';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import './components/Navbar.jsx'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Projects from './components/Projects'



function App() {
  return (
    <>

  <head><style>
    @import url('https://fonts.googleapis.com/css2?family=Martel:wght@200&family=Oswald:wght@300&display=swap');
</style></head>
  <div className="background-color">

  <div className='header'>   
    <table>
        <th className='button'><a href='/' className='button-links-header'>&nbsp;About me</a></th>
        <th className='button'><a href='Resume' className='button-links-header'>&nbsp;Resume</a></th>
        <th className='button'><a href = '/projects' className='button-links-header'>&nbsp;Projects</a></th>
        <th className='button'><a href = '/contact' className='button-links-header'>&nbsp;Contact</a></th>    
      </table>
  </div>

  <div>
</div>


<br></br>
<br></br>
<BrowserRouter>
  <Routes>
    <Route path = '/' element={<About />} />
    <Route path = 'resume' element={<Resume />} />
    <Route path = 'projects' element= {<Projects />} />
    <Route path = 'contact' element= {<Contact />} />
  </Routes>
</BrowserRouter>



</div>



   
    </>
  );
}

export default App;
