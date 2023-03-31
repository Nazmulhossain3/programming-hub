import React from 'react';

const SideCart = ({blog}) => {
    return (
        <div>
           <p> Spent time on read :0 <span>min</span></p>
            <p> Bookmarked Blogs : {blog}</p>
        </div>
    );
};

export default SideCart;