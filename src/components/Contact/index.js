import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact= ()=>{
    const [letterClass, setLetterClass]= useState('text-animate')
    const contact_array = ['C','o','n','t','a','c','t',' ','m','e']

    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    },[])

return(
    <>
    <div className ='container contact-page'>
       <div className='text-zone'>
            <h1>
            <AnimatedLetters
                strArray={contact_array}
                index={15} 
                letterClass={letterClass}
            />
            </h1>
            <p>
                I am interested in freelancing opportunities in large and
                impactful projects. I am also interested in research
                opportunities in machine learning projects as well. 
            </p>
            <p>
                For any other request or information, kindly contact me using
                the form below.
            </p>
            <div className='contact-form'>
                <form>
                    <ul className='first-half'>
                        <li>
                            <input 
                                type = 'text'
                                name='name'
                                placeholder='Name'
                                required
                            />
                        </li>
                        <li>
                            <input
                                type= 'email'
                                name='email'
                                placeholder='Email'
                                required
                            />
                        </li>
                    </ul>
                    <ul className='second-half'>
                        <li>
                            <input
                                type='text'
                                placeholder='Subject'
                                name='subject'
                                required
                            />
                        </li>
                        <li>
                            <textarea
                                name='message'
                                placeholder='Message'
                                required
                            />
                        </li>
                        <li>
                            <input
                                type='submit'
                                className='flat-button'
                                value= 'SEND'
                            />
                        </li>
                    </ul>
                </form>
            </div>
        </div> 
    </div>
    <Loader type="square-spin" />
    </>
);
}

export default Contact; 