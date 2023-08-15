import React, { useRef } from 'react';
import { Button } from '../../Button/Button';
import './posts.css'
import { PostItem } from './PostItem/PostItem';

type Posts = {
  id: number
  text: string
  likes: number
}

type PostsType = {
  profilePicture: string
  posts: Posts[]
  addPost: (text: string) => void
}

export const Posts = ({ profilePicture, posts, addPost }: PostsType) => {

  const postTextValue = useRef<HTMLInputElement>(null);
  const onClickHandler = () => {
    // const postText = postTextValue?.current?.value ? postTextValue?.current?.value : ''
    const postText = postTextValue?.current?.value ?? ''
    addPost(postText)
  }

  return (
    <div className="posts_container">
      <h2>My posts</h2>
      <div className="posts-input_container">
        <input className="posts_new-post-input" type="text" ref={postTextValue}/>
        <Button name="Send" callBack={ onClickHandler }/>
      </div>
      <ul className="posts-list">
        {
          posts.map(post => <PostItem profilePicture={ profilePicture } text={ post.text }/>)
        }
      </ul>
    </div>
  )
}
