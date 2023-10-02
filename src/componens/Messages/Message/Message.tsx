import React, { ChangeEvent } from 'react'
import { ActionTypes, MessageDataType } from '../../../redux/state';
import { AddMessageAC, ChangeMessageTextAC } from "../../../redux/dialogData-reducer";

type PropsType = {
  messages: MessageDataType[]
  dispatch: (action: ActionTypes) => void
  newMessageText: string
}

export const Message = ({ messages, dispatch, newMessageText }: PropsType) => {
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(ChangeMessageTextAC(e.currentTarget.value))
  }

  const onClickHandler = () => {
    dispatch(AddMessageAC())
  }

  return <div className="messages">
    {
      messages.map(message => {
        return <div key={ message.id }>
          { message.text }
        </div>
      })
    }
    <textarea value={newMessageText} onChange={onChangeHandler}></textarea>
    <button onClick={onClickHandler}>Send</button>
  </div>
}
