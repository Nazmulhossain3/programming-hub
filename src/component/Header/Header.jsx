import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <p>Patient With Programming</p>
           
            <div className="nav">
                <a href="/Home">Home</a>
                <a href="/tutorial">Tutorial</a>
                <a href="/Blog">Blog</a>
            </div>
        </div>
    );
};

export default Header;