import React from 'react'
import { useRef } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import '../Stlyes/main.css'
import useState from 'react'
import troolog from '../assets/Troolog.svg'

const NavBar = () => {
   const [active, setActive] = React.useState("nav__menu");
  const [icon, setIcon] = React.useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
     <img src={troolog} alt='troolog' className='troolog-class'/>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
           About Us
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
          Services
          </a>
        </li>
        <li className="nav__item">
          <button className='middle-box-inner-button-nav'>Sign in</button>
        </li>
        
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar