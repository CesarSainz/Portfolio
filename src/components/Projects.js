import '../App.css'
import { AiFillLinkedin,AiFillGithub, AiFillMail } from 'react-icons/ai';
import quizzler from '../assets/flutterAppOne.png'
import xylophone from '../assets/flutterAppTwo.png'
import creditcard from '../assets/creditCardProject.png'
import advicegenerator from '../assets/adviceGenerator.png'


function Projects(){

    return(
        <>
        <div className='button-icon icons'>
          <div><a href='https://www.linkedin.com/in/cesar-sainz/' className='button-links'><span className='icons'><AiFillLinkedin/></span></a></div>
          <div><a href='https://github.com/CesarSainz' className='button-links'><span className='icons'><AiFillGithub/></span></a></div>
        </div>
        <br></br><br></br>

        <div className='subtitle'>
            <h1 style={{textDecoration: "underline"}}>Web projects</h1>
            <div className='projects'>
                <div className='card'>
                    <img className= 'project-pic' src={advicegenerator} style={{width: '100%'}} />
                    <div className='project-description'><h4>Web App showing advices, fetching data from the advice-generator API. Made with ReactJS.</h4></div>
                    <a href='https://github.com/CesarSainz/advice-generator'><span className='button-source'>Source code</span></a>
                    <a href='https://cesaradvice.netlify.app/'><span className='button-source'>Functioning Website</span></a>
                </div>
            <br></br>
            <br></br>
            </div><br></br><br></br><br></br><br></br>

            <div className='projects'>
                <div className='card'>
                    <img className= 'project-pic' src={creditcard} />
                    <div className='project-description'><h4>Interactive Credit Card submit page with filters made with HTML/CSS/JS.</h4></div>
                    <a href='https://github.com/CesarSainz/creditcard'><span className='button-source'>Source code</span></a>
                    <a href='https://creditcardcesarproject.netlify.app/'><span className='button-source'>Functioning Website</span></a>
                </div>
            <br></br>
            <br></br>

            </div>

        </div>
        <br></br><br></br><br></br><br></br>
        <div className='subtitle'>
            <h1 style={{textDecoration: "underline"}}>Mobile projects</h1>
            <div className='projects'>
                <div className='card'>
                    <img className= 'project-pic' src={quizzler} />
                    <div className='project-description'><h4>Quiz app demo dedicated to medical students in order for them to make a quick study round</h4></div>
                    <a href='https://github.com/CesarSainz/quizzler_flutter'><div className='button-source'>Source code</div></a>
                </div>

                <div className='card'>
                    <img className= 'project-pic' src={xylophone} />
                    <div className='project-description'><h4>Xylophone app with the 7 notes, functional for playing whatever you want in it</h4></div>
                    <a href='https://github.com/CesarSainz/xylophone_flutter'><div className='button-source'>Source code</div></a>
                </div>

            </div>
        </div>

        </>
        
    );

}

export default Projects;