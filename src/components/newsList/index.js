import React, { Component, Fragment } from 'react';
import NewsItem from '../newsItem/';

export default class NewsList extends Component {
    render() {
        let postList = this.props.posts.map(
            (post,index) => 
                <NewsItem key={index} 
                    post={post} 
                    upvoteHandler={this.props.upvoteHandler} /> 
            );
        return (
            <Fragment>{postList}</Fragment>

        );
    }
}