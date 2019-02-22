import React from 'react';
import PT from 'prop-types';
import PostButtons from '../PostButtons/PostButtons'
import Comment from '../Comment/Comment';
import CommentSubmitForm from '../CommentSubmitForm/CommentSubmitForm';
import styled from 'styled-components';

const StyledCommentSection = styled.div`
    padding: 0 2.5%;
    p{
        margin: 0;
        font-weight: 500;
    }
`

export default function CommentSection({user, comments, likes, liked, id, addComment, addOrRemoveLike, deleteAComment}){

    return (
        <StyledCommentSection>
            <PostButtons 
                user={user} 
                id={id} 
                liked={liked} 
                addLike={addOrRemoveLike} 
            />
            <p>{`${likes} likes`}</p>
            {
                comments.map((comment, index) => 
                    <Comment 
                        key={index}
                        loggedInUser={user} 
                        username={comment.username} 
                        text={comment.text}
                        postID={id}
                        commentID={comment.id}
                        deleteAComment={deleteAComment} 
                    />
                )
            }
            <CommentSubmitForm user={user} id={id} addComment={addComment} />
        </StyledCommentSection>
        
    )
}

CommentSection.propTypes = {
    comments: PT.array.isRequired,
    likes: PT.number.isRequired,
    id: PT.string.isRequired,
    addComment: PT.func.isRequired,
    addOrRemoveLike: PT.func.isRequired,
}