import React from 'react';
import "./backgroundVideo.scss";

export interface IBackgroundVideoProps { };

const backgroundVideo: React.FunctionComponent<IBackgroundVideoProps> = props => {

    return (
        <div className="container-video">
            <video id="backgroundVideo" autoPlay muted loop>
                <source src="background_video.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default backgroundVideo;