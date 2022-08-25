import React from 'react';
import "./projectVideo.scss";

export interface IProjectVideoProps { };

const projectVideo: React.FunctionComponent<IProjectVideoProps> = props => {

    return (
        <div className="container-video">
            <video id="projectVideo" autoPlay muted loop>
                <source src="background_video.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default projectVideo;