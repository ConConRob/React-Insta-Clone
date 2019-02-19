import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer.jsx';
import SearchBar from './components/SearchBar/SearchBar';
import PT from 'prop-types';
import './App.css'
class App extends Component {
  
  constructor(props){
    super(props);
    this.state ={ postsData:[]}
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

  render() {
    
    return (
      <div className="App">
        <SearchBar />
        {this.state.postsData.map((postData)=> <PostContainer key={postData.id}  postData={postData} addComment={this.addComment}/> )}
      </div>
    );
  }
}
App.protoTypes = {
  data: PT.array.isRequired,
}
export default App;
