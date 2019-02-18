import React from 'react';
import PT from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import UserHeader from '../UserHeader/UserHeader';


import './PostContainer.css';

export default function PostContainer({postData}){
    return (
        <div className='post-container'>
            <UserHeader username={postData.username} thumbnailUrl={postData.thumbnailUrl}/>
            <img className="post-image" src={postData.imageUrl} alt="Post"/>
           
            <CommentSection comments={postData.comments} likes={postData.likes} />
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