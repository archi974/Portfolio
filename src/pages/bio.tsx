import React from 'react';
import NavbarComponent from '../component/Navbar/Navbar';
// import Logo from "../assets/AvatarMaker.png";
import LinkComp from '../component/LinkComp/linkComp';
import "./scss/bio.css";

export interface IBioPageProps { };

const BioPage: React.FunctionComponent<IBioPageProps> = props => {

    return (
        <div>
            <NavbarComponent />
            <div className="bio-page">
                <div className="hero">
                    <h1>Vincent K/BIDI</h1>
                    <p>BACK/FRONTEND DEVELOPER</p>
                </div>
                {/* <img src={Logo} alt="profil image" /> */}
                <div className="container-bio">
                    <button>
                        <a href="https://github.com/archi974" target="_blank" rel="noopener noreferrer">
                            <img src="https://api.iconify.design/logos:github-octocat.svg" alt="Logo GitHub" />
                        </a>
                    </button>
                    <h3>Compétence</h3>
                    <LinkComp />
                </div>
            </div>
        </div>
    );
}

export default BioPage;