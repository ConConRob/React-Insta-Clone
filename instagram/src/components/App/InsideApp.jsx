import React, { Component } from 'react';
import PostsPage from '../PostsPage/PostsPage';

import './InsideApp.css'
import PT from 'prop-types';


class InsideApp extends Component {
  render() {
    return (
     
      <div className="insta-app">
      {/* <button onClick={()=>console.log(this.allPosts)} >show data</button> */}

        <PostsPage 
          postsData={this.props.postsData}
          user={this.props.user}
          addComment={this.props.addComment}
          addOrRemoveLike={this.props.addOrRemoveLike}
          deleteAComment={this.props.deleteAComment}
        />
      </div>
    );
  }
}
InsideApp.protoTypes = {
  data: PT.array.isRequired,
}
export default InsideApp;