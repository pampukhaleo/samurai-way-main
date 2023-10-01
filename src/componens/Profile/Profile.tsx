import React from 'react';
import { Posts } from './Posts/Posts';
import './profile.css'
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileDataType } from "../../redux/state";

type PropsType = {
  profileData: ProfileDataType
  addPost: () => void
  changePostText: (text: string) => void
}

function Profile({ profileData, addPost, changePostText }: PropsType) {
  return (
    <div className="profileContent">
      <ProfileData profileData={ profileData }/>
      <Posts profilePicture={ profileData.profilePicture }
             posts={ profileData.posts }
             postText={ profileData.postText }
             addPost={ addPost }
             changePostText={ changePostText }
      />
    </div>
  )
}

export default Profile
