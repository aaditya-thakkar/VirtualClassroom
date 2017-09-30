import React from 'react';

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
                            <li><a href="sass.html">About</a></li>
                            <li><a href="badges.html">Login</a></li>
                            <li><a href="collapsible.html">SignUp</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}