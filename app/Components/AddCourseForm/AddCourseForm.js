import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../history.js';
const axios = require('axios');

export default class AddCourseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            courseName: '',
            liveChannel: '',
            tutorId: '',
            courseImage: ''
        };
        this.onCourseIdChange = this.onCourseIdChange.bind(this);
        this.onCourseNameChange = this.onCourseNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onLiveChannelChange = this.onLiveChannelChange.bind(this);
        this.onTutorIdChange = this.onTutorIdChange.bind(this);
        this.onCourseImageChange = this.onCourseImageChange.bind(this);
    }

    render() {
        return (
            <div className="body">
                <center><h4>Add a new Course</h4></center>
                <div className='divider' />
                <div className="section"></div>
                <main>
                    <center>
                        <div className="container col s12">
                            <div className="z-depth-1 grey lighten-4 row" style={{display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE"}}>

                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input
                                            className='validate'
                                            onChange={this.onCourseIdChange}
                                            value = {this.state.courseId}
                                            type='text'
                                            name='age'
                                            id='age'
                                        />
                                        <label htmlFor='age'>Enter course ID</label>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input
                                            className='validate'
                                            onChange={this.onCourseNameChange}
                                            value = {this.state.courseName}
                                            type='text'
                                            name='country'
                                            id='country'
                                        />
                                        <label htmlFor='country'>Enter Course Name</label>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input
                                            className='validate'
                                            onChange={this.onLiveChannelChange}
                                            value = {this.state.liveChannel}
                                            type='text'
                                            name='degree'
                                            id='degree'
                                        />
                                        <label htmlFor='degree'>Enter live-channel name </label>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input
                                            className='validate'
                                            onChange={this.onTutorIdChange}
                                            value = {this.state.tutorId}
                                            type='text'
                                            name='aoi'
                                            id='aoi'
                                        />
                                        <label htmlFor='aoi'>Enter Tutor Id</label>
                                    </div>
                                    <label style={{float: "right"}}>
                                        <a className='transparent-text' href='#!'><b>Invisible text jugaad to avoid more css</b></a>
                                    </label>
                                </div>

                                <div className='row'>
                                    <div className='input-field col s12'>
                                        <input
                                            className='validate'
                                            onChange={this.onCourseImageChange}
                                            value = {this.state.courseImage}
                                            type='text'
                                            name='degree'
                                            id='degree'
                                        />
                                        <label htmlFor='degree'>Enter Image Path </label>
                                    </div>
                                </div>

                                <br />
                                <center>
                                    <div className='row'>
                                        <button type='submit' onClick={this.handleSubmit} name='btn_tutor' className='col s12 btn btn-large waves-effect indigo'>Add Course </button>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </center>
                    <center>
                        <Link to='/dashboard'>Go to Dashboard</Link>
                    </center>
                </main>
            </div>
        );
    }

    onCourseIdChange(e) {
        this.setState({courseId: e.target.value});
    }

    onCourseNameChange(e) {
        this.setState({courseName: e.target.value});
    }

    onLiveChannelChange(e) {
        this.setState({liveChannel: e.target.value});
    }

    onTutorIdChange(e) {
        this.setState({tutorId: e.target.value});
    }

    onCourseImageChange(e) {
        this.setState({courseImage: e.target.value});
    }

    handleSubmit() {
        const url = 'http://localhost:8081/courses';
        const body = {
            cid: this.state.courseId,
            name: this.state.courseName,
            liveChannel: this.state.liveChannel,
            tutorId: this.state.tutorId,
            image: `/app/pages/HomePage/course-images/${this.state.courseImage}.jpg`
        };

        axios.post(url, body)
            .then(response => {
                console.log(response);
                history.goBack();
            }, () =>{
                this.setState({
                    courseId: '',
                    courseName: '',
                    liveChannel: '',
                    tutorId: '',
                    courseImage: ''
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

}