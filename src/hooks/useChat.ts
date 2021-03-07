import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { io, Socket } from 'socket.io-client';

import { useLocalStorage, useBeforeUnload } from 'hooks';
import { API_URL } from 'core/constants/api-url';

import { Message, User } from 'core/interfaces';

export const useChat = (roomId: string) => {
  const [ users, setUsers ] = useState<User[]>([]);
  const [ messages, setMessages ] = useState<Message[]>([]);

  const [ userId ] = useLocalStorage('userId', nanoid(8));
  const [ username ] = useLocalStorage('username');

  const socketRef = useRef(null as any);

  useEffect(() => {
    socketRef.current = io(API_URL, {
      query: { roomId }
    });
    socketRef.current.emit('user:add', { username, userId });
    socketRef.current.on('users', (users: User[]) => {
      setUsers(users);
    });
    socketRef.current.on('messages', (messages: Message[]) => {
      const newMessages = messages.map((msg: Message) => msg.userId === userId 
        ? { ...msg, currentUser: true } 
        : msg
      );
      setMessages(newMessages);
    });

    return () => socketRef.current.disconnect();
  }, [roomId, userId, username]);

  const sendMessage = ({ messageText, senderName }: any): void => {
    socketRef.current.emit('message:add', {
      userId,
      messageText, 
      senderName
    });
  };

  const removeMessage = (id: string): void => {
    socketRef.current.emit('user:remove', id);
  };

  useBeforeUnload(() => {
    socketRef.current.emit('user:leave', userId);
  });

  return { users, messages, sendMessage, removeMessage };
}
