import React from 'react';
import PT from 'prop-types';
import PostButtons from '../PostButtons/PostButtons'
import Comment from '../Comment/Comment';
import CommentSubmitForm from '../CommentSubmitForm/CommentSubmitForm';
import './CommentSection.css'

export default function CommentSection({comments, likes, liked, id, addComment, addLike}){

    return (
        <div className="comment-section">
             <PostButtons id={id} liked={liked} addLike={addLike} />
            <p className="post-likes">{`${likes} likes`}</p>
            {
                comments.map((comment, index) => 
                    <Comment 
                        key={index} 
                        username={comment.username} 
                        text={comment.text} 
                    />
                )
            }
            <CommentSubmitForm id={id} addComment={addComment} user={'Connor'}/>
        </div>
        
    )
}

CommentSection.propTypes = {
    comments: PT.array.isRequired,
    likes: PT.number.isRequired,
    id: PT.string.isRequired,
    addComment: PT.func.isRequired,
    addLike: PT.func.isRequired,
}