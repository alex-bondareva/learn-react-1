import React, { Component } from 'react';
import './CommentsList.css';

export default class CommentsList extends Component{
    render(){
        return(
            <div className="comments">
                <ul className="comments__list">
                    {this.props.comments.map((comment, index) => (
                        <div className="comments__item" key={index}>
                            <div className="comments__date">{comment.date}</div>
                            <div className="comments__text">{comment.text}</div>
                            <div className="comments__author"><em>{comment.author}</em></div>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}