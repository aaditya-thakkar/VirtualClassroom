import React from 'react';
import history from '../../history.js';
import AddTutor from './TutorformHandler';

export default class Tutorform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            country: '',
            degree: '',
            aoi: '',
        };
        this.onAgeChange = this.onAgeChange.bind(this);
        this.onCountryChange = this.onCountryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDegreeChange = this.onDegreeChange.bind(this);
        this.onAoiChange = this.onAoiChange.bind(this);
    }

    render() {
        //if (localStorage.getItem('AUTH_USER')) history.goBack();
        return (
            <div className="body">
                <div className="section"></div>
                <main>
                    <center>
                        <div className="section"></div>

                        <h5>Become a Tutor</h5>
                        <div className="section"></div>

                        <div className="container col s12">
                            <div className="z-depth-1 grey lighten-4 row" style={{display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE"}}>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input
                                                className='validate'
                                                onChange={this.onAgeChange}
                                                value = {this.state.age}
                                                type='text'
                                                name='age'
                                                id='age'
                                            />
                                            <label htmlFor='age'>Enter your age</label>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input
                                                className='validate'
                                                onChange={this.onCountryChange}
                                                value = {this.state.country}
                                                type='text'
                                                name='country'
                                                id='country'
                                            />
                                            <label htmlFor='country'>Enter your country</label>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input
                                                className='validate'
                                                onChange={this.onDegreeChange}
                                                value = {this.state.degree}
                                                type='text'
                                                name='degree'
                                                id='degree'
                                            />
                                            <label htmlFor='degree'>Enter your degree </label>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='input-field col s12'>
                                            <input
                                                className='validate'
                                                onChange={this.onAoiChange}
                                                value = {this.state.aoi}
                                                type='text'
                                                name='aoi'
                                                id='aoi'
                                            />
                                            <label htmlFor='aoi'>Areas of Interest</label>
                                        </div>
                                        <label style={{float: "right"}}>
                                            <a className='transparent-text' href='#!'><b>Invisible text jugaad to avoid more css</b></a>
                                        </label>
                                    </div>

                                    <br />
                                    <center>
                                        <div className='row'>
                                            <button type='submit' onClick={this.handleSubmit} name='btn_tutor' className='col s12 btn btn-large waves-effect indigo'>Become a tutor </button>
                                        </div>

                                    </center>
                            </div>
                        </div>
                        
                    </center>

                    <div className="section"></div>
                    <div className="section"></div>
                </main>
            </div>
        );
    }

    onAgeChange(e) {
        this.setState({age: e.target.value});
    }

    onCountryChange(e) {
        this.setState({country: e.target.value});
    }

    onDegreeChange(e) {
        this.setState({degree: e.target.value});
    }

    onAoiChange(e) {
        this.setState({aoi: e.target.value});
    }

    handleSubmit() {
        console.log(this.state.age, this.state.country, this.state.degree, this.state.aoi);
        // change the account from student account to tutor account .

        
        AddTutor(localStorage.getItem('AUTH_USER')).then(response => {
            console.log('new user added');
            console.log(response);
            localStorage.setItem('IS_TUTOR',"true");
            history.goBack();
        }, () =>{
            this.setState({
                age: '',
                country: '',
                degree: '',
                aoi: ''
            })
        });
        
    }
}