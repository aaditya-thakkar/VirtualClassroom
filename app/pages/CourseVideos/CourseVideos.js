import React from 'react';
import VideoPlayer from '../../Components/VideoPlayer';
import VideoList from '../../Components/VideoList';
import _ from 'lodash';
const axios = require('axios');

const getLiveRoom = () => {
    return axios.get('http://localhost:8081/courses')
        .then(response => {
            console.log(response.data);
            return _.keyBy(response.data, 'cid');
        })
        .catch(error => {
            console.log(error);
        });
};

const handleLiveClassroom = (cid) => {
    return getLiveRoom().then(rooms => {
        const link = rooms[cid].liveChannel;
        const path = `https://appear.in/${link}`;
        const win = window.open(path, '_blank');
        win.focus();
    });
};

export default class CourseVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const cid = _.get(this.props, 'location.query.cid', '');
        return (
            <div>
                <div className="row">                        
                        <div className="col s9 mt80">
                            <VideoPlayer index={this.state.index} />
                            <center><button onClick={_.partial(handleLiveClassroom, cid)} className="btn waves-effect waves-light button-live">Enter a live classroom</button></center>
                        </div>
                        <div className="col s3 mt70">
                            <VideoList handleClick={this.handleClick} />
                        </div>
                </div>
            </div>
        );
    }

    handleClick(i) {
        console.log('come here', i);
        this.setState({
            index: i
        });
    }
};