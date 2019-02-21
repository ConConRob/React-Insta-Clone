import React, { Component } from 'react';
import PostsPage from '../PostsPage/PostsPage';
import PT from 'prop-types';


class InsideApp extends Component {
  render() {
    return (
        <PostsPage 
          postsData={this.props.postsData}
          user={this.props.user}
          addComment={this.props.addComment}
          addOrRemoveLike={this.props.addOrRemoveLike}
          deleteAComment={this.props.deleteAComment}
        />
    );
  }
}
InsideApp.protoTypes = {
  data: PT.array.isRequired,
}
export default InsideApp;
