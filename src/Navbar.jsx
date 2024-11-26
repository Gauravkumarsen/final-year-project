import React, {useState} from "react";
import './navbar.css'
import { MdOutlineModeOfTravel } from "react-icons/md";
import { AiFillCloseSquare } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import {Link} from 'react-router-dom'

const Navbar =()=>{
const [active, setActive] = useState('navBar')

const showNav=()=>{
    setActive('navBar activeNavbar')
}

const removeNavbar=()=>{
    setActive('navBar')
}

    return(
    <section className = 'navBarSection'>
    <header className="header flex">
        <div className="logoDiv">
            <a href = "#" className="logo flex">
                <h1><MdOutlineModeOfTravel className= "icon"/>
               <span> Travel</span>..`IN`..<span>Dia</span></h1>
            </a>
        </div>

        <div className={active}>
            <ul className="navLists flex">
                <li className="navItem">
                <Link to="/" className="navLink">Home</Link>
                </li>

                <li className="navItem">
                <Link to="/about" className="navLink">About</Link>
                </li>

                <li className="navItem">
                <Link to="/bookings" className="navLink">Bookings</Link>
                </li>

                <li className="navItem">
                <Link to="/contact" className="navLink">Contact</Link></li>

                <button className="btn">
                    <a href="#">Login</a>
                </button>
            </ul>

        <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseSquare className="icon"/>
        </div>
        </div>
 
      <div onClick={showNav}
      className="toggleNavbar">
        <TbGridDots className="icon"/>
      </div>
    </header>
    </section>
    )
}

export default Navbar


