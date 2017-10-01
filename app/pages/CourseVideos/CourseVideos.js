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
                <Container>
                    <Row>
                        <Col xs="2" />
                        <Col xs="5">
                            <VideoPlayer index={this.state.index} />
                        </Col>
                        <Col>
                            <VideoList handleClick={this.handleClick} />
                        </Col>
                    </Row>
                </Container>
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