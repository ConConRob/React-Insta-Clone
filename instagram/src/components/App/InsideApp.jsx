import React, { Component } from 'react';
import PostsPage from '../PostsPage/PostsPage';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';
import './InsideApp.css'
import PT from 'prop-types';


class InsideApp extends Component {
  

  
  
  render() {
    return (
      <div className="insta-app">
      {/* <button onClick={()=>console.log(this.allPosts)} >show data</button> */}
        <SearchBar 
          filterPostsByUsername={this.props.filterPostsByUsername}
        />
        <PostsPage 
          postsData={this.props.postsData}
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
