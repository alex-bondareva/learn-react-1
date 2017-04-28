import React, { Component } from 'react';
import './User.css';

export default class User extends Component {
    render(){
        return(
            <div className="user">
                <img className="user__avatar" src="https://facebook.github.io/react/img/logo.svg" alt="user avatar"/>
                <p className="user__heading"><b>Name:</b> Alexandra Bondareva</p>
                <p><b>Date of birth:</b> {new Date(1990, 4, 20).toLocaleDateString()}</p>
            </div>
        )
    }
}