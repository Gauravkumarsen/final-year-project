import React, { useEffect } from "react";
import './home.css'
import image from "./assets/pexels-visualsbyfb-2382317.jpg";
import { SlLocationPin } from "react-icons/sl";
import { MdDateRange } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TbBrandTripadvisor } from "react-icons/tb";
import { FaThList } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import Middle from './Middle';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";

const Home =()=>{
    
    // react hook to create a scroll bar
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])


    return(
        <>
    <section className="home">
         <div className="overlay"> </div>
         <img src={image} type="image/jpg"></img>
         <div className="homeContent container">
            <div className="textDiv">
                <span data-aos="fade-up" className="smallText">
                 Our Packages
                </span>
                <h1 data-aos="fade-up" className="homeTitle">
                    Search your Hotels
                </h1>
            </div>
        
            <div className="ml-link-container">
  <Link
    to="http://3.108.250.202:8501/"
    className="ml-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    🏨 Search Your Hotels 
  </Link>
</div>

        

        <div data-aos="fade-up" className="homeFooterIcon flex">
            <div className="rightIcons">
            <FaFacebookSquare className="icon"/>
            <FaInstagramSquare className="icon"/>
            <FaFacebookSquare className="icon"/>
            <TbBrandTripadvisor className="icon"/>
            </div>

           <div className="leftIcons">
           <FaThList className="icon"/>
           <TbApps className="icon"/>
           </div>
      </div>
    </div>  
    </section>
    <Middle/>
    </>
    )
}

export default Home
