import { AiFillLinkedin,AiFillGithub, AiFillMail } from 'react-icons/ai';
import {Document, Page, pdfjs} from 'react-pdf'
import '../App.css';
import './Navbar.jsx'
import React, {useState} from 'react'
import ResumeFile from '../assets/Resume.pdf'
import ResumeImage from '../assets/Resume.png'




function Resume(){



  return(  
    <>

<div className='button-icon icons'>
          <div><a href='https://www.linkedin.com/in/cesar-sainz/' className='button-links'><span className='icons'><AiFillLinkedin/></span></a></div>
          <div><a href='https://github.com/CesarSainz' className='button-links'><span className='icons'><AiFillGithub/></span></a></div>
</div>


    <div className='description-content'>
     <img className='resume' src={ResumeImage}></img> 
     <div className='button-download'><a href='./assets/Resume.pdf' className='button-links-header' download>Download PDF</a></div>  
    </div>

    
 

</>
)}

export default Resume;