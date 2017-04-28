import React, { Component } from 'react';
import { Link } from 'react-router';
import './Menu.css';

export default class Menu extends Component {
    render(){
        return(
            <div className="menu">
                <ul className="menu__list">
                    <li className="menu__link"><Link to='/'>Home</Link></li>
                    <li className="menu__link"><Link to='/about'>About</Link></li>
                    <li className="menu__link"><Link to='/contacts'>Contacts</Link></li>
                </ul>
            </div>
        )
    }
}