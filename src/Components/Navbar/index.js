import {React, lazy, useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import './style.css';
// import isMobileScreen from '../scripts';
import HomePage from "../../HomePage";
// import logo from '';

function NavBar( ) {

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e, section) => {
        e.preventDefault(); 
        navigate(section);
    }
    return (
        <div className="navbar_component">
            <div className="navbar_logo">
                <i class="fa fa-home" aria-hidden="true"></i>
            </div>
            <div>
                <ul className="navbar_list">
                    <li> <a href="/" onClick={(e) => handleClick(e, "/")}  className={location.pathname === "/" ? "active" : ""}>Home</a></li>
                    <li> <a href="/about"  onClick={(e)=>handleClick(e, "about")}  className={location.pathname === "/about" ? "active" : ""}>About</a></li>
                    <li> <a href="/contact" onClick={(e)=>handleClick(e, "contact")} className={location.pathname === "/contact" ? "active" : ""}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;