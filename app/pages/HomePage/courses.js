import React from 'react';
import Card from './card'
import course_helper from './courses_helper';

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

    render() {
        return (
            <div className="row card-align">
                {this.state.courses.map((item,i) => {
                    return (<div key={i} className="col s3" style={{paddingLeft:"25px", paddingTop:"20px"}}>
                            <Card course={ { name: item.name, image: item.image, cid: item.cid } } />
                        </div>
                    )
                })}
            </div>
        );
    }
}