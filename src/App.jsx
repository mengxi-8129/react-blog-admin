import { Route, Switch, Redirect } from 'react-router-dom';
import Admin from './pages/Admin';
// import { login, logout } from '../redux/actions/loginState';

function App() {
  return (
    <>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Redirect to="/admin" />
      </Switch>
    </>
  );
}

export default App;
