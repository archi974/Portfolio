import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export interface INavbarComponentProps { };

const NavbarComponent: React.FunctionComponent<INavbarComponentProps> = props => {

    const inputRef = useRef<HTMLHeadElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;

            if (scrollPos > 10) {
                inputRef.current?.classList.add('scrolled')
            } else {
                inputRef.current?.classList.remove('scrolled');
            }
        })
    }, [])

    return (
        <header className="main-header" ref={inputRef}>
            <div className="logo">
                <Link to="/Portfolio/bio"><img src="logo_vincent_KBIDI.jpeg" /></Link>
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