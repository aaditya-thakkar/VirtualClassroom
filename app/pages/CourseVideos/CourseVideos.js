import React from 'react';
import VideoPlayer from '../../Components/VideoPlayer';
import VideoList from '../../Components/VideoList';
import { Container, Row, Col } from 'reactstrap';

export default class CourseVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <div className="row">                        
                        <div className="col s9 mt80">
                            <VideoPlayer index={this.state.index} />
                        </div>
                        <div className="col s3 mt70">
                            <VideoList handleClick={this.handleClick} />
                        </div>
                </div>
            </div>
        );
    }

    handleClick(i) {
        console.log('come here', i)
        this.setState({
            index: i
        });
    }
};