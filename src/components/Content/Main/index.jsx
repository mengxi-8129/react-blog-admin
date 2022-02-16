import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../../../pages/Admin/Home';

const Main = () => {
    return (
        <div className="MainBox">
            <Switch>
                <Route path="/admin/home" component={Home} />
            </Switch>
        </div>
    )
}
export default Main