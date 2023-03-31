import React from 'react';
import './SideCart.css'

const SideCart = ({blog,blogTitle,readTime}) => {
    
    return (
        <div>
           <p className='spend-time'> Spent time on read :{readTime} <span>min</span></p>
            <p className='Blog-title'> Bookmarked Blogs : {blog}</p>
           {
            blogTitle.map(title => <p className='title'>title : {title}</p>)
           }
        </div>
    );
};

export default SideCart;