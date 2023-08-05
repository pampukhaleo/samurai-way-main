import React from 'react';
import { Posts } from './Posts/Posts';
import './profile.css'
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileDataType } from '../../redux/state';

type PropsType = {
  profileData: ProfileDataType
}

function Profile({profileData}: PropsType) {
  return (
    <div className="profileContent">
      <ProfileData profileData={profileData}/>
      <Posts profilePicture={profileData.profilePicture}/>
    </div>
  )
}

export default Profile
