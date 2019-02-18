import React from 'react';
import PT from 'prop-types';

import Comment from './Comment';
export default function CommentSection({comments}){
    console.log(comments)
    return (
        <div className="comment-section">
            {
                comments.map((comment, index) => <Comment key={index} username={comment.username} text={comment.text} />)
            }
        </div>
        
    )
}

CommentSection.propTypes = {
    comments: PT.array.isRequired,
}