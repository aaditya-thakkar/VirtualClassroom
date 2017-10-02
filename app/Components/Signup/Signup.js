import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../history.js';
import addUser from './SignupHandler';
export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            cpassword: '',
            username: '',
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onCPasswordChange = this.onCPasswordChange.bind(this);
    }

    render() {
        if (localStorage.getItem('AUTH_USER')) history.goBack();
        return (
            <div className="body">
                <div className="section"></div>
                <main>
                    <center>
                        <div className="section"></div>

                        <h5>Create a new account</h5>
                        <div className="section"></div>

                        <div className="container">
                            <div className="z-depth-1 grey lighten-4 row" style={{display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE"}}>

                                    <div className='row'>
                                        <div className='col s12'>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input
                                                className='validate'
                                                onChange={this.onUsernameChange}
                                                value = {this.state.username}
                                                type='text'
                                                name='fullname'
                                                id='fullname'
                                            />
                                            <label htmlFor='fullname'>Username</label>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input
                                                className='validate'
                                                onChange={this.onEmailChange}
                                                value = {this.state.email}
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
                                                value = {this.state.password}
                                                type='password'
                                                name='password'
                                                id='password'
                                            />
                                            <label htmlFor='password'>Enter your password</label>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input
                                                className='validate'
                                                onChange={this.onCPasswordChange}
                                                value = {this.state.cpassword}
                                                type='password'
                                                name='password'
                                                id='confirmpassword'
                                            />
                                            <label htmlFor='confirmpassword'>Confirm password</label>
                                        </div>
                                        <label style={{float: "right"}}>
                                            <a className='pink-text' href='#!'><b>Passwords should match</b></a>
                                        </label>
                                    </div>



                                    <br />
                                    <center>
                                        <div className='row'>
                                            <button type='submit' onClick={this.handleSubmit} name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Sign Up</button>
                                        </div>

                                    </center>
                            </div>
                        </div>
                        <p>Already have an account? &nbsp;
                          <Link to='login' className="login-btn">LOGIN</Link>
                        </p>
                        
                    </center>

                    <div className="section"></div>
                    <div className="section"></div>
                </main>
            </div>
        );
    }

    onEmailChange(e) {
        this.setState({email: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    onUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    onCPasswordChange(e) {
        this.setState({cpassword: e.target.value});
    }

    handleSubmit() {
        console.log(this.state.email, this.state.password, this.state.username, this.state.cpassword);
        if (this.state.password === this.state.cpassword) {
            addUser(this.state.email, this.state.password).then(response => {
                console.log('new user added');
                console.log(response);
                localStorage.setItem('AUTH_USER', this.state.email.toString());
                history.goBack();
            }, () =>{
                this.setState({
                    email: '',
                    password: '',
                    cpassword: '',
                    username: ''
                })
            });
        }
    }
}