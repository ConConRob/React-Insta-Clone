import React from 'react';
import PT from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import UserHeader from '../UserHeader/UserHeader';
import './PostContainer.css';

export default function PostContainer({user, postData, addComment, addOrRemoveLike, deleteAComment}){
    return (
        <div className='post-container'>
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
         </div>
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