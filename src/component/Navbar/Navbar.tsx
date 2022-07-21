import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export interface INavbarComponentProps { };

const NavbarComponent: React.FunctionComponent<INavbarComponentProps> = props => {
    return (
        <header className="main-header">
            <div className="logo">
                <a href="/Portfolio/bio">LOGO</a>
            </div>
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label htmlFor="menu-btn" className="menu-icon">
                <span className="menu-icon__line"></span>
            </label>

            <div className="nav-links">
                <Link to="/Portfolio/bio" className="nav-link">Bio</Link>
                <Link to="/Portfolio/project" className="nav-link">Project</Link>
                <Link to="/Portfolio/contact" className="nav-link">Contact</Link>
            </div>
        </header>
    );
}

export default NavbarComponent;