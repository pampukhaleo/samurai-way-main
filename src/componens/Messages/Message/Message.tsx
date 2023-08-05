import React from 'react'
import { MessageDataType } from '../../../redux/state';

type PropsType = {
  messageData: MessageDataType[]
}

export const Message = ({ messageData }: PropsType) => {
  return (
    <div className="messages">
      { messageData.map(({ messages, id }) => {
        return <div key={ id }>
          {
            messages.map((message) => (
              <div key={message.id}>
                { message.text }
              </div>
            ))
          }
        </div>
      }) }
    </div>
  )
}
