import React from 'react'
import { Component } from 'react/cjs/react.production.min';

class Clock extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            stop: false
        };
    }

    render() {
        const tempo = this.state.date.getTime() + this.props.time * 3600 * 1000;
        const data = new Date(tempo);
        return <li>in {this.props.paese} è <br/>
            <span className="clock">{data.toLocaleTimeString()}</span><br/>
            <button onClick={this.toggle}>{this.state.stop ? "start" : "stop"}</button>
        </li>
    }

    toggle=(event) => {
        this.setState((state, props) => {
            state.stop ? this.start() :  clearInterval(this.interval);
            return {
                stop: !state.stop
            }
        })

    }

    tick = () => {
        this.setState({ date: new Date() });
    }

    start() {
        this.interval = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Clock;
