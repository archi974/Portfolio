import React from 'react';
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
                <div>
                    <h2>PreviouslyOnVue</h2>
                    <div></div>
                </div>
                <div>
                    <h2>Framework scss</h2>
                    <div></div>
                </div>
                <div>
                    <h2>My Wysiwyg</h2>
                    <div></div>
                </div>
                <div>
                    <h2>Css Generator</h2>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;