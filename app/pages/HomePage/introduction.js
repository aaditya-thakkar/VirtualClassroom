import React from 'react';
import { Link } from 'react-router-dom';

export default class Introduction extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const steps = [
            {
                title: 'Get started with the Virtual Classroom',
                text: 'To access the course content, you must create an account or login into your account if you already have one.',
                selector: '.home-img .text-over',
                position: 'bottom',
                style: {
                    backgroundColor: '#a350f0',
                    borderRadius: 0,
                    color: '#fff',
                    mainColor: '#fff',
                    textAlign: 'center',
                    beacon: {
                        inner: '#a350f0',
                        outer: '#a350f0',
                    },
                },
            },
        ];

        this.props.addSteps(steps);
    }

    render(){
        return(
            <div>
                <div className="home-img">
                    <div className="text-over">
                        <h2>Learn From The Experts.</h2>
                        <Link to='/signup' className="waves-effect waves-light btn">Get Started</Link>
                    </div>

                </div>
            </div>
        );
    }
}

