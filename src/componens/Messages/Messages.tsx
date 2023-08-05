import React from 'react'
import './messages.css'
import { DialogsItem } from './Dialogs/Dialog';
import { DialogType, MessageDataType } from '../../App';
import { Message } from './Message/Message';

type PropsTyper = {
  messageData: MessageDataType[]
  dialogData: DialogType[]
}



export const Messages = ({ messageData, dialogData }: PropsTyper) => {
  return (
    <div className="container">
      <DialogsItem dialogData={ dialogData }/>
      <Message messageData={ messageData }/>
    </div>
  )
}
