import React, { useEffect } from 'react';
import UserList from './UserList/UserList';
import { useChat } from 'hooks';

const ChatRoom = ({ match: {params: {roomId }}}): React.ReactElement => {
  const chat = useChat(roomId);
  const me = localStorage.getItem('username');
  console.log(chat);
  return (
    // <div></div>
    <UserList users={chat.users} me={me} />
  );
}

export default ChatRoom;
