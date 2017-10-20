import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div style={{ background: 'linear-gradient(to right bottom, rgb(247, 247, 247), rgb(234, 251, 255))' }}>
                <div className="home-img">
                    <div className="text-over">
                        <h2>Start Building your Future</h2>
                    </div>
                </div>
                <div className="about-description">
                    <h3>Our Mission</h3>
                    <p>Increase access to high-quality education for everyone, everywhere<br />
Enhance teaching and learning on campus and online<br />
Advance teaching and learning through research</p>
                </div>
            </div>
        )
    }
}