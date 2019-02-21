import React, { Component } from 'react';
import InsideApp from './components/App/InsideApp'
import Login from './components/Login/Login'
import dummyData from './dummy-data';
import authenticate from './components/authentication/authenticate';
import SearchBar from './components/SearchBar/SearchBar';
import styled from 'styled-components';
import Route from 'react-router-dom';
const uuidv4 = require('uuid/v4');

const StyledApp = styled.div`
max-width: 600px;
margin: 0 auto;
`

class App extends Component {
  constructor(props){
    super(props)
    this.state ={ 
      postsData:[],
      currentUser: this.props.user
    };
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
  addOrRemoveLike = (id, user) => {
    this.setState(currentState => {
      const newPostData = currentState.postsData.map(postData => {
        if(postData.id === id){
          if(!postData.liked.includes(user)){
            postData.likes = postData.likes + 1;
            postData.liked = postData.liked.concat([user])
          }else {
            postData.likes = postData.likes -1;
            postData.liked = postData.liked.filter(name=>name !==user)
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
      <StyledApp>
        <SearchBar 
          filterPostsByUsername={this.filterPostsByUsername}
        />
        <AuthenticateInsideApp
          postsData={this.state.postsData} 
          addComment={this.addComment}
          addOrRemoveLike={this.addOrRemoveLike}
          filterPostsByUsername={this.filterPostsByUsername}
          deleteAComment={this.deleteAComment} 
        />
      </StyledApp>
    );
  }
}


export default App;
