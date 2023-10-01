import React, { useRef } from 'react';
import { Button } from '../../Button/Button';
import './posts.css'
import { PostItem } from './PostItem/PostItem';
import { ActionTypes } from "../../../redux/state";
import { AddPostAC, ChangePostTextAC } from "../../../redux/state";

type Posts = {
  id: number
  text: string
  likes: number
}

type PostsType = {
  profilePicture: string
  posts: Posts[]
  postText: string
  dispatch: (action: ActionTypes) => void
}

export const Posts = ({ profilePicture, posts, dispatch, postText }: PostsType) => {

  const postTextValue = useRef<HTMLInputElement>(null);
  const onClickHandler = () => {
    dispatch(AddPostAC())
  }

  const onChangeHandler = () => {
    const postText = postTextValue?.current?.value ?? ''
    dispatch(ChangePostTextAC(postText))
  }

  return (
    <div className="posts_container">
      <h2>My posts</h2>
      <div className="posts-input_container">
        <input className="posts_new-post-input" type="text" ref={ postTextValue } value={ postText }
               onChange={ onChangeHandler }/>
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
