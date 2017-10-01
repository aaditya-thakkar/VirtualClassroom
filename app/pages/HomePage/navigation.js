import React from 'react';
import { Link } from 'react-router-dom';

const logoStyle = {
    height: 50,
    width: 50,
    margin: '10px 10px 10px 50px'
};

export default class Navigation extends React.Component {
    render(){
        return(
            <div className="nav-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <div className="row">
                        <div className="col s1">
                            <img src="/app/pages/HomePage/course-images/logo.png" style={logoStyle} className="brand-logo" />
                        </div>
                        <div className="col s2 nav-text">
                            Say my name :P!
                        </div>
                        <div className="col s5">
                            <div className="row">
                                <div className="col s10">
                                    <input className="search-input"></input>
                                </div>
                                
                                <button class="material-icons">search</button>

                            </div>
                        </div>
                        <div className="col s4">
                            <ul className="right hide-on-med-and-down">
                                <li><Link to='/'>About</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/signup'>SignUp</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}