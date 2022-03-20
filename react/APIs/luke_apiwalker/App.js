import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HeaderForm from './components/HeaderForm';
import People from './views/People';
import Planet from './views/Planet';
import Species from './views/Species';
import Starship from './views/Starship';

function App() {
  return (
    <BrowserRouter>
      <h1>GOT API demo</h1>
      <HeaderForm />
        <Switch>
          <Route path="/people/:id">
            <People />
          </Route>
            <Route path="/planets/:id">
              <Planet />
            </Route>
            <Route path="/species/:id">
              <Species />
            </Route>
            <Route path="/starships/:id">
              <Starship />
            </Route>
        </Switch>

    </BrowserRouter>
  );
}

export default App;
