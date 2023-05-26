import React, { useEffect, useState } from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";
import portfolioData from "../../data/portfolio.json";
import{faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Portfolio =()=>{
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000);
//clear the timeout function
        return()=>{
            clearTimeout(timer);
        }
    },[]);

    //console.log(portfolioData);
    const renderPortfolio = (portfolio)=>{
        return(
            <div className="images-container">
                {
               portfolio.map((props, index)=>{
                return(
                    <div className="img-box" key={index}>
                        <img className="portfolio-image"
                        src={process.env.PUBLIC_URL + props.cover}
                        alt="cover"
                        />
                        <div className="content"
                            style={
                                {width: props.description.length > 50 ?'auto' : '100%'
                            }}
                        >  <p className="title">{props.name}</p>
                            <h4 className="description">{props.description}</h4>
                            <button 
                            className="btn"
                            onClick={()=>window.open(props.url)}>View</button>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faArrowDown} 
                            color="#cca300" />
                        </div>
                    </div>
                )
               })
            }
            </div>
        );
    }


    return(
        <>
        <div className="portfolio-page">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={"Projects".split('')}
                index={15}
                />
            </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
       
        </div>
        <Loader type="square-spin"/>
        </>
    );
}

export default Portfolio;
