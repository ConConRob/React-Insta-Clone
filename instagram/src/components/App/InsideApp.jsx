import React, { Component } from 'react';
import PostsPage from '../PostsPage/PostsPage';
import SinglePost from '../SinglePost/SinglePost';
import PT from 'prop-types';
import {Route} from 'react-router-dom';

class InsideApp extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={()=> {
          console.log(this.props)
          return<PostsPage 
            postsData={this.props.postsData}
            user={this.props.user}
            addComment={this.props.addComment}
            addOrRemoveLike={this.props.addOrRemoveLike}
            deleteAComment={this.props.deleteAComment}
          />
        }}/>
         <Route path="/:id" 
          render={(props)=> {
            return <SinglePost
              match={props.match}
              user={this.props.user}
              addComment={this.props.addComment}
              addOrRemoveLike={this.props.addOrRemoveLike}
              deleteAComment={this.props.deleteAComment}
            />
          }
        }
         />
      </div>
       
    );
  }
}
InsideApp.protoTypes = {
  data: PT.array.isRequired,
}
export default InsideApp;
