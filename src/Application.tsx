import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BioPage from './pages/Bio';
import ProjectPage from './pages/Project';
import ContactPage from './pages/Contact';
// import './App.css';

export interface IApplicationProps { };

const Application: React.FunctionComponent<IApplicationProps> = props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BioPage />}>
                    <Route index element={<BioPage />} />
                    <Route path="/bio" element={<BioPage />} />
                </Route>
                <Route path='/project' element={<ProjectPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;