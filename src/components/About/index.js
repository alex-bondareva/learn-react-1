import React, { Component } from 'react';
import './About.css';
import CommentsList from '../CommentsList';

const fetchComments = cb =>
    cb([
        {
            author: 'Vasya',
            text: 'Sample sample text'
        },
        {
            author: 'YoBa',
            text: 'ALLOU YOBA ETO TI? PSHHH PSHHH NICHEGO NE SLYSHNO'
        }
    ]);
export default class About extends Component {
    constructor() {
        super();
        this.state = { comments: [] };
    }
    componentDidMount() {
        fetchComments(comments =>
            this.setState({
                comments: comments
            })
        );
    }
    render(){
        return(
            <div className="home">
                page /about
                <CommentsList comments={this.state.comments}/>
            </div>
        )
    }
}
