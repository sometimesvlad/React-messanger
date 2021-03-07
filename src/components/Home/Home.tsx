import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLocalStorage } from 'hooks';
import './Home.scss';

const Home = (): React.ReactElement => {
  const [ username, setUsername ] = useLocalStorage('username', '');
  const [ roomId, setRoomId ] = React.useState('');
  const linkRef = React.useRef(null);
  const history = useHistory();

  const handleUsernameChange = (e: React.BaseSyntheticEvent): void => {
    setUsername(e.target.value);
  }

  const handleRoomIdChange = (e: React.BaseSyntheticEvent): void => {
    setRoomId(e.target.value);
  }

  const handleSubmit = (e: React.BaseSyntheticEvent): void => {
    // e.preventDefault();
    history.push(`/${roomId}`);
  }

  return (
    <div className="login-wrapper">
      <div className="login">
        <div className="login__title">
          Welcome to ReactMessanger
        </div>
        <div className="login__form">
          <form onSubmit={handleSubmit}>
            <input className="basic login__form-user" type="text" placeholder="Username" onChange={handleUsernameChange} required />
            <input className="basic login__form-room" type="text" placeholder="Room" onChange={handleRoomIdChange} required />
            <div className="login__form-hint">Available rooms: Free, Frontend, Cooking</div>
            <button className="basic" type="submit">Login</button>
          </form>
        </div>
        <div className="login__footer">

        </div>
      </div>
    </div>
  )
}

export default Home;
