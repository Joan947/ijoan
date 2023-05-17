import { useEffect, useState } from 'react';
import './index.scss'
//import LogoTitle from "../../assets/images/logo-s.png";
import {Link} from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders'
const Home = ()=> {
    const [letterClass, setLetterClass]= useState('text-animate');
    var intro = "name is";
    const introArray =intro.split('');
    var name = "Joana (alias)- JO.";
    const nameArray = name.split('');

    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000); 
    },[])
    
    return  (
        <>
        <div className= "home-page">
           <div className = "item text-zone">
                <h1>
                    <span className= {letterClass}>H</span>
                    <span className={`${letterClass} _10`}>i</span>
                    <span className={`${letterClass} _11`}>,</span>
                    <br/> 
                    <span className={`${letterClass} _12`}>M</span>
                    <span className={`${letterClass} _13`}>y</span>
                    <span className={`${letterClass} _14`}> </span>
                    {/* <img src= {LogoTitle} alt="s"/> */}
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={introArray}
                    index={15}
                    />
                    <br/>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={nameArray}
                    index={22}
                    />
                </h1>
                <h2> I'm a Web Developer / Machine Learning Developer/ A Data Analyst</h2>
                <Link to= "/contact"  className='flat-button'> CONTACT ME</Link>
            </div>  
            <div className=' item logo-box'>
            <Logo/>
            </div>  
        </div>
        <Loader type="square-spin"/>
        </>
    );
}

export default Home;