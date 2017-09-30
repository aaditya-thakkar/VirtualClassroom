import React from 'react';

// const avatarStyle = {
//     backgroundImage: `url(${Background})`
// };

export default class Card extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.course.image} />
                        <span className="card-title">{this.props.course.name}</span>
                    </div>
                </div>
            </div>
        );
    }
}


// style={{backgroundImage: "url('/course-images/home.jpg')"}}