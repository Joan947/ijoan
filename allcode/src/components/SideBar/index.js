import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/name_logo2.png'
import LogoSubtitle from '../../assets/images/name_logo1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'

const SideBar = ()=>(
    <div className='nav-bar'>
        <Link className= 'logo' to = '/'>
            <img src={LogoS} alt= "logo"/>
            <img className= 'sub-logo'src={LogoSubtitle} alt= "konadu"/>
        </Link>
        <nav>
            <NavLink exact= "true" activeclassname= "active" to= '/'>
                <FontAwesomeIcon icon={faHome} color="#86b616" />
            </NavLink>
            <NavLink 
            exact= "true" 
            activeclassname= "active" 
            className= "about-link" 
            to= '/about'
            >
                <FontAwesomeIcon icon={faUser} color="#86B616" />
            </NavLink>
            <NavLink exact= "true" 
            activeclassname= "active" 
            className= "contact-link"
            to= '/contact'
            >
                <FontAwesomeIcon icon={faEnvelope} color="#86b616" />
            </NavLink>
        </nav>
        <ul>
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
    </div>
)
export default SideBar;