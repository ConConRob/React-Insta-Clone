import React from 'react';
import PT from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import UserHeader from '../UserHeader/UserHeader';
import PostButtons from '../PostButtons/PostButtons'

export default function PostContainer({postData}){
    return (
        <div className='post-container'>
            <UserHeader username={postData.username} thumbnailUrl={postData.thumbnailUrl}/>
            <img className="post-image" src={postData.imageUrl} alt="Post"/>
            <PostButtons />
            <p className="post-likes">{`${postData.likes} likes`}</p>
            <CommentSection comments={postData.comments} />
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