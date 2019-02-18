import React from 'react';
import PT from 'prop-types';
import './Comment.css';

export default function Comment({username, text}){
    return (
        <div className="comment-section-comment">
        <span className="comment-section-comment-user">{username}</span>
        <span className="comment-section-comment-text">{text}</span>
        </div>
    )
}

Comment.propTypes = {
    username: PT.string.isRequired,
    text: PT.string.isRequired,
}

