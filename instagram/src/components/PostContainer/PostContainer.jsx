import React from 'react';
import PT from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import UserHeader from '../UserHeader/UserHeader';
import styled from 'styled-components';

const StyledPostContainer = styled.div`
    .post-image {
        width: 100%;
        margin: 0 auto;
}
`


export default function PostContainer({user, postData, addComment, addOrRemoveLike, deleteAComment}){
    return (
        <StyledPostContainer>
            <UserHeader 
                username={postData.username} 
                thumbnailUrl={postData.thumbnailUrl}
            />
            <img className="post-image" src={postData.imageUrl} alt="Post"/>
           
            <CommentSection 
                user={user}
                comments={postData.comments} 
                likes={postData.likes}
                liked = {postData.liked} 
                id={postData.id} 
                addComment={addComment}
                addOrRemoveLike={addOrRemoveLike}
                deleteAComment={deleteAComment}
            />
         </StyledPostContainer>
    )
}
PostContainer.propTypes = {
    postData: PT.shape({
        username: PT.string.isRequired,
        thumbnailUrl: PT.string.isRequired,
        imageUrl: PT.string.isRequired,
        likes: PT.number.isRequired,
        timestamp: PT.string.isRequired,
        comments: PT.array.isRequired,
    }).isRequired
}