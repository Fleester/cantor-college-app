'use client'

import Link from "next/link";
import React, { useState } from "react";
import "./navbar.css"
import Image from "next/image";
import BurgerIcon from "/public/images/burger_icon.png";

export default function Navbar() {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <Image src={BurgerIcon}
             className="burger"
             alt="Burger menu button" 
             onClick={toggleMenu}/>
            <menu className={menuOpen ? "active" : "inactive"}>
                <li><Link className="link" href='/'>Home</Link></li>
                <li><Link className="link" href='/about-us'>About us</Link></li>
                <li><Link className="link" href='/courses'>Courses</Link></li>
                <li><Link className="link" href='/facilities'>Facilities</Link></li>
                <li><Link className="link" href='/information'>Information</Link></li>
                <li><Link className="link" href='/contact-us'>Contact us</Link></li>
            </menu>
        </nav>
    );
}