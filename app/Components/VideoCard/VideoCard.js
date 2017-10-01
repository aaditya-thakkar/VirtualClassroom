import React from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

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
            <Jumbotron className="video-jumbo" onClick={this.handleClick}>
                <div className="video-card">
                    <div className="row">
                        <div className="col s6">
                            <div className="video-card-image">
                                <img src={this.props.course.poster_image} />
                            </div>
                        </div>
                        <div className="col s6">
                            <div className='video-detail'>
                                <h6 className="video-heading">{this.props.course.name}</h6>
                                <p style={{textAlign: 'left'}}>{this.props.course.duration}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }

    handleClick() {
        console.log('click');
        this.props.handleClick(this.props.course.index);
    }
};
