import React from 'react'
import './messages.css'

type MessageType = {
  message: string
}

type MessagesType = {
  id: number
  profileName: string
  messages: MessageType[]
}

type MessageDataPropsType = {
  messageData: MessagesType[]
}

export const Messages = ({ messageData }: MessageDataPropsType) => {
  return (
    <div className="container">
      <div className="dialogs">
        { messageData.map(dialog => (
          <h2>{ dialog.profileName }</h2>
        )) }
      </div>
      <div className="messages">
        { messageData.map(({ messages }) => (
          messages.map(({ message }) => (
            <p>{ message }</p>
          ))
        )) }
      </div>
    </div>
  )
}
