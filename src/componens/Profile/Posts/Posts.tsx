import React from 'react';
import {Button} from '../../Button/Button';
import './posts.css'

type PostsType = {
  profilePicture: string
}

export const Posts = ({profilePicture}: PostsType) => {
  return (
    <div className="posts_container">
      <h2>My posts</h2>
      <div className="posts-input_container">
        <input className="posts_new-post-input" type="text"/>
        <Button name="Send"/>
      </div>
      <ul className="posts-list">
        <li className="post">
          <img src={profilePicture} className="post_circle" alt='profile-picture'/>
          <span className="post-text">Hey</span>
        </li>
        <li className="post">
          <img src={profilePicture} className="post_circle" alt='profile-picture'/>
          <span className="post-text">Hello</span>
        </li>
        <li className="post">
          <img src={profilePicture} className="post_circle" alt='profile-picture'/>
          <span className="post-text">Byw</span>
        </li>
      </ul>
    </div>
  )
}
