import React from 'react';
import { Tabs, Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
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
            index: 0,
            key: 3,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(key) {
        this.setState({ key });
    }

    render() {
        const cid = _.get(this.props, 'location.query.cid', '');
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="clearfix">
                    <Col sm={2}>
                        <Nav bsStyle="pills" stacked>
                            <NavItem eventKey="first">
                                Shared Whiteboard
                            </NavItem>
                            <NavItem eventKey="second">
                                Live Classroom
                            </NavItem>
                            <NavItem eventKey="third">
                                Recorded Lectures
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first">
                                <div style={{ marginTop: 100 }}>
                                    <center>
                                        <embed height={700} width={1000} src="https://whiteboardfox.com/8432-4147-4539" />
                                    </center>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div style={{ marginTop: 100 }}>
                                    <center>
                                        <embed height={700} width={1000} src="https://appear.in/aaditya-thakkar" />
                                    </center>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div className="row">
                                    <div className="col s8 mt80">
                                        <VideoPlayer cid={cid} index={this.state.index} />
                                        <center><button onClick={_.partial(handleLiveClassroom, cid)} className="btn waves-effect waves-light button-live">Enter a live classroom</button></center>
                                    </div>
                                    <div className="col s4 mt70">
                                        <VideoList cid={cid} handleClick={this.handleClick} />
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }

    handleClick(i) {
        console.log('come here', i);
        this.setState({
            index: i
        });
    }
};