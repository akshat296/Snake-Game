import { Switch, Route } from 'react-router-dom';
import React  from 'react';
import Register from './components/Register';
import App from './App';
const Main = () => (
  <main>
    <Switch>
      <Route path='/register' component={Register}/>
      <Route path='/signin' component={App}/>
    </Switch>
  </main>
)
export default Main;