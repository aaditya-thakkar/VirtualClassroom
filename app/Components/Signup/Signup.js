import React from 'react';

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

export default class Signup extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="section"></div>
                <main>
                    <center>
                       {/* <img className="responsive-img" style="width: 250px;" src="https://i.imgur.com/ax0NCsK.gif" /> */}
                        <div className="section"></div>

                        <h5 className="indigo-text">Create a new account</h5>
                        <div className="section"></div>

                        <div className="container">
                            <div className="z-depth-1 grey lighten-4 row" style={{display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE"}}>

                                <form className="col s12" method="post">
                                    <div className='row'>
                                        <div className='col s12'>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input className='validate' type='text' name='fullname' id='fullname' />
                                            <label htmlFor='fullname'>Full Name</label>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input className='validate' type='email' name='email' id='email' />
                                            <label htmlFor='email'>Enter your email</label>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input className='validate' type='password' name='password' id='password' />
                                            <label htmlFor='password'>Enter your password</label>
                                        </div>
                                        <label style={{float: "right"}}>
                                            <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                                        </label>
                                    </div>

                                    <br />
                                    <center>
                                        <div className='row'>
                                            <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Sign Up</button>
                                        </div>

                                    </center>
                                </form>
                            </div>
                        </div>
                        <p>Already have an account? &nbsp;
                          <a href="#!">LOGIN</a>
                        </p>
                        
                    </center>

                    <div className="section"></div>
                    <div className="section"></div>
                </main>
            </div>
        );
    }
}