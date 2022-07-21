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

            <div>
                <Link to="/Portfolio/bio">Bio</Link>
                <Link to="/Portfolio/project">Project</Link>
                <Link to="/Portfolio/contact">contact</Link>
            </div>

            {/* <ul className="nav-links">
                <li className="nav-link">
                    <a href="/Portfolio/bio">Bio</a>
                </li>
                <li className="nav-link">
                    <a href="/Portfolio/project">Project</a>
                </li>
                <li className="nav-link">
                    <a href="/Portfolio/contact">Contact</a>
                </li>
            </ul> */}
        </header>
    );
}

export default NavbarComponent;