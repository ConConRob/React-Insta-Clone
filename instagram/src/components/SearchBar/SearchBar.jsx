import React from 'react';

import './SearchBar.css';

export default function SearchBar() {
    return (
        <div className="search-bar">
            <div className="search-bar-header">
                <i class="fab fa-instagram"></i>
                <h1>Instagram</h1>
            </div>
                
      
            <input type="text" className="search-bar-search" placeholder="🔍 Search" />
            <div className="search-bar-buttons">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
    )
}