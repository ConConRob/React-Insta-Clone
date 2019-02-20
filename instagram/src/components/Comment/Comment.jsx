import React from 'react';
import PT from 'prop-types';
import './Comment.css';

export default function Comment({loggedInUser, username, text, postID, commentID, deleteAComment}){
    function deleteHandler(){
        deleteAComment(postID, commentID)
    }
    
    return (
        <div  className="comment-section-comment">
        <div>
            <span onClick={deleteHandler} className="comment-section-comment-user">{username}</span>
            <span className="comment-section-comment-text">{text}</span>
        </div>
        {
         loggedInUser===username &&
            <button className="comment-section-comment-delete" onClick={deleteHandler}>delete</button>
        }
        </div>
    )
}

Comment.propTypes = {
    username: PT.string.isRequired,
    text: PT.string.isRequired,
}

