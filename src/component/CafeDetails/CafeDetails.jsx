import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import SideCart from '../SideCart/SideCart';
import './CafeDetails.css'

const CafeDetails = () => {
    const [profiles,setProfiles] = useState([])
    const[blog,setBlog] = useState(0)
    const [blogTitle,setBlogTitle] = useState([])
    const [readTime,setReadTime] = useState(0)
    const [isBookmark,setIsBookMark] = useState(false)

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProfiles(data))

    },[])

    useEffect(()=>{
        
    },[])
  
    const handleBookMark = (blogName,toast,id)=> {
        // const findBlog = profiles.find(profile => profile.id ===id)
        
    if(blogTitle.includes(blogName)){
    return toast('You Have Already Bookmarked This Blog');
     }
    else{
    
    setBlogTitle([...blogTitle,blogName])
    setBlog(blog + 1)   
    }
    }
    
    
    
    const handleMarkAsRead = (Read_time)=> {
      setReadTime(readTime + Read_time)
      
    }

    
    return (
        <div>
           <div className="cafe-Container">
          
            <div className="cafe-profile">
                <h2>here is cafe profile</h2>
                {
                    profiles.map(profile => <Profile 
                        profile={profile}
                        handleBookMark ={handleBookMark}
                        handleMarkAsRead ={handleMarkAsRead}
                         key={profile.id}></Profile>)
                }
            </div>
           
           
           
           <div className="cafe-details">
            <SideCart readTime={readTime} blog={blog} blogTitle={blogTitle} key={readTime}></SideCart>
           </div>
           
           
           </div>
       
       
        </div>
    );
};

export default CafeDetails;