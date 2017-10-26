import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionTutor: false
        };
        this.getSessionTutor = this.getSessionTutor.bind(this);
    }

    componentDidMount() {
        const tutorId = _.get(this.props.course, 'tutorId', '0');
        this.getSessionTutor(tutorId).then(sessionTutor => {
            if (sessionTutor === true) {
                this.setState({
                    sessionTutor: true
                });
            }
        });
    }

    render() {
        console.log("in render", this.state.sessionTutor);
        const path_obj = this.state.sessionTutor === true ? { pathname: '/courseTutorView', query: { cid: this.props.course.cid} } : { pathname: '/course', query: { cid: this.props.course.cid} };
        return (
            <div>
                <Link to={ path_obj }>
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.course.image} />
                            <span className="card-title">{this.props.course.name}</span>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }

    getSessionTutor(tutorId) {
        return axios.get('http://localhost:8081/users')
            .then(response => {
                const userSession = localStorage.getItem("AUTH_USER");
                const userList = _.keyBy(response.data, 'email');
                return _.get(userList[userSession], 'tutorId', '0') === tutorId;
            })
    }
}
