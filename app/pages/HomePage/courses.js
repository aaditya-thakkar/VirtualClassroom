import React from 'react';
import Card from './card'
import course_helper from './courses_helper';

export default class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: ''
        }
    }

    componentDidMount() {
        course_helper().then(courses => {
            this.setState({
                courses: courses
            });
        });

        const steps = [
            {
                title: 'Popular Courses',
                text: 'You can click on the course to see the course and instructor details. You can enroll the course you like.',
                textAlign: 'center',
                selector: '.row.card-align',
                position: 'top',
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
                console.log("render list", item.tutorId);
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
            <div className="row card-align">
                {this.renderCourseList(this.state.courses)}
            </div>
        );
    }
}