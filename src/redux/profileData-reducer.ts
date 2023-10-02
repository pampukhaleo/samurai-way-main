import { ActionTypes, ProfileDataType } from "./state";

export type AddPostAT = {
  type: 'ADD-POST'
}

export type ChangePostTextAT = {
  type: 'CHANGE-POST-TEXT'
  text: string
}

export const profileDataReducer = (state: ProfileDataType, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD-POST':
      const newPost = {
        id: 5,
        text: state.postText,
        likes: 0
      }
      state.posts.push(newPost)
      state.postText = ''

      return state
    case 'CHANGE-POST-TEXT':
      state.postText = action.text
      return state
    default:
      return state
  }
}

export const AddPostAC = (): AddPostAT => {
  return {
    type: 'ADD-POST'
  }
}

export const ChangePostTextAC = (text: string): ChangePostTextAT => {
  return {
    type: 'CHANGE-POST-TEXT',
    text
  }
}