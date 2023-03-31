import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="ans-ques">
                <h3> 1. props vs state?</h3>
                <p>Props (short for "properties") are read-only and are passed down from <br /> a parent 
                component to a child component.on the other hand,state is usually use to store  <br />  
                and manage data its also mutable but props read only</p>

                <h3>2. How does useState work?</h3>
                <p>UseState is basically take an initial 
                value return  an array with two element </p>

                <h3>3. Purpose of useEffect other than fetching data?</h3>
                <p>without facthing data Useeffect also using for <br /> Updating Browser title,
                    load data from local storage <br /> and is other than purpose of react life
                    cycle </p>
                <h3>4.How Does React work?</h3>  
                <p>It works by using a virtual DOM (Document Object Model) <br /> to update the browser's 
                actual DOM efficiently and quickly.</p>  
            </div>
        </div>
    );
};

export default Blog;