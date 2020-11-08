import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0
        };
    }

    tick() {
        
        if (this.seconds == 60) {
            this.setState(state => ({
                seconds: 0,
                minutes: this.minutes + 1
            }));
        }
        else {
            this.setState(state => ({
                seconds: state.seconds + 1
            }));
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                System Elapsed Time: { this.state.minutes }:{ this.state.seconds < 10 ? `0${ this.state.seconds }` : this.state.seconds }
            </div>
        );
    }
}

export default Timer;