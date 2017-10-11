import React from 'react';
import Card from './card'
import course_helper from './courses_helper';
import ReactLoaderQuotes from 'react-loader-quotes';

export default class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        course_helper().then(courses => {
            this.setState({
                courses: courses
            });
        });
    }

    dataState(array) {
        if (Array.isArray(array)) {
            return array.map((item, i) => {
                return (<div key={i} className="col s3" style={{ paddingLeft: "25px", paddingTop: "20px" }}>
                    <Card course={{ name: item.name, image: item.image, cid: item.cid }} />
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
                {this.dataState(this.state.courses)}
            </div>
        );
    }
}