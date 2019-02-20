import React, { Component } from 'react';
import PostsPage from './components/PostsPage/PostsPage';
import SearchBar from './components/SearchBar/SearchBar';
import PT from 'prop-types';
import './App.css'
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props){
    super(props);
    this.state ={ postsData:[]};
    this.allPosts = this.props.data;
  }
 
  componentDidMount() {
    if(localStorage.getItem('postsData')){
      this.allPosts = JSON.parse(localStorage.getItem('postsData'));
      this.setState({postsData: this.allPosts});
    }else {
      this.setState({postsData: this.props.data})
    }
  }
  componentWillUpdate() {
    localStorage.setItem('postsData', JSON.stringify(this.allPosts));
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
    console.log('here')
    this.setState(currentState => {
      const newData = currentState.postsData.map(postData => {

        if(postData.id === postID){
          postData.comments = postData.comments.filter(comment => comment.id!==commentID)
        }
        return postData;
      })
      console.log(newData)
      return {
        postsData: newData,
      }
    })
  }
  render() {
    return (
      <div className="App">
      {/* <button onClick={()=>console.log(this.allPosts)} >show data</button> */}
        <SearchBar 
          filterPostsByUsername={this.filterPostsByUsername}
        />
        <PostsPage 
          postsData={this.state.postsData}
          addComment={this.addComment}
          addOrRemoveLike={this.addOrRemoveLike}
          deleteAComment={this.deleteAComment}
        />
      </div>
    );
  }
}
App.protoTypes = {
  data: PT.array.isRequired,
}
export default App;
