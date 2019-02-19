import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer.jsx';
import SearchBar from './components/SearchBar/SearchBar';
import PT from 'prop-types';
import './App.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state ={ postsData:[]};
    this.allPosts = this.props.data;
  }

  componentDidMount() {
    this.setState({postsData: this.props.data})
  }
  // add a comment to list of comments for post 
  addComment = (user, text, id) => {
    this.setState(currentState => {
      const newPostData = currentState.postsData.map(postData => {
        if(postData.id === id){
          postData.comments=postData.comments.concat({
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
          }else {
            postData.likes = postData.likes -1;
          }
        }
        return postData;
      });
      return {
        postsData: newPostData,
      }
    })
  }
  // filter desplayed list by username
  filterPostsByUsername = (searchTerm) => {
    const newDisplayedPosts = this.allPosts.filter(allPostsPost => 
       allPostsPost.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    console.log(newDisplayedPosts)
    this.setState({postsData: newDisplayedPosts})
  }
  render() {
    return (
      <div className="App">
        <SearchBar 
          filterPostsByUsername={this.filterPostsByUsername}
        />
        {this.state.postsData.map((postData)=> 
          <PostContainer 
            key={postData.id}  
            postData={postData} 
            addComment={this.addComment}
            addLike={this.addOrRemoveLike}
          /> 
          )}
      </div>
    );
  }
}
App.protoTypes = {
  data: PT.array.isRequired,
}
export default App;
