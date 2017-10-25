import React from 'react';
import Joyride from 'react-joyride';
import Navigation from './pages/HomePage/navigation';
import Main from './pages/Main';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            joyrideOverlay: true,
            joyrideType: 'continuous',
            isReady: false,
            isRunning: false,
            stepIndex: 0,
            steps: [],
            selector: '',
        };

        this.addSteps = this.addSteps.bind(this);
        this.addTooltip = this.addTooltip.bind(this);
        this.next = this.next.bind(this);
        this.callback = this.callback.bind(this);
        this.onClickSwitch = this.onClickSwitch.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isReady: true,
                isRunning: true,
            });
        }, 1000);
    }

    addSteps(steps) {
        let newSteps = steps;

        if (!Array.isArray(newSteps)) {
            newSteps = [newSteps];
        }

        if (!newSteps.length) {
            return;
        }

        // Force setState to be synchronous to keep step order.
        this.setState(currentState => {
            currentState.steps = currentState.steps.concat(newSteps);
            return currentState;
        });
    }

    addTooltip(data) {
        this.joyride.addTooltip(data);
    }

    next() {
        this.joyride.next();
    }

    callback(data) {
        console.log('%ccallback', 'color: #47AAAC; font-weight: bold; font-size: 13px;'); //eslint-disable-line no-console
        console.log(data); //eslint-disable-line no-console

        this.setState({
            selector: data.type === 'tooltip:before' ? data.step.selector : '',
        });
    }

    onClickSwitch(e) {
        e.preventDefault();
        const el = e.currentTarget;
        const state = {};

        if (el.dataset.key === 'joyrideType') {
            this.joyride.reset();

            this.setState({
                isRunning: false,
            });

            setTimeout(() => {
                this.setState({
                    isRunning: true,
                });
            }, 300);

            state.joyrideType = e.currentTarget.dataset.type;
        }

        if (el.dataset.key === 'joyrideOverlay') {
            state.joyrideOverlay = el.dataset.type === 'active';
        }

        this.setState(state);
    }

    render() {
        const {
            isRunning,
            joyrideOverlay,
            joyrideType,
            selector,
            stepIndex,
            steps,
        } = this.state;

        return (
            <div>
                <Joyride
                    ref={c => (this.joyride = c)}
                    callback={this.callback}
                    debug={false}
                    disableOverlay={selector === '.card-tickets'}
                    locale={{
                        back: (<span>Back</span>),
                        close: (<span>Close</span>),
                        last: (<span>Last</span>),
                        next: (<span>Next</span>),
                        skip: (<span>Skip</span>),
                    }}
                    run={isRunning}
                    showOverlay={joyrideOverlay}
                    showSkipButton={true}
                    showStepsProgress={true}
                    stepIndex={stepIndex}
                    steps={steps}
                    type={joyrideType}
                />
                <Navigation
                    addSteps={this.addSteps}
                />
                <Main
                    addSteps={this.addSteps}
                />
            </div>

        )
    }
}