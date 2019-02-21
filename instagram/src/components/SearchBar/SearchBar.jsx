import React from 'react';
import styled from 'styled-components';

const Header =styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .search-bar-header{
        display: flex;
        align-items: center;
    }
    .fa-instagram{
        font-size: 30px;
        padding-right: 20px;
    }
    h1 {
        font-family: 'Grand Hotel', cursive;
        font-size: 25px;
        padding-left: 20px;
        border-left: 1px solid gray;
        line-height: 1;
    }
    .search-bar-search {
        text-align: center;
        padding: 4px 0;
        font-family: fontawesome,-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    }
    .search-bar-search:focus,
    .search-bar-search:active{
        outline: none;
    }
    .search-bar-buttons {
        font-size: 20px;
    }
    .search-bar-buttons .fa-compass,
    .search-bar-buttons .fa-heart{
        padding-right: 15px;
    }
`

export default function SearchBar({filterPostsByUsername}) {
    function handleSearchChange(event) {
        filterPostsByUsername(event.target.value)
    }

    return (
        <Header>
            <div className="search-bar-header">
                <i className="fab fa-instagram"></i>
                <h1>Instagram</h1>
            </div>
            <input onChange={handleSearchChange}  type="text" className="search-bar-search" placeholder='&#xf002; Add Comment' />
            <div className="search-bar-buttons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </Header>
    )
}

