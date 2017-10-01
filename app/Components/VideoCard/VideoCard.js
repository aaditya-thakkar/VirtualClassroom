import React from 'react';
import { Row, Col } from 'reactstrap';

// const avatarStyle = {
//     backgroundImage: `url(${Background})`
// };

export default class VideoCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                <div className="video-card">
                    <Row>
                        <Col>
                            <div className="video-card-image">
                                <img src={this.props.course.poster_image} />
                            </div>
                        </Col>
                        <Col>
                            <div className='video-detail'>
                                <h6>{this.props.course.name}</h6>
                                <p>{this.props.course.duration}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </button>
        );
    }

    handleClick() {
        console.log('click');
        this.props.handleClick(this.props.course.index);
    }
};
