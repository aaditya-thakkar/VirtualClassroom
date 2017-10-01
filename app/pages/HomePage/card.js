import React from 'react';
import { Link } from 'react-router-dom';

// const avatarStyle = {
//     backgroundImage: `url(${Background})`
// };

export default class Card extends React.Component {
    render() {
        return (
            <div>
                <Link to='/course'>
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.course.image} />
                            <span className="card-title">{this.props.course.name}</span>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
