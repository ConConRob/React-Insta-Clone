import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer.jsx'
import PT from 'prop-types';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      postsData: this.props.data,
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.postsData.map((postData, index )=> <PostContainer key={index} postData={postData}/> )}
      </div>
    );
  }
}
App.protoTypes = {
  data: PT.array.isRequired,
}
export default App;
