import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import SideCart from '../SideCart/SideCart';
import './CafeDetails.css'

const CafeDetails = () => {
    const [profiles,setProfiles] = useState([])
    const[blog,setBlog] = useState(0)

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProfiles(data))

    },[])

    useEffect(()=>{
        
        
    },[])
  
    const handleBookMark = ()=> {
      setBlog(blog + 1)
    
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
                         key={profile.id}></Profile>)
                }
            </div>
           
           
           
           <div className="cafe-details">
            <SideCart blog={blog}></SideCart>
           </div>
           
           
           </div>
       
       
        </div>
    );
};

export default CafeDetails;