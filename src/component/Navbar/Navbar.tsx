import React from 'react';
import { Link } from 'react-router-dom';
import 'navbar.css';

export interface INavbarComponentProps { };

const NavbarComponent: React.FunctionComponent<INavbarComponentProps> = props => {
    return (
        <div>
            <Link to="/bio">Bio</Link><br />
            <Link to="/project">Project</Link><br />
            <Link to="/contact">Contact</Link><br />
        </div>
    );
}

export default NavbarComponent;