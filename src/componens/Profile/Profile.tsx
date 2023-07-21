import React from 'react';
import './profile.css'

type ProfileType = {
  name: string
  birthday: number
  city: string
  education: string
  website: string
}
type PropsType = {
  profileData: ProfileType
}

function Profile({profileData}: PropsType) {
  return (
    <div className="profileContent">
      <img className="cover" src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg" alt="profile"/>

      <div className='profile_container'>

        <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="profile-picture" className="profile-picture"/>

        <div className="profile-data_container">
          <h2 className="profile-data_name">
            {profileData.name}
          </h2>
          <ul className='profile-data'>
            <li>age: {profileData.birthday}</li>
            <li>city: {profileData.city}</li>
            <li>education: {profileData.education}</li>
            <li>website: {profileData.website}</li>
          </ul>
        </div>
      </div>

      <div className="posts_container">
        <h2>My posts</h2>
        <div className="posts-input_container">
          <input className='posts_new-post-input' type="text"/>
          <button className='posts_send-button'>Send</button>
        </div>
        <ul className="posts-list">
          <li className="post">
            <div className="post_circle"></div>
            <span className="post-text">Hey</span>
          </li>
          <li className="post">
            <div className="post_circle"></div>
            <span className="post-text">Hello</span>
          </li>
          <li className="post">
            <div className="post_circle"></div>
            <span className="post-text">Byw</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
