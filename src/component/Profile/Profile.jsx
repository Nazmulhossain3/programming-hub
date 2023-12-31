import React from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = ({profile,handleBookMark,handleMarkAsRead}) => {
    const {Author_name,Blog_title,Publish_Date,Read_time,author_pic,cover_pic,id} = profile
    
    return (
        <div className='profile-container'>
            <img className='cover-pic' src={cover_pic} alt="" />
            
            <div className="author-info">

                <div className="autho-bio">
                    <img className='author-pic'  src={author_pic} alt="" />
                    <p className='name-date'>{Author_name} <br />{Publish_Date}</p>
                </div>
           
                <div className="book-mark">
                    <p>{Read_time}<span>mn to read</span></p>
                    <FontAwesomeIcon icon={faBookmark} onClick={()=> handleBookMark(Blog_title,toast,profile.id)} />
                </div>
            
            </div>
            
            <h2>{Blog_title}</h2>
            <span> #programming #begainer</span> <br /> <br />
            <a className='read-time' onClick={()=> handleMarkAsRead(Read_time)}>Mark as read</a>

            <ToastContainer />
        </div>
    );
};

export default Profile;