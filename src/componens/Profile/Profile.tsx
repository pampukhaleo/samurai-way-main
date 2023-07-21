import React from 'react';
import { Posts } from './Posts/Posts';
import './profile.css'
import { ProfileData } from './ProfileData/ProfileData';

type ProfileType = {
  name: string
  birthday: number
  city: string
  education: string
  website: string
  profilePicture: string
}
export type PropsType = {
  profileData: ProfileType
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
