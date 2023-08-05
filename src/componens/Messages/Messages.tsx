import React from 'react'
import './messages.css'
import { DialogsItem } from './Dialogs/Dialog';
import { Message } from './Message/Message';
import { DialogDataType, MessageDataType } from '../../index';

type PropsTyper = {
  messageData: MessageDataType[]
  dialogData: DialogDataType[]
}

export const Messages = ({ messageData, dialogData }: PropsTyper) => {
  return (
    <div className="container">
      <DialogsItem dialogData={ dialogData }/>
      <Message messageData={ messageData }/>
    </div>
  )
}
