import React from 'react';
import { Button } from '../../Button/Button';
import './posts.css'
import { PostItem } from './PostItem/PostItem';

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
        <PostItem profilePicture={profilePicture} text="Hi, my name is Neo"/>
        <PostItem profilePicture={profilePicture} text="Hello, im from Ukraine"/>
        <PostItem profilePicture={profilePicture} text="How are you all doing boys"/>
      </ul>
    </div>
  )
}
