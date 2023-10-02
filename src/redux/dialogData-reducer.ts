import { ActionTypes, DialogDataType } from "./state";

export type AddMessageAT = {
  type: 'ADD-MESSAGE'
}

export type ChangeMessageTextAT = {
  type: 'CHANGE-MESSAGE-TEXT'
  text: string
}

export const dialogDataReducer = (state: DialogDataType, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      const newMessage = {
        id: 5,
        text: state.newMessageText,
      }
      state.messages.push(newMessage)
      state.newMessageText = ''
      return state
    case 'CHANGE-MESSAGE-TEXT':
      state.newMessageText = action.text
      return state
    default:
      return state
  }
}

export const AddMessageAC = (): AddMessageAT => {
  return {
    type: 'ADD-MESSAGE'
  }
}

export const ChangeMessageTextAC = (text: string): ChangeMessageTextAT => {
  return {
    type: 'CHANGE-MESSAGE-TEXT',
    text
  }
}