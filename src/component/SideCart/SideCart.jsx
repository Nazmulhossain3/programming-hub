import React from 'react';

const SideCart = ({blog,blogTitle,readTime}) => {
    
    return (
        <div>
           <p> Spent time on read :{readTime} <span>min</span></p>
            <p> Bookmarked Blogs : {blog}</p>
           {
            blogTitle.map(title => <p>title : {title}</p>)
           }
        </div>
    );
};

export default SideCart;