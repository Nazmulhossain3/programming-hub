import React from 'react';
import './Profile.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Profile = ({profile}) => {
    const {Author_name,Blog_title,Publish_Date,Read_time,author_pic,cover_pic,id} = profile
    console.log(profile)
    return (
        <div className='profile-container'>
            <img className='cover-pic' src={cover_pic} alt="" />
            
            <div className="author-info">

                <div className="autho-bio">
                    <img className='author-pic'  src={author_pic} alt="" />
                    <p className='name-date'>{Author_name} <br />{Publish_Date}</p>
                </div>
           
                <div className="book-mark">
                    <p>{Read_time}</p>
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
            
            </div>
            
        </div>
    );
};

export default Profile;