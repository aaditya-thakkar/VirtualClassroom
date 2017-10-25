import React from 'react';
import { Link } from 'react-router-dom';
import AlertContainer from 'react-alert'
import validateCredentials from './Loginvalidation';
import history from '../../history.js';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.alertOptions = {
            offset: 14,
            position: 'top right',
            theme: 'dark',
            time: 5000,
            transition: 'scale'
        }
        this.onEmailChange = this.onEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.showAlert = this.showAlert.bind(this);
    }

    

    showAlert () {
        this.msg.error('Username or Password is invalid', {
            time: 4000,
            type: 'error'
        })
    }

    render() {
        if (localStorage.getItem('AUTH_USER')) history.goBack();
        return (
            <div className="body">
                <div className="section"></div>
                <main>
                    <center>
                        <div className="section"></div>

                        <h5>Please, login into your account</h5>
                        <div className="section"></div>

                        <div className="container">
                            <div className="z-depth-1 grey lighten-4 row" style={{ display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE" }}>
                                <div className='row'>
                                    <div className='col s12'>
                                        <div>
                                            <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input
                                            className='validate'
                                            onChange={this.onEmailChange}
                                            value={this.state.email}
                                            ref='email'
                                            type='email'
                                            name='email'
                                            id='email'
                                        />
                                        <label htmlFor='email'>Enter your email</label>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input
                                            className='validate'
                                            onChange={this.onPasswordChange}
                                            value={this.state.password}
                                            ref='password'
                                            type='password'
                                            name='password'
                                            id='password'
                                        />
                                        <label htmlFor='password'>Enter your password</label>
                                    </div>
                                    <label style={{ float: "right" }}>
                                        <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                                    </label>
                                </div>

                                <br />
                                <center>
                                    <div className='row'>
                                        <button onClick={this.handleSubmit} type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Login</button>
                                    </div>
                                </center>
                            </div>
                        </div>
                        <Link className="create-acc" to='/signup'>Create account</Link>
                    </center>

                    <div className="section"></div>
                    <div className="section"></div>
                </main>
            </div>
        );
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleSubmit() {
        console.log(this.state.email, this.state.password);
        validateCredentials(this.state.email, this.state.password).then(users => {
            console.log(users);
            if (users[this.state.email.toString()].password === this.state.password) {
                console.log("user is validated");
                localStorage.setItem('AUTH_USER', this.state.email.toString());
                if (users[this.state.email.toString()].istutor === "true") {
                    localStorage.setItem('IS_TUTOR', "true");
                }
                history.goBack();

            } else {
                console.log("user is not validated");
                this.showAlert();
                history.push('/login');
            }
        }, () => {
            this.setState({
                email: '',
                password: ''
            })
        });


    }
}