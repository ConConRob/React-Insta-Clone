import React from 'react';
import PT from 'prop-types';
import PostButtons from '../PostButtons/PostButtons'
import Comment from '../Comment/Comment';
import './CommentSection.css'

export default function CommentSection({comments, likes, id, addComment}){
    function handleOnEnter(event,user, text ,id) {
        if(event.key==='Enter'){
            addComment(user,text,id);
        }
        
    }
    return (
        <div className="comment-section">
             <PostButtons />
            <p className="post-likes">{`${likes} likes`}</p>
            {
                comments.map((comment, index) => <Comment key={index} username={comment.username} text={comment.text} />)
            }
            <input onKeyUp={(event)=>handleOnEnter(event,'Connor',event.target.value,id)}  type="text" className="comment-section-add"  placeholder="Add a comment..." />
        </div>
        
    )
}

CommentSection.propTypes = {
    comments: PT.array.isRequired,
}