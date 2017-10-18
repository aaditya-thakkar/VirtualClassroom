import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import courses_helper from "../../pages/HomePage/courses_helper";
import axios from 'axios';

export default class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseName: '',
            instructorName: ''
        }
    }

    componentDidMount() {
        const cid = _.get(this.props, 'location.query.cid', '');
        courses_helper().then(courses => {
            const c_obj = _.keyBy(courses, 'cid');
            const courseName = c_obj[cid].name;
            const tutorId = c_obj[cid].tutorId;
            return { courseName: courseName, tutorId: tutorId };
        }).then(obj => {
              const tutorId = obj.tutorId;
              axios.get('http://localhost:8081/users')
                .then(response => {
                    console.log(response.data);
                    const t_obj = _.keyBy(response.data, 'tutorId');
                    const t_name = t_obj[tutorId].name;
                    this.setState({
                        courseName: obj.courseName,
                        instructorName: t_name
                    })
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }

    componentDidUpdate() {
        const cid = _.get(this.props, 'location.query.cid', '');
        courses_helper().then(courses => {
            const c_obj = _.keyBy(courses, 'cid');
            const courseName = c_obj[cid].name;
            const tutorId = c_obj[cid].tutorId;
            return { courseName: courseName, tutorId: tutorId };
        }).then(obj => {
            const tutorId = obj.tutorId;
            axios.get('http://localhost:8081/users')
                .then(response => {
                    console.log(response.data);
                    const t_obj = _.keyBy(response.data, 'tutorId');
                    const t_name = t_obj[tutorId].name;
                    this.setState({
                        courseName: obj.courseName,
                        instructorName: t_name
                    })
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }

    render() {
        const link = localStorage.getItem('AUTH_USER') ? '/coursevideo' : '/login';
        return (
            <div className="abc" >
                <div className="row">
                    
                        <div className="col s4">
                            <Jumbotron className="burrah">
                                <img className="course-img" src='/app/pages/HomePage/course-images/data_structure.jpg'></img>
                                <h3 className="display-3">{this.state.courseName}</h3>
                                <p className="small">Instructor: {this.state.instructorName}</p>
                                <hr className="my-2" />

                                <p className="lead enroll">
                                    <Link to={{ pathname: link, query: { cid: _.get(this.props, 'location.query.cid', '') } }}><Button className="indigo large b1">Enroll</Button></Link>
                                </p>
                            </Jumbotron>
                        </div>
                        <div className="col s8">
                            <Jumbotron>
                                <h4 className="display-3">About this course</h4>
                                <p className="small">A good algorithm usually comes together with a set of good data structures that allow the algorithm to manipulate the data efficiently. In this course, we consider the common data structures that are used in various computational problems.

 </p>
                                <hr className="my-2" />

                                <p className="small">A few examples of questions that we are going to cover in this class are the following:
<ol>
                                        <li> What is a good strategy of resizing a dynamic array?</li>
                                        <li> How priority queues are implemented in C++, Java, and Python?</li>
                                        <li> How to implement a hash table so that the amortized running time of all operations is O(1) on average?</li>
                                        <li> What are good strategies to keep a binary tree balanced?</li>
                                    </ol>
                                </p>
                            </Jumbotron>
                            <Jumbotron>
                                <h4 className="display-3">Who is this class for</h4>
                                <p className="lead">Programmers with basic experience looking to understand the practical and conceptual underpinnings of algorithms, with the goal of becoming more effective software engineers. Computer science students and researchers as well as interdisciplinary students (studying electrical engineering, mathematics, bioinformatics, etc.) aiming to get more profound understanding of algorithms and hands-on experience implementing them and applying for real-world problems. Applicants who want to prepare for an interview in a high-tech company.</p>

                            </Jumbotron>
                            <Jumbotron>
                                <h4 className="display-3">About the instructor</h4>
                                <p className="lead">Hussein Al Rubaye

                                </p>
                                <p>
                                    Software Engineer and Developer
                                </p>
                                <hr className="my-2" />
                                <p>
                                    I am PhD student and i have master in Software engineering from Rochester Institute of Technology in US, my interesting area is teaching programming languages to develop mobile,Windows, and web apps.</p>
                                
                                
                            </Jumbotron>
                            
                        </div>
                    </div>
            </div>
        );
    }
}