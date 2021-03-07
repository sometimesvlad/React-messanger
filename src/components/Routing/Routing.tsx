import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'components/Home/Home';
import ChatRoom from 'components/ChatRoom/ChatRoom';

const ROUTES = [
  {
    path: '/',
    Component: Home,
  },
];

const Routing = (): ReactElement => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/:roomId" render={(props) => {
        return ( <ChatRoom {...props} />)
      }}>
      </Route>
    </Switch>
  </Router>
);

export default Routing;
