import React from 'react';
import { Player, BigPlayButton, LoadingSpinner, ControlBar, ReplayControl, PlaybackRateMenuButton } from 'video-react';
import COURSE_VIDEOS from '../VideoList/course_videos.js';

export default class VideoPlayer extends React.Component {
    render() {
        const source = COURSE_VIDEOS[this.props.cid.toString()].mediaList[this.props.index].url;
        return (
            <Player src={source}>
                <BigPlayButton position="center" />
                <LoadingSpinner />
                <ControlBar autoHide={false}>
                    <ReplayControl seconds={5} order={2.1} />
                    <ReplayControl seconds={10} order={2.2} />
                    <ReplayControl seconds={30} order={2.3} />
                    <PlaybackRateMenuButton
                        rates={[5, 3, 1.5, 1, 0.5, 0.1]}
                        order={7.1}
                    />
                </ControlBar>
            </Player>
        );
    }
};