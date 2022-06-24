import { AiFillLinkedin,AiFillGithub, AiFillMail } from 'react-icons/ai';
import '../App.css';
import '../components/Navbar.jsx'
import videogames from '../assets/videogames.webp'
import mechatronics from '../assets/Mechatronics-Engineer.jpg'
import manufacturing from '../assets/manufacturing.jpg'

function About(){


  return(  
    <>

<div className='button-icon icons'>
          <div><a href='https://www.linkedin.com/in/cesar-sainz/' className='button-links'><span className='icons'><AiFillLinkedin/></span></a></div>
          <div><a href='https://github.com/CesarSainz' className='button-links'><span className='icons'><AiFillGithub/></span></a></div>
          <div><a href='https://www.linkedin.com/in/cesar-sainz/' className='button-links'><span className='icons'><AiFillMail/></span></a></div>
</div>

<div>
    <div className='title-box'>
    <h1 className='typewriter title'>César Enrique Sáinz Sánchez</h1>
</div>



<table className='description'>
<th>
    <div className='description-content'>
    <h1>Hi! My name is César, I'm a Software Developer with automotive and tech industry experience, always willing to learn something new!</h1>
    <h1>Here are some fun facts about me:</h1>
    </div>
  </th>

</table>
</div>
<br></br><br></br><br></br><br></br><br></br>

<div className='card-list'>
  <div className='card'>
    <div className = 'front-card'>
  <img className = 'front-card-image'src={mechatronics}></img>
 
  </div>
  <div className='back-card'></div>
    <div className='back-card-image'> <h3 style={{textAlign:'center', paddingLeft:'1%', paddingRight:'1%', marginTop:"10%"}}>My degree is in Mechatronics Engineering, but during this time I discovered my passion for programming so I decided to head my career in that direction. <br></br><br></br> That's why I became a Software Developer.</h3></div>
  </div>

  <div className='card'>
    <div className = 'front-card'>
  <img className = 'front-card-image'src={videogames}></img>
  </div>
  <div className='back-card'></div>
    <div className='back-card-image'> <h3 style={{textAlign:'center', paddingLeft:'1%', paddingRight:'1%', marginTop:"10%"}}>One of my main hobbies is playing Super Smash Bros Ultimate, I'm considered pretty good in my state, probably between the top 10 players around here. <br></br><br></br>Useless fact but now you know!</h3></div>
  </div>

  <div className='card'>
    <div className = 'front-card'>
  <img className = 'front-card-image'src={manufacturing}></img>
  </div>
  <div className='back-card'></div>
    <div className='back-card-image'> <h3 style={{textAlign:'center', paddingLeft:'1%', paddingRight:'1%', marginTop:"10%"}}>I worked as a maintenance and manufacturing engineer on different companies, so industry life is something I'm very familiar with. <br></br>Not a fan of it, though. I realized later that software development was the way to go for me. </h3></div>
  </div>
</div>
</>

  )
}

export default About;