import React, { Component, Fragment } from 'react';
import NewsItem from '../newsItem/';

export default class NewsList extends Component {
    render() {
        const postList = this.props.posts.map(p => (
            <NewsItem key={p.title} post={p} />
        ));
        return (
            <Fragment>{postList}</Fragment>

        );
    }
}