import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/">Bio</a>
            <a href="/project">Project</a>
            <a href="/contact">Contact</a>
        </nav>
    )
}

export default Navbar;