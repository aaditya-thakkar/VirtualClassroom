import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';
import Introduction from './introduction';
import Courses from './courses';


const buttonStyle = {
    margin: '25px 10px 10px 0'
};

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <div>
                    <Introduction />
                </div>
                <br /><br /><br /><br /><br /><br />
                <div>
                    <Courses />
                </div>
            </div>
        );
    }
}

{/*}  <div className={"col-md-2 inline-div"}>
                    <img src="http://ias.daiict.ac.in/2017/assets/logos/daiictlogo.jpeg" style={logoStyle} />
                </div>
                <div className="col-md-6 inline-div">
                    <div id="custom-search-input" style={buttonStyle}>
                        <div className="input-group col-md-12">
                            <input type="text" className="  search-query form-control" placeholder="Search" />
                            <span className="input-group-btn">
                                <button className="btn btn-danger indigo" type="button">
                                    <span className=" glyphicon glyphicon-search"></span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 inline-div">
                    <Link to={'/login'}><button
                        className="btn btn-default waves-effect indigo"
                        style={buttonStyle}
                    >Login</button></Link>
                    <Link to={'/signup'}><button
                        className="btn btn-default waves-effect indigo"
                        style={buttonStyle}
                    >Sign Up</button></Link>
                </div>*/}