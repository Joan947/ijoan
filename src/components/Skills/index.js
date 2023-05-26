
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import{faCss3, faGitAlt, faPython, faHtml5, 
    faNodeJs, faReact, faJava} from '@fortawesome/free-brands-svg-icons' 
import './index.scss'
import Loader from 'react-loaders';

const Skills = ()=>{
    
    const [letterClass, setLetterClass]= useState('text-animate');
    const sklarray = ("Skills &").split('');
    const skl2array = ("Experience").split('')
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3600); 
    },[])
    
       return(
        <>
        <div id="skills">
            <div className=' item text-zone'>
                
                <h1>
                    <AnimatedLetters
                        strArray={sklarray}
                        index={15} 
                        letterClass={letterClass}
                    />
                    <br/>
                    <AnimatedLetters
                        strArray={skl2array}
                        index={23} 
                        letterClass={letterClass}
                    />
                    
                </h1>
                <p> 
                    I have an experience in web development and I use various 
                    technologies including:  
                    <span className="t"> HTML5</span>
                      ,  
                    <span className="t"> CSS3</span>
                    ,
                    <span className="t"> JavaScript</span>
                    ,
                    <span className="t"> Bootstrap</span>
                    ,
                    <span className="t"> Git</span>
                    ,
                    <span className="t"> React</span>
                    ,
                    <span className="t"> Angular</span>
                    ,
                    <span className="t"> Python</span>
                    ,
                    <span className="t"> Firebase</span>
                    ,
                    <span className="t"> NodeJs</span>
                    ,
                    <span className="t"> MongoDb </span>
                    etc,
                    for my web applications.
                </p>
                
                <p>
                    You can have a peek on some of my projects in the projects 
                    section on this website or you can visit either my  
                    <a 
                    target= 'blank'
                    rel = "noreferrer"
                    href= "https://www.linkedin.com/in/joana-konadu-owusu-8b735b182/"
                    >
                     LinkedIn </a>
                    or  
                    <a
                     target= 'blank'
                     rel = "noreferrer"
                     href= "https://github.com/joan947"
                    >
                      GitHub
                    </a> to know about my works and interests.
                </p>
                

            </div>
            <div className=' item stage-cube-count'>
                <div className='stars'></div>
                <div className='stars2'></div>
                <div className='stars3'></div>
                <div className='cube-spinner cube-slider'>
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
                    <div className='face7'>
                        <FontAwesomeIcon icon={faJava} color ='green'/>
                    </div> 
                    <div className='face8'>
                        <FontAwesomeIcon icon={faReact} color ='#61DBFB'/>
                    </div>
                    <div className='face9'>
                        <FontAwesomeIcon icon={faNodeJs} color ='#68A063'/>
                    </div>
                    <div className='face10'>
                        <FontAwesomeIcon icon={faPython} color ='#FFD43B'/>
                    </div>
                    <div className='face11'>
                        <FontAwesomeIcon icon={faCss3} color ='#2965f1'/>
                    </div>
                    <div className='face12'>
                        <FontAwesomeIcon icon={faHtml5} color ='#f06529'/>
                    </div>                  
                </div>
            </div>
            
        </div>
        <Loader type= "square-spin"/>
        </>
    );
}

export default Skills;