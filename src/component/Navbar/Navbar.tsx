import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export interface INavbarComponentProps { };

const NavbarComponent: React.FunctionComponent<INavbarComponentProps> = props => {
    return (
        <div className="navbar">
            <Link to="/Portfolio/bio">Bio</Link><br />
            <Link to="/Portfolio/project">Project</Link><br />
            <Link to="/Portfolio/contact">Contact</Link><br />
        </div>
    );
}

export default NavbarComponent;