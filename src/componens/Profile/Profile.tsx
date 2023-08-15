import React from 'react';
import { Posts } from './Posts/Posts';
import './profile.css'
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileDataType } from '../../redux/state';

type PropsType = {
  profileData: ProfileDataType
  addPost: (text: string) => void
}

function Profile({ profileData, addPost }: PropsType) {
  return (
    <div className="profileContent">
      <ProfileData profileData={ profileData }/>
      <Posts profilePicture={ profileData.profilePicture }
             posts={ profileData.posts }
             addPost={addPost}/>
    </div>
  )
}

export default Profile
