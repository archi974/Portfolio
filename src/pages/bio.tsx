import React from 'react';
import NavbarComponent from '../component/Navbar/Navbar';
import LinkComp from '../component/LinkComp/linkComp';
import BackgroundVideo from "../component/BackgroundVideo/backgroundVideo";
import "./scss/bio.css"

export interface IBioPageProps { };

const BioPage: React.FunctionComponent<IBioPageProps> = props => {

    return (
        <div>
            <NavbarComponent />
            <div className="bio-page">
                <div className="hero">
                    <div className="hero-title">
                        <h1>Vincent K/BIDI</h1>
                        <p>BACKEND/FRONTEND DEVELOPER</p>
                    </div>
                    <BackgroundVideo />
                </div>
                <div className="divider-top-container">
                    <div className="divider"></div>
                </div>
                <div className="container-bio">
                    <div className="container-link-bio">
                        <h3>Compétences</h3>
                        <LinkComp />
                        <button>
                            <a href="https://github.com/archi974" target="_blank" rel="noopener noreferrer">
                                <img src="https://api.iconify.design/logos:github-octocat.svg" alt="Logo GitHub" title="Mon GitHub" />
                            </a>
                        </button>
                    </div>
                </div>
                <div className="divider-bottom-container">
                    <div className="divider"></div>
                </div>
                <div className="journey">
                    <div className="experience">
                        <h2>Expérience professionnel</h2>

                        <h3>Assistant pédagogique</h3>
                        <p>ISG / Epitech - Kremlin-Bicêtre 2021</p>
                        <p>- Aide à l'apprentissage du code HTML/JQuery</p>
                        <p>- Etudiants de 1re et 2e année</p>

                        <h3>Compétiteur</h3>
                        <p>Hackathon CDS Group - Paris 2021</p>
                        <p>- Objectif : améliorer le système de recherche d'hôtels</p>
                        <p>- Missions : Elaboration et intégration d'une maquette et découverte de l'API</p>

                        <h3>Stagiaire en mécanique automobile</h3>
                        <p>Fast Car Cachan</p>
                        <p>janvier 2020 - mars 2020</p>
                        <p>- Réparation véhicules particuliers et utilitaires</p>
                        <p>- Accueil et relation clients</p>

                        <h3>Employé polyvalent en restauration rapide</h3>
                        <p>Mac donald's Cachan</p>
                        <p>mai - octobre 2018</p>
                        <p>- Accueil et service client</p>
                        <p>- Tenue de caisse</p>
                        <p>- confection des livraisons (drive, guichet...)</p>
                        <p>- Entretien de la salle</p>
                    </div>
                    <div className="education">
                        <h2>Education</h2>

                        <h3>Web@cadémie</h3>
                        <p>Développeur intégrateur web 2021 - 2023</p>
                        <p>Préparation d'un diplôme Bac+2, titre RNCP de niveau 5</p>

                        <h3>BTS système numérique</h3>
                        <p>Lycée Roland Garros - La Réunion - 2015 - 2017</p>
                        <p>- Langage arduino (dérivé C/C++)</p>
                        <p>- Réseaux</p>
                        <p>- HTML/CSS</p>

                        <h3>Baccalauréat STI2D</h3>
                        <p>Lycée Roland Garros - La Réunion - 2015</p>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default BioPage;