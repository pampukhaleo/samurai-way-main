import React from 'react'
import { MessageDataType } from '../../../App';

type PropsType = {
  messageData: MessageDataType[]
}

export const Message = ({ messageData }: PropsType) => {
  return (
    <div className="messages">
      { messageData.map(({ messages, id }) => {
        return <p key={id}>{ messages }</p>
      }) }
    </div>
  )
}
