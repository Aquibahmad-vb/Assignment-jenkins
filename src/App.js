import './App.css';
import Bots from './component/Bots';
import Header from './component/Header';
import {Route,Switch,Redirect} from 'react-router-dom';
import BotsDetail from './component/BotsDetail';

function App() {

  return (
    <>
    <div className="canvas">
    <Header/>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/bots" />
      </Route>
      <Route path="/bots" exact>
        <Bots/>
      </Route>
      <Route path="/bots-detail/:id" exact>
        <BotsDetail />
      </Route>
    </Switch>
    </div>
    </>
  );
}

export default App;
