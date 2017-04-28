import React, { Component } from 'react';
import Menu from '../Menu';
import './Header.css';

export default class Header extends Component {
    render(){
        return(
            <div className="header">
                <h1 className="header__heading">Site Header</h1>
                <Menu />
            </div>
        )
    }
}