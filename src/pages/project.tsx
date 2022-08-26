import React, { useEffect } from 'react';
import NavbarComponent from '../component/Navbar/Navbar';
// import BackgroundVideo from "../component/ProjectVideo/projectVideo";
import "./scss/project.css";

export interface IProjectPageProps { };

const ProjectPage: React.FunctionComponent<IProjectPageProps> = props => {

    return (
        <div className="body-project">
            <NavbarComponent />
            <div className="project-page">
                <h1>Project</h1>
                <div className="project-container">
                    <div className="project-bloc">
                        <div className="bloc-left">
                            <h2>PreviouslyOn</h2>
                            <div className="project-element-left">
                                <a href="https://github.com/archi974/PreviouslyOn" target="_blank">
                                    <video loop preload="none" width="350" controlsList="nofullscreen" autoPlay muted>
                                        <source src="PreviouslyOn.mp4" type="video/mp4" />
                                    </video>
                                </a>
                                <div className="project_resume">
                                    <h3>Résumé :</h3>
                                    <p>Groupe de 2 personnes</p>
                                    <p>Un outil pour gérer les séries, les détails de chaque épisode, sur quel plateforme la voir et le statut du compte (terminer/en cours/a voir)</p>
                                    <h3>Langage utiliser :</h3>
                                    <p>JavaScript/React/NodeJs/HTML/Css</p>
                                </div>

                            </div>
                        </div>
                        <div className="bloc-right">
                            <h2>Framework scss</h2>
                            <div className="project-element-right">
                                <a href="https://github.com/archi974/Framework-scss" target="_blank">
                                    <video loop preload="none" width="350" controlsList="nofullscreen" autoPlay muted>
                                        <source src="FrameworkScss.mp4" type="video/mp4" />
                                    </video>
                                </a>
                                <div className="project_resume">
                                    <h3>Résumé :</h3>
                                    <p>Réaliser seul</p>
                                    <p>Site qui rassemble tout un thème de design pour réaliser un site responsive plus rapidement</p>
                                    <h3>Langage utiliser :</h3>
                                    <p>HTML/Css/Sass</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-bloc">
                        <div className="bloc-left">
                            <h2>My Wysiwyg</h2>
                            <div className="project-element-left">
                                <a href="https://github.com/archi974/My_Wysiwyg" target="_blank">
                                    <video loop preload="none" width="350" controlsList="nofullscreen" autoPlay muted>
                                        <source src="MyWysiwyg.mp4" type="video/mp4" />
                                    </video>
                                </a>
                                <div className="project_resume">
                                    <h3>Résumé :</h3>
                                    <p>Groupe de 3 personnes</p>
                                    <p>éditeur de texte sous forme de module javascript, permet de générer du code HTML de manière visuelle</p>
                                    <h3>Langage utiliser :</h3>
                                    <p>Jquery/JavaScript/PHP/HTML/Css</p>
                                </div>

                            </div>
                        </div>
                        <div className="bloc-right">
                            <h2>Css Generator</h2>
                            <div className="project-element-right">
                                <a href="https://github.com/archi974/css_generator" target="_blank">
                                    <video loop preload="none" width="350" controlsList="nofullscreen" autoPlay muted>
                                        <source src="CssGenerator.mp4" type="video/mp4" />
                                    </video>
                                </a>
                                <div className="project_resume">
                                    <h3>Résumé :</h3>
                                    <p>Réaliser seul</p>
                                    <p>Crée une image en assemblant toutes les images trouver dans un dossier, génère également un fichier css qui contient toutes les modifications apporté à la création de l'image</p>
                                    <h3>Langage utiliser :</h3>
                                    <p>PHP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;