import React from 'react'
import './messages.css'
import { DialogsItem } from './Dialogs/Dialog';
import { Message } from './Message/Message';
import { ActionTypes, DialogDataType } from '../../redux/state';

type PropsTyper = {
  dialogData: DialogDataType
  dispatch: (action: ActionTypes) => void
}

export const Messages = ({ dialogData, dispatch }: PropsTyper) => {
  return (
    <div className="container">
      <DialogsItem dialogs={ dialogData.dialogs }/>
      <Message messages={ dialogData.messages } newMessageText={dialogData.newMessageText} dispatch={dispatch}/>
    </div>
  )
}
