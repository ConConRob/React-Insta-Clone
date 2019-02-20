import React from 'react';

import './SearchBar.css';

export default function SearchBar({filterPostsByUsername}) {
    function handleSearchChange(event) {
        filterPostsByUsername(event.target.value)
    }

    return (
        <div className="search-bar">
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
        </div>
    )
}

