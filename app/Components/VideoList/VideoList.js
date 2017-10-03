import React from 'react';
import COURSE_VIDEOS from './course_videos.js';
import VideoCard from '../../Components/VideoCard';

export default class VideoList extends React.Component {
    render() {
        return (
            <div className="column card-align">
                {COURSE_VIDEOS[this.props.cid.toString()].mediaList.map((item,i) => {
                    return (<div key={i}>
                            <VideoCard handleClick={this.props.handleClick} course={item} />
                        </div>
                    )
                })}
            </div>
        );
    }
}