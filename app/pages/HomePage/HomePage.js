import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

const logoStyle = {
    height: 100,
    width: 100,
    margin: '10px 10px 10px 10px'
};

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className={"col-md-2"}>
                    <img src="http://ias.daiict.ac.in/2017/assets/logos/daiictlogo.jpeg" style={logoStyle}/>
                </div>
                <div className="col-md-6">
                <input
                    type="text"
                    placeholder="Search..."
                    ref="filterTextInput"
                />
                </div>
                <div className="col-md-4">
                    <Link to={'/login'}><button
                        className="btn btn-default"
                        style={buttonStyle}
                    >Login</button></Link>
                    <Link to={'/signup'}><button
                        className="btn btn-default"
                        style={buttonStyle}
                    >Sign Up</button></Link>
                </div>
            </div>
        );
    }
}