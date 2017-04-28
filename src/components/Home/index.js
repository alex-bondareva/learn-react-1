import React, { Component } from 'react';
import './Home.css';
import User from '../User';
import Counter from '../Counter';
import CommentsList from '../CommentsList';
import PropTypes from 'prop-types';
const fetchComments = cb =>
    cb([
        {
            author: 'Alex',
            text: 'Sample text',
            date: '26.04.2017'
        },
        {
            author: 'Vasya',
            text: 'Sample sample text',
            date: '26.04.2017'
        },
        {
            author: 'YoBa',
            text: 'ALLOU YOBA ETO TI? PSHHH PSHHH NICHEGO NE SLYSHNO',
            date: '26.04.2017'
        }
    ]);
export default class Home extends Component {
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
                <User />
                <Counter />
                <CommentsList comments={this.state.comments}/>
            </div>
        )
    }
}
CommentsList.propTypes = {
    comments: PropTypes.array.isRequired
};
