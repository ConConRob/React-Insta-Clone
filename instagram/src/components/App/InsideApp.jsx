import React, { Component } from 'react';
import PostsPage from '../PostsPage/PostsPage';
import styled from 'styled-components';
import PT from 'prop-types';

const StyledInsideApp = styled.div`
    max-width: 600px;
    margin: 0 auto;
`

class InsideApp extends Component {
  render() {
    return (
      <StyledInsideApp>
        <PostsPage 
          postsData={this.props.postsData}
          user={this.props.user}
          addComment={this.props.addComment}
          addOrRemoveLike={this.props.addOrRemoveLike}
          deleteAComment={this.props.deleteAComment}
        />
      </StyledInsideApp>
    );
  }
}
InsideApp.protoTypes = {
  data: PT.array.isRequired,
}
export default InsideApp;
