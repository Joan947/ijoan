import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact= ()=>{
    const [letterClass, setLetterClass]= useState('text-animate')
    var contact = "Contact me"
    const contact_array = contact.split('')

// adding a ref hook for email js
    const refForm = useRef();
    useEffect(()=>{
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    },[])

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs
        .sendForm(
            'service_h6ol4tx',
            'template_757aeat',
            refForm.current,
            'hRy3law4LfHWoi3ky'
        )
        .then(
            ()=> {
                alert("Message sent succesfully!");
                window.location.reload(false);  //to reload and reset form
            },
            ()=> {
                alert("Failed to send! Please try again");
            }
        )
    }
    const position = [6.74989, -1.58908]
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
                I am interested in freelancing opportunities in and
                impactful web projects. I am also interested in research
                opportunities in machine learning projects as well. 
            </p>
            <p>
                For any other request or information, kindly contact me using
                the form below.
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
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
       <div className='info-map'>
        Joana Konadu Owusu <br/>
        Kumasi - Ghana <br/>
        Airport Estate, Jofel Street <br/>
        <span>joanaowusu8@gmail.com </span>
        </div> 
        <div className='map-wrap'>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
  <Marker position={position}>
    <Popup>
      I work here.Visit me for a discussion:) 
    </Popup>
  </Marker>
</MapContainer>
        </div>
    </div>
    <Loader type="square-spin" />
    </>
);
}

export default Contact; 