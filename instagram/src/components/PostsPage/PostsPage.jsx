import React from 'react';
import PostContainer from '../PostContainer/PostContainer.jsx';

export default function PostsPage({postsData, addComment, addOrRemoveLike , deleteAComment}) {
    return (

        postsData.map((postData)=> 
            <PostContainer 
              key={postData.id}  
              postData={postData} 
              addComment={addComment}
              addLike={addOrRemoveLike}
              deleteAComment={deleteAComment}
            /> 
        )
    )
}