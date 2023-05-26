import './index.scss';
import {Link, NavLink} from 'react-router-dom';
//import{HashLink} from 'react-router-hash-link';
import LogoS from '../../assets/images/name_logo2.png'
import LogoSubtitle from '../../assets/images/name_logo1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faSuitcase, faBars, faClose, faLightbulb, faPen, faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

const SideBar = ()=>{
    const [showNav, setShowNav] = useState(false);
    console.log(showNav);
    return(
    <div className='nav-bar'>
        <Link className= 'logo' to = '/'>
                <img src={LogoS} alt= "logo"/>
                <img className= 'sub-logo'src={LogoSubtitle} alt= "joana"/>
        </Link>
        <nav className= {showNav ? "mobile-nav" : ""}>
            <NavLink exact= "true" 
            activeclassname= "active" 
            to= '/'
            onClick={()=>setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#86b616" />
            </NavLink>
            <NavLink 
            exact= "true" 
            activeclassname= "active" 
            className= "about-link" 
            to= '/about'
            onClick={()=>setShowNav(false)}
            >
                <FontAwesomeIcon icon={faUser} color="#86B616" />
            </NavLink>
            <NavLink 
            activeclassname= "active" 
            className= "skills-link" 
            to= {"/skills"} smooth
            onClick={()=>setShowNav(false)}
            >
                <FontAwesomeIcon icon={faLightbulb} color="#86B616" />
            </NavLink>
            <NavLink 
            exact= "true" 
            activeclassname= "active" 
            className= "portfolio-link" 
            to= '/portfolio'
            onClick={()=>setShowNav(false)}
            >
                <FontAwesomeIcon icon={faPaintBrush} color="#86B616" />
            </NavLink>
            <NavLink exact= "true" 
            activeclassname= "active" 
            className= "contact-link"
            to= '/contact'
            onClick={()=>setShowNav(false)}
            >
                <FontAwesomeIcon icon={faEnvelope} color="#86b616" />
            </NavLink>
            <FontAwesomeIcon icon={faClose}
            onClick={()=>setShowNav(false)} 
            color='#cca300'
            size="3x"
            className='close-icon'/>
        </nav>
        <ul className= {showNav ? "mobile-nav" : ""}>
            <li>
                <a 
                target= 'blank'
                rel = "noreferrer"
                href= "https://www.linkedin.com/in/joana-konadu-owusu-8b735b182/"
                >
                    <FontAwesomeIcon icon= {faLinkedin} color= "#86b616" />
                </a>
            </li>
            <li>
                <a 
                target= 'blank'
                rel = "noreferrer"
                href= "https://github.com/joan947"
                >
                    <FontAwesomeIcon icon= {faGithub} color= "#86b616" />
                </a>
            </li>
            <li>
                <a 
                target= 'blank'
                rel = "noreferrer"
                href= "https://twitter.com/joan_deLords"
                >
                    <FontAwesomeIcon icon= {faTwitter} color= "#86b616" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon icon={faBars}
            onClick={()=>setShowNav(true)} 
            color='#cca300'
            size="3x"
            className='hamburger-icon'/>
    </div>
);
    }
export default SideBar;