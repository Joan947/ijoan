import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import{faCss3, faGitAlt, faPython, faHtml5, 
    faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons' 
import './index.scss'
import Loader from 'react-loaders';

const About = ()=>{
    
    const [letterClass, setLetterClass]= useState('text-animate');
    var abt= "About me"
    const abtarray = abt.split('');
    
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3600); 
    },[])
    
       return(
        <>
        <div className='about-page'>
            <div className=' item text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={abtarray}
                        index={15} 
                        letterClass={letterClass}
                    />
                </h1>
                <p> 
                    l am a technology enthusiast with a career as a Web Developer,
                    an IT Coordinator and a Research Assistant. I develop my web 
                    applications mostly with JavaScript for both Frontend and 
                    Backend.Most of my works can be found on my Projects section
                    on this website.
                </p>
                <p>
                    My research interests lie within the Machine Learning and 
                    Data Science domain and its applications specifically in 
                    the health. My goal is to contribute to the development
                    of new technologies that will assist disease detection
                    and drug discovery. I have a few upcoming projects which 
                    will be placed in my Projects section soon.
                </p>
                <p> 
                    I am available for opportunities to work on challenging and 
                    diverse projects in my area of interests.
                </p>
                <p>
                    I will describe myself as ambitious, confident, lover of music,
                    and nature.
                </p>

            </div>
            <div className=' item stage-cube-count'>
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color ='#61DBFB'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faNodeJs} color ='#68A063'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color ='#FFD43B'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color ='#2965f1'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faHtml5} color ='#f06529'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color ='#dd0031'/>
                    </div>                   
                </div>
            </div>
        </div>
        <Loader type= "square-spin"/>
        </>
    );
}

export default About;