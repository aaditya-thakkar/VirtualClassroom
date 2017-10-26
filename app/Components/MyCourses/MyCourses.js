import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../pages/HomePage/card';
import getMyCourses from './getMyCourses';

export default class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: ''
        }
    }

    componentDidMount() {
        getMyCourses().then(courses => {
            this.setState({
                courses: courses
            });
        });

        const steps = [
            {
                title: 'Your Courses',
                text: 'This section shows all the courses taken by you, you can click on the course and add lectures or start a live classroom.',
                selector: '.body .row.card-align',
                position: 'top',
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
            {
                title: 'Edit Courses',
                text: 'You can add or delete courses from here.',
                selector: '.body .fixed-action-btn',
                position: 'left',
                style: {
                    backgroundColor: '#12d217',
                    borderRadius: 0,
                    color: '#fff',
                    mainColor: '#fff',
                    textAlign: 'center',
                    beacon: {
                        inner: '#12d217',
                        outer: '#12d217',
                    },
                },
            },
        ];

        this.props.addSteps(steps);
    }

    renderCourseList(array) {
        if (Array.isArray(array)) {
            return array.map((item, i) => {
                return (<div key={i} className="col s3" style={{ paddingLeft: "25px", paddingTop: "20px" }}>
                        <Card course={{ name: item.name, image: item.image, cid: item.cid, tutorId: item.tutorId }} />
                    </div>
                )
            })
        }
        else{
            return (
                <div className="loader-position">
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="body">
                <center><h4>My Courses</h4></center>
                <div className='divider' />
                <div className="row card-align">
                    {this.renderCourseList(this.state.courses)}
                </div>

                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large indigo">
                        <i className="large material-icons">mode_edit</i>
                    </a>
                    <ul>
                        <li><Link to="/dashboard/addCourseForm" className="btn-floating red"><i className="large material-icons">add</i></Link></li>
                        <li><Link to="/dashboard/addCourseForm" className="btn-floating yellow darken-1"><i className="large material-icons">delete</i></Link></li>
                    </ul>
                </div>

            </div>
        );
    }
}
