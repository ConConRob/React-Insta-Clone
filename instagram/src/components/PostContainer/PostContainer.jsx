import React from 'react';
import PT from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';


export default function PostContainer({postData}){
    console.log(postData);
    return (
        <div className='post-container'>
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