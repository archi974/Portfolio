import React from 'react';
import NavbarComponent from '../component/Navbar/Navbar';
import "./scss/project.css";

export interface IProjectPageProps { };

const ProjectPage: React.FunctionComponent<IProjectPageProps> = props => {

    return (
        <div>
            <NavbarComponent />
            <div>
                <h1>Project</h1>
                <div>
                    <h2>PreviouslyOnVue</h2>
                    <div></div>
                </div>
                <div>
                    <h2>Framework scss</h2>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;