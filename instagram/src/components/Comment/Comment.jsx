import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const StyledComment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
span.comment-section-comment-user{
    font-weight: 500;
    padding-right: 10px;
    font-size: 16px;
}
button{
    width: 50px;
    border: none;
    background: none;
    height: 16px;
    font-size: 16px;
    align-self: baseline;
}
button:active,
button:hover{
    outline: none;
}
`
export default function Comment({loggedInUser, username, text, postID, commentID, deleteAComment}){
    function deleteHandler(){
        deleteAComment(postID, commentID)
    }
    
    return (
        <StyledComment  >
            <div>
                <span className="comment-section-comment-user">{username}</span>
                <span>{text}</span>
            </div>
            {
             loggedInUser===username &&
                <button  onClick={deleteHandler}>delete</button>
            }
        </StyledComment>
    )
}

Comment.propTypes = {
    username: PT.string.isRequired,
    text: PT.string.isRequired,
}

