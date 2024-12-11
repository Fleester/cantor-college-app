'use client'

import Link from "next/link";
import React, { useState } from "react";
import "./navbar.css"

export default function Navbar() {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <button className="burger" onClick={toggleMenu}>&#9776;</button>
            <menu className={menuOpen ? "" : "inactive"}>
                <li><Link className="link" href='/'>About us</Link></li>
                <li><Link className="link" href='/'>Home</Link></li>
                <li><Link className="link" href='/'>Courses</Link></li>
                <li><Link className="link" href='/'>Facilities</Link></li>
                <li><Link className="link" href='/'>Information</Link></li>
                <li><Link className="link" href='/'>Contact us</Link></li>
            </menu>
        </nav>
    );
}