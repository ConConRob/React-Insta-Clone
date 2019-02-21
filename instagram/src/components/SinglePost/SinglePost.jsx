import React from 'react'
import PostContainer from '../PostContainer/PostContainer'
export default function SinglePost({match, user, addComment, addOrRemoveLike, deleteAComment}){
    //const id = match.params;
    console.log (match.params.id)

    const postsData = JSON.parse(localStorage.getItem('postsData'));
    const postData = postsData.find(postData => postData.id ===match.params.id )
    return(
        <PostContainer  
        user={user} 
        postData={postData} 
        addComment={addComment} 
        addOrRemoveLike={addOrRemoveLike} 
        deleteAComment={deleteAComment}
        />
    )
    
}

