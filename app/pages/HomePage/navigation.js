import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SweetAlert from 'react-bootstrap-sweetalert';
import history from '../../history.js';

const logoStyle = {
    height: 50,
    width: 50,
    margin: '10px 10px 10px 50px'
};

const iconstyle = {
    margin: '15px'
};

const navButtons = () => (<div className="col s5">
    <ul className="right hide-on-med-and-down noMarginTop">
        <li ><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>SignUp</Link></li>
    </ul>
</div>);

const navButtonsWithAuth = (username, logoutconfirmationAlert) => (<div className="col s5">
    <ul className="right hide-on-med-and-down noMarginTop">
        <li><Link to='/tutorform'><small>Become a tutor</small> </Link></li>
        <li className="text-name">Hi, {username}</li>
        <li><a onClick={logoutconfirmationAlert}>Logout</a></li>
    </ul>
</div>);

const navButtonsTutor = (username, logoutconfirmationAlert) => (<div className="col s5">
    <ul className="right hide-on-med-and-down noMarginTop">
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li className="text-name">Hi, {username}</li>
        <li><a onClick={logoutconfirmationAlert}>Logout</a></li>
    </ul>
</div>);

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            alert: null
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.logoutconfirmationAlert = this.logoutconfirmationAlert.bind(this);
        this.hideAlert = this.hideAlert.bind(this);
        this.handleSearchValue = this.handleSearchValue.bind(this);
        this.navLinks = !localStorage.getItem('AUTH_USER') ? navButtons() : navButtonsWithAuth(localStorage.getItem('AUTH_USER'), this.handleLogout);
    }

    logoutconfirmationAlert() {
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Confirm"
                confirmBtnBsStyle="danger"
                cancelBtnBsStyle="default"
                title="Logout"
                onConfirm={this.handleLogout}
                onCancel={this.hideAlert}
            >
                Are you sure you want to logout?
            </SweetAlert>
        );

        this.setState({
            alert: getAlert()
        });
    }

    hideAlert() {
        console.log('Hiding alert...');
        this.setState({
            alert: null
        });
    }
    componentDidMount() {
        const steps = [
            {
                title: 'Serach for Courses',
                text: 'You can enter keywords and search for courses you like.',
                selector: '.nav-fixed .nav-wrapper .row',
                position: 'bottom',
                type: 'hover',
                style: {
                    backgroundColor: '#f07b50',
                    borderRadius: 0,
                    color: '#fff',
                    mainColor: '#fff',
                    textAlign: 'center',
                    beacon: {
                        inner: '#f07b50',
                        outer: '#f07b50',
                    },
                },
            },
        ];

        this.props.addSteps(steps);
    }

    render() {
        console.log('local', localStorage.getItem('AUTH_USER'));
        this.navLinks = !localStorage.getItem('AUTH_USER') ? navButtons() : localStorage.getItem('IS_TUTOR') ? navButtonsTutor(localStorage.getItem('AUTH_USER'), this.logoutconfirmationAlert) : navButtonsWithAuth(localStorage.getItem('AUTH_USER'), this.logoutconfirmationAlert);
        return (
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
                            <div className="col s4">
                                <div className="row">
                                    <div className="col s10">
                                        <SearchBar handleSearchValue={this.handleSearchValue} />
                                    </div>
                                    <Link to={{ pathname: '/course', query: { cid: this.state.searchValue } }} className="material-icons" style={iconstyle}>search</Link>
                                </div>
                            </div>
                            <div>
                                {this.navLinks}
                                {this.state.alert}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

    handleLogout() {
        this.setState({
            navLinks: navButtons(),
            alert:null
        })
        localStorage.removeItem('AUTH_USER');
        localStorage.getItem('IS_TUTOR') && localStorage.removeItem('IS_TUTOR');
        history.push('/');
    }

    handleSearchValue(cid) {
        this.setState({
            searchValue: cid
        })
    }
}