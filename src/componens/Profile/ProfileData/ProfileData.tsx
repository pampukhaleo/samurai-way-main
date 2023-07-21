import React from 'react';
import {PropsType} from '../Profile';
import './profileData.css'

export const ProfileData = ({profileData}: PropsType) => {
  return (
    <>
      <img className="cover" src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg" alt="profile"/>

      <div className="profile_container">

        <img src={profileData.profilePicture} alt="profile-picture" className="profile-picture"/>

        <div className="profile-data_container">
          <h2 className="profile-data_name">
            {profileData.name}
          </h2>
          <ul className="profile-data">
            <li>age: {profileData.birthday}</li>
            <li>city: {profileData.city}</li>
            <li>education: {profileData.education}</li>
            <li>website: {profileData.website}</li>
          </ul>
        </div>
      </div>
    </>
  )
}
