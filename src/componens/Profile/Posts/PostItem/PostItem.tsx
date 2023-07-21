import React from 'react';
import './postItem.css'

type PostItemType = {
  profilePicture: string
  text: string
}

export const PostItem = ({profilePicture, text}: PostItemType) => {
  return (
    <li className="post">
      <img src={profilePicture} className="post_circle" alt="profile-picture"/>
      <span className="post-text">{text}</span>
    </li>
  )
}
