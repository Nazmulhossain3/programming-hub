import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import './CafeDetails.css'

const CafeDetails = () => {
    const [profiles,setProfiles] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProfiles(data))

    },[])

    return (
        <div>
           <div className="cafe-Container">
          
            <div className="cafe-profile">
                <h2>here is cafe profile</h2>
                {
                    profiles.map(profile => <Profile profile={profile} key={profile.id}></Profile>)
                }
            </div>
           
           
           
           <div className="cafe-details">
            <h2>here is cafe details</h2>
           </div>
           
           
           </div>
       
       
        </div>
    );
};

export default CafeDetails;