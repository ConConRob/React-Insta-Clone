import React from 'react';
import PT from 'prop-types';

export default function UserHeader({username, thumbnailUrl}){
    return (
        <div className="post-userheader">
            <img src={thumbnailUrl} alt="poster profile"/>
            <p>{username}</p>
        </div>
    )
}
UserHeader.propsType = {
    username: PT.string.isRequired,
    thumbnailUrl: PT.string.isRequired,
}