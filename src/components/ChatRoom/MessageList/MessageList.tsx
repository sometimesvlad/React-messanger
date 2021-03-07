import React from 'react';
import { Message } from 'core/interfaces';

type MessageListProps = {
  messages: Message[];
}

type MessageProps = {
  message: Message;
}

const Message = ({ message }: MessageProps): React.ReactElement => {
  console.log(message);
  return (
    <div className="message">
      <div className="message__sender">
        { message.senderName }
      </div>
      <div className="message__text">
        { message.messageText }
      </div>
      <div className="message__date">
        { message.createdAt }
      </div>
    </div>
  )
}

const MessageList = ({ messages }: MessageListProps): React.ReactElement => {
  return (
    <div className="messages">
      {messages.map((m, i) => (
        <Message message={m} key={i} />
      ))}
    </div>
  )
}

export default MessageList;
