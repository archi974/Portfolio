import React from 'react';
import Navbar from '../components/navbar/navbar';
import Logo from "../assets/AvatarMaker.png";
import LinkComp from '../components/linkComp';
import "../pages/scss/bio.css";

export default function Bio() {
    return (
        <div>
            <Navbar />
            <div className="profile_image">
                <img src={Logo} alt="profil image" />
                <h1>Vincent K/BIDI</h1>
                <div>
                    <h2>FRONTEND / BACKEND DEVELOPER</h2>
                </div>
                <div>
                    <a href="https://github.com/archi974" target="_blank">GitHub<img src="https://api.iconify.design/logos:github-octocat.svg" alt="Logo GitHub" /></a>
                    <h3>Compétence</h3>
                    <LinkComp />
                </div>
            </div>
        </div>
    )
}