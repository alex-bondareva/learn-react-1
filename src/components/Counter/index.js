import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    countClick(e){
        this.setState({
            count: this.state.count + 1
        });
    }
    render(){
        return(
            <div className="counter">
                <div className="counter__value">{this.state.count}</div>
                <button className="counter__btn" onClick={this.countClick.bind(this)}>Increase counter</button>
            </div>
        )
    }
}