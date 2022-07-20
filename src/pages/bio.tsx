import React from 'react';
import NavbarComponent from '../component/Navbar/Navbar';
// import Logo from "../assets/AvatarMaker.png";
import LinkComp from '../component/linkComp';
import "./scss/bio.css";

export interface IBioPageProps { };

const BioPage: React.FunctionComponent<IBioPageProps> = props => {

    return (
        <div>
            <NavbarComponent />
            <div className="bio-page">
                <div className="hero">
                    <h1>Vincent K/BIDI</h1>
                    <h2>FRONTEND / BACKEND DEVELOPER</h2>
                </div>
                {/* <img src={Logo} alt="profil image" /> */}
                <div className="container-bio">
                    <a href="https://github.com/archi974" target="_blank">
                        GitHub
                        <img src="https://api.iconify.design/logos:github-octocat.svg" alt="Logo GitHub" />
                    </a>
                    <h3>Compétence</h3>
                    <LinkComp />
                </div>
            </div>
        </div>
    );
}

export default BioPage;