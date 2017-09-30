import React from 'react';
import { Link } from 'react-router-dom';

const logoStyle = {
    height: 100,
    width: 100,
    margin: '10px 10px 10px 50px'
};

export default class Navigation extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <img src="/app/pages/HomePage/course-images/logo.png" style={logoStyle} className="brand-logo" />
                        <ul className="right hide-on-med-and-down">
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signup'>SignUp</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}