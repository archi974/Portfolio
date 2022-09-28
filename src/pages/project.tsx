import React, { useState } from 'react';
import NavbarComponent from '../component/Navbar/Navbar';
import "./scss/project.css";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        background: 'rgba(28, 43, 74, 0.8)',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

export interface IProjectPageProps { };

const ProjectPage: React.FunctionComponent<IProjectPageProps> = props => {
    const [modalUnIsOpen, setModalUnIsOpen] = React.useState(false);
    const [modalDeuxIsOpen, setModalDeuxIsOpen] = React.useState(false);
    const [modaltroisIsOpen, setModalTroisIsOpen] = React.useState(false);
    const [modalquatreIsOpen, setModalQuatreIsOpen] = React.useState(false);

    const projet = [{
        modal: () => openModal("PreviouslyOn"),
        isOpen: modalUnIsOpen,
        coin: "bloc left",
        title: "PreviouslyOn",
        video: "PreviouslyOn.mp4",
        groupe: "groupe de 2 personnes",
        resume: "Un outil pour gérer les séries, les détails de chaque épisode, sur quel plateforme la voir et le statut du compte (terminer/en cours/a voir)",
        langage: "JavaScript/React/NodeJs/HTML/Css",
        lienGit: "https://github.com/archi974/PreviouslyOn"
    },
    {
        modal: () => openModal("Framework Scss"),
        isOpen: modalDeuxIsOpen,
        coin: "bloc right",
        title: "Framework Scss",
        video: "FrameworkScss.mp4",
        groupe: "groupe de 3 personnes",
        resume: "Un outil pour gérer les séries, les détails de chaque épisode, sur quel plateforme la voir et le statut du compte (terminer/en cours/a voir)",
        langage: "JavaScript/React/NodeJs/HTML/Css",
        lienGit: "https://github.com/archi974/Framework-scss"
    }, {
        modal: () => openModal("My Wysiwyg"),
        isOpen: modaltroisIsOpen,
        coin: "bloc left",
        title: "My Wysiwyg",
        video: "MyWysiwyg.mp4",
        groupe: "groupe de 3 personnes",
        resume: "éditeur de texte sous forme de module javascript, permet de générer du code HTML de manière visuelle",
        langage: "Jquery/JavaScript/PHP/HTML/Css",
        lienGit: "https://github.com/archi974/My_Wysiwyg"
    }, {
        modal: () => openModal("Css Generator"),
        isOpen: modalquatreIsOpen,
        coin: "bloc right",
        title: "Css Generator",
        video: "CssGenerator.mp4",
        groupe: "Réaliser seul",
        resume: "Crée une image en assemblant toutes les images trouver dans un dossier, génère également un fichier css qui contient toutes les modifications",
        langage: "PHP",
        lienGit: "https://github.com/archi974/css_generator"
    }]

    Modal.setAppElement('#root')
    function openModal(valueModal: string) {
        switch (valueModal) {
            case "PreviouslyOn":
                setModalUnIsOpen(true);
                break;
            case "Framework Scss":
                setModalDeuxIsOpen(true);
                break;
            case "My Wysiwyg":
                setModalTroisIsOpen(true)
                break;
            case "Css Generator":
                setModalQuatreIsOpen(true)
                break;
            default:
                break;
        }
    }
    function closeModal() {
        setModalUnIsOpen(false);
        setModalDeuxIsOpen(false);
        setModalTroisIsOpen(false);
        setModalQuatreIsOpen(false);
    }

    return (
        <div className="body-project">
            <NavbarComponent />
            <div className="project-page">
                <div className="hero">
                    <div className="hero-title">
                        <h1>Project</h1>
                    </div>
                    <div className="container-image">
                        <img src="wallpaper_project.jpeg" alt="fond d'écran de neige" />
                    </div>
                </div>
                <div className="divider-container">
                    <div className="divider"></div>
                </div>
                <div className="project-container">
                    <div className="project-bloc">
                        {
                            projet.map((value, i) => (
                                <div key={i} className={value.coin}>
                                    <h2>{value.title}</h2>
                                    <div className="project-element">
                                        <div onClick={value.modal} >
                                            <div className="project-video">
                                                <video muted autoPlay loop controlsList="nofullscreen" preload="none" width="350">
                                                    <source src={value.video} type="video/mp4" />
                                                </video>
                                            </div>
                                        </div>
                                        <Modal
                                            isOpen={value.isOpen}
                                            onRequestClose={closeModal}
                                            style={customStyles}
                                            contentLabel="Example Modal"
                                        >
                                            <video muted autoPlay loop controlsList="fullScreen" preload="none" width="850">
                                                <source src={value.video} type="video/mp4" />
                                            </video>
                                        </Modal>
                                        <div className="project_resume">
                                            <h3>Résumé :</h3>
                                            <p>{value.groupe}</p>
                                            <p>{value.resume}</p>
                                            <h3>Langage utiliser :</h3>
                                            <p>{value.langage}</p>
                                            <a href={value.lienGit} target="_blank">
                                                Github
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--system-uicons" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18.5 8.5v-5h-5m5 0l-7 7m-1-7h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4"></path></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
        </div >

    );
}

export default ProjectPage;