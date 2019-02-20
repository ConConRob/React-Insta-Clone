import React from 'react';
import PostContainer from '../PostContainer/PostContainer.jsx';

export default function PostsPage({postsData, user, addComment, addOrRemoveLike , deleteAComment}) {
    return (
        postsData.map((postData)=> 
            <PostContainer 
              key={postData.id}
              user={user}  
              postData={postData} 
              addComment={addComment}
              addOrRemoveLike={addOrRemoveLike}
              deleteAComment={deleteAComment}
            /> 
        )
    )
}