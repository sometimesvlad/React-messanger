import { ReactElement, useState } from 'react';
import { User } from 'core/interfaces';

type UserListProps = {
  users: User[];
  me: string;
}

const UserList = ({ users, me }: UserListProps): ReactElement => {
  const [ isListOpened, setIsListOpened ] = useState(false);

  const roomUsers = Object.values(users).slice(0, Object.values(users).length-1);
  const activeUsersCount = roomUsers.filter(u => u.online).length + 1;

  return (
    <div className="user-list">
      <div className="user-list__button">
        Online users: {activeUsersCount}
      </div>
      <div className="user-list__list">
        {roomUsers.map((u, i) => (
          <div className="user-list__list-user" key={i}>
            <div>{u.username}</div>
          </div>
        ))}
      </div>
    </div> 
  )
}

export default UserList;
