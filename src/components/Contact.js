import '../App.css'
import { AiFillLinkedin,AiFillGithub, AiFillMail } from 'react-icons/ai';
import emailjs from 'emailjs-com' 
import swalert from 'sweetalert'



const alert = () =>{
  swalert("Message sent!", "I will contact you as soon as I can", "success");
}


function Contact(){


  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('csainz.id', 'gmailtemplate.id', e.target, 'yiZqDLiFXbzA_UaqA')
      .then((result) => {
          console.log(result.text);
          alert();
      }, (error) => {
          console.log(error.text);
      });

    
          
    e.target.reset()
  }

    return(
        <>
        <div className='button-icon icons'>
          <div><a href='https://www.linkedin.com/in/cesar-sainz/' className='button-links'><span className='icons'><AiFillLinkedin/></span></a></div>
          <div><a href='https://github.com/CesarSainz' className='button-links'><span className='icons'><AiFillGithub/></span></a></div>
        </div>

      <form onSubmit={sendEmail}>
        <div className='contact'>
        <div className='card-contact'>
          <h1>Write your message!</h1><br></br>
          <input className='input-subject' placeholder='Subject' name="subject"></input><br></br><br></br>
          <input className='input-subject' placeholder='Email' name="email"></input><br></br><br></br>
        </div>
        <textarea type= 'textarea' className='input-area' placeholder='Write your message here...' rows={10} name="message"></textarea><br></br>
        <input type="submit" className='button-submit' value="Submit"></input>
        </div>
        </form>
        
        </>
    );

}

export default Contact;