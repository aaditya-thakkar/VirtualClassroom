import React from 'react';
import { Link } from 'react-router-dom';

export default class Introduction extends React.Component {
    render(){
        return(
            <div>
                <div className="home-img">
                    <div className="text-over">
                        <h2>Learn From The Experts.</h2>
                        <Link to='/signup' className="waves-effect waves-light btn">Get Started</Link>
                    </div>

                </div>
            </div>
        );
    }
}