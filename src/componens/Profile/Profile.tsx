import React from 'react';
import { Posts } from './Posts/Posts';
import './profile.css'
import { ProfileData } from './ProfileData/ProfileData';
import { ProfileDataType } from "../../redux/state";
import { ActionTypes } from "../../redux/state"

type PropsType = {
  profileData: ProfileDataType
  dispatch: (action: ActionTypes) => void
}

function Profile({ profileData, dispatch }: PropsType) {
  return (
    <div className="profileContent">
      <ProfileData profileData={ profileData }/>
      <Posts profilePicture={ profileData.profilePicture }
             posts={ profileData.posts }
             postText={ profileData.postText }
             dispatch={ dispatch }
      />
    </div>
  )
}

export default Profile
