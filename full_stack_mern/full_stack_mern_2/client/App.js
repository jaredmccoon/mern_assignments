import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Create from './views/Create'
import Dashboard from './views/Dashboard'
import OneProject from './views/OneProject'
import EditProject from './views/EditProject'
import Message from './views/Message'


function App() {
  return (
    <BrowserRouter>
    <h1>Projects DB</h1>
      <Switch>
        <Route exact path="/message">
          <Message />
        </Route>
        <Route exact path="/projects">
          <Dashboard />
        </Route>
        <Route exact path="/projects/new">
          <Create />
        </Route>
        <Route exact path="/projects/:id">
          <OneProject />
        </Route>
        <Route exact path="/projects/:id/edit">
          <EditProject />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
