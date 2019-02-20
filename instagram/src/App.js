import React, { Component } from 'react';
import InsideApp from './components/App/InsideApp'
import Login from './components/Login/Login'
import dummyData from './dummy-data';
import authenticate from './components/authentication/authenticate';

import './App.css'
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(){
    super()
    this.state ={ postsData:[],};
    this.allPosts = dummyData;
  }
  
  // add a comment to list of comments for post 
  addComment = (user, text, id) => {
    this.setState(currentState => {
      const newPostData = currentState.postsData.map(postData => {
        if(postData.id === id){
          postData.comments=postData.comments.concat({
            id: uuidv4(),
            username: user,
            text,
          });
        }
          return postData;
      })
      return {
        postsData: newPostData,
      }
    })
  }
  // in the future keep track of who made the like
  addOrRemoveLike = (id,isAdd) => {
    this.setState(currentState => {
      const newPostData = currentState.postsData.map(postData => {
        if(postData.id === id){
          if(isAdd){
            postData.likes = postData.likes + 1;
            postData.liked = true;
          }else {
            postData.likes = postData.likes -1;
            postData.liked = false;
          }
        }
        return postData;
      });
      return {
        postsData: newPostData,
      }
    })
  }
  // filter desplayed list of posts by username
  filterPostsByUsername = (searchTerm) => {
    const newDisplayedPosts = this.allPosts.filter(allPostsPost => 
       allPostsPost.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    this.setState({postsData: newDisplayedPosts})
  }
  // delete a comment
  deleteAComment = (postID, commentID) => {
    this.setState(currentState => {
      const newData = currentState.postsData.map(postData => {

        if(postData.id === postID){
          postData.comments = postData.comments.filter(comment => comment.id!==commentID)
        }
        return postData;
      })
      return {
        postsData: newData,
      }
    })
  }
  componentDidMount() {
    if(localStorage.getItem('postsData')){
      this.allPosts = JSON.parse(localStorage.getItem('postsData'));
      this.setState({postsData: this.allPosts});
    }else {
      this.setState({postsData: dummyData})
    }
  }
  componentWillUpdate() {
    localStorage.setItem('postsData', JSON.stringify(this.allPosts));
  }
  render() {
    const AuthenticateInsideApp = authenticate(InsideApp, Login)
    return (
      <div className="App">
        <AuthenticateInsideApp
          postsData={this.state.postsData} 
          addComment={this.addComment}
          addOrRemoveLike={this.addOrRemoveLike}
          filterPostsByUsername={this.filterPostsByUsername}
          deleteAComment={this.deleteAComment} 
        />
      </div>
    );
  }
}


export default App;
