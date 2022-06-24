import '../App.css'
import { AiFillLinkedin,AiFillGithub, AiFillMail } from 'react-icons/ai';
import quizzler from '../assets/flutterAppOne.png'
import xylophone from '../assets/flutterAppTwo.png'


function Projects(){

    return(
        <>
        <div className='button-icon icons'>
          <div><a href='https://www.linkedin.com/in/cesar-sainz/' className='button-links'><span className='icons'><AiFillLinkedin/></span></a></div>
          <div><a href='https://github.com/CesarSainz' className='button-links'><span className='icons'><AiFillGithub/></span></a></div>
          <div><a href='https://www.linkedin.com/in/cesar-sainz/' className='button-links'><span className='icons'><AiFillMail/></span></a></div>
        </div>
                
        <div className='subtitle'>
            <h1 style={{textDecoration: "underline"}}>Mobile projects</h1>
            <div className='projects'>
                <div className='card'>
                    <img className= 'project-pic' src={quizzler} />
                    <h4>Quiz app demo dedicated to medical students in order for them to make a quick study round</h4>
                    <a href='https://github.com/CesarSainz/quizzler_flutter'><div className='button-source'>Source code</div></a>
                </div>

                <div className='card'>
                    <img className= 'project-pic' src={xylophone} />
                    <h4>Xylophone app with the 7 notes, functional for playing whatever you want     in it</h4>
                    <a href='https://github.com/CesarSainz/xylophone_flutter'><div className='button-source'>Source code</div></a>
                </div>

            </div>
        </div>
        <br></br><br></br>

        <div className='subtitle'>
            <h1 style={{textDecoration: "underline"}}>Web projects</h1>
        </div>

        </>
        
    );

}

export default Projects;