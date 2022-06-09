import React from 'react';
import Navbar from '../components/navbar/navbar';
import Logo from "../assets/AvatarMaker.png";
import "../pages/scss/bio.css";

export default function Bio() {
    return (
        <div>
            <Navbar />
            <div className="profile_image">
                <img src={Logo} alt="profil image" />
            </div>
        </div>
    )
}