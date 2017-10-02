import React from 'react';
import { Link } from 'react-router-dom';

const logoStyle = {
    height: 50,
    width: 50,
    margin: '10px 10px 10px 50px'
};

const navButtons = () => (<div className="col s4">
                        <ul className="right hide-on-med-and-down">
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signup'>SignUp</Link></li>
                        </ul>
                    </div>);

const navButtonsWithAuth = (username, handleLogout) => (<div className="col s4">
    <ul className="right hide-on-med-and-down">
        <li><Link to='/'>About</Link></li>
        <li>Hi, {username}</li>
        <li><Link to='/' onClick={handleLogout}>Logout</Link></li>
    </ul>
</div>);

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.navLinks = !localStorage.getItem('AUTH_USER') ? navButtons() : navButtonsWithAuth(localStorage.getItem('AUTH_USER'), this.handleLogout);
    }

    render(){
        console.log('local', localStorage.getItem('AUTH_USER'));
        this.navLinks = !localStorage.getItem('AUTH_USER') ? navButtons() : navButtonsWithAuth(localStorage.getItem('AUTH_USER'), this.handleLogout);
        return(
            <div className="nav-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <div className="row">
                            <div>
                                <Link to='/'>
                                    <div className="col s1">
                                        <img src="/app/pages/HomePage/course-images/logo.png" style={logoStyle} className="brand-logo" />
                                    </div>
                                    <div className="col s2 nav-text">
                                        DistEdu
                                    </div>
                                </Link>
                            </div>
                        <div className="col s5">
                            <div className="row">
                                <div className="col s10">
                                    <input className="search-input"></input>
                                </div>
                                <button className="material-icons">search</button>
                            </div>
                        </div>
                        <div>
                            {this.navLinks}
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

    handleLogout() {
        localStorage.removeItem('AUTH_USER');
        this.setState({
            navLinks: navButtons()
        })
    }
}