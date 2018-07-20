import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Main } from './jsxs/Main.jsx';
import { About } from './jsxs/About.jsx';
import { Individual } from './jsxs/Individual.jsx';

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/about" component={ About } />
          <Route path="/app/:slug" component={ Individual } />
        </Switch>
      </BrowserRouter>
    );
  }
}
