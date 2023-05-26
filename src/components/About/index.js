import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders';
import AbtImg from "../../assets/images/about-me.jpg"
const About = ()=>{
    
    const [letterClass, setLetterClass]= useState('text-animate');
    var abt= "About me"
    const abtarray = abt.split('');
    //const sklarray = ("Skills").split('')
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
                    Backend.Most of my works can be found on my Portfolio section
                    on this website.
                </p>
                
                <p>
                    My research interests lie within the Machine Learning and 
                    Data Science domain and its applications specifically in 
                    the health. My goal is to contribute to the development
                    of new technologies that will assist disease detection
                    and drug discovery. I have a few upcoming projects which 
                    will be placed in my Portfolio section soon.
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
            <div className='item img-box'>
                <img className= "abt-img" src={AbtImg} alt='joan-smiling'/>
                
            </div>
            
        </div>
        <Loader type= "square-spin"/>
        </>
    );
}

export default About;