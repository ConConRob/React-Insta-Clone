import React from 'react';
import PT from 'prop-types';
import './UserHeader.css';

export default function UserHeader({username, thumbnailUrl}){
    return (
        <div className="userheader">
            <img src={thumbnailUrl} alt="poster profile"/>
            <p>{username}</p>
        </div>
    )
}
UserHeader.propsType = {
    username: PT.string.isRequired,
    thumbnailUrl: PT.string.isRequired,
}