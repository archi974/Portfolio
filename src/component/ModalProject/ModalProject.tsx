import React, { useState } from 'react';
import './modalProject.css';
import Modal from 'react-modal';

export interface INavbarComponentProps { };

const NavbarComponent: React.FunctionComponent<INavbarComponentProps> = props => {

    function video(test: number) {
        if (test = 0) {
            let truc = "PreviouslyOn.mp4";
            return truc;
            // ["PreviouslyOn.mp4", "FrameworkScss.mp4", "MyWysiwyg.mp4", "CssGenerator.mp4"]
        } else if (test = 1) {
            let truc = "FrameworkScss.mp4";
            return truc;
        }
    }
    const [modalIsOpen, setIsOpen] = React.useState(false);
    Modal.setAppElement('#root')
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div>
            <div onClick={openModal}>
                <video muted autoPlay loop controlsList="nofullscreen" preload="none" width="350">
                    <source src="PreviouslyOn.mp4" type="video/mp4" />
                </video>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='modal'
                contentLabel="Example Modal"
            >
                <video muted autoPlay loop controlsList="fullScreen" preload="none" width="850">
                    <source src="PreviouslyOn.mp4" type="video/mp4" />
                </video>
            </Modal>
        </div>
    );
}
export default NavbarComponent;