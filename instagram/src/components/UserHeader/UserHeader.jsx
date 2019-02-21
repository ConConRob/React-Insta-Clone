import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const StyledUserHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 2.5%;
    img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
    }
    p {
        font-weight: 500;
        padding-left: 10px;
    }
`

export default function UserHeader({username, thumbnailUrl}){
    return (
        <StyledUserHeader>
            <img src={thumbnailUrl} alt="poster profile"/>
            <p>{username}</p>
        </StyledUserHeader>
    )
}
UserHeader.propsType = {
    username: PT.string.isRequired,
    thumbnailUrl: PT.string.isRequired,
}