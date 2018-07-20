import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Main } from './jsxs/Main.jsx';
import { About } from './jsxs/About.jsx';
import { Individual } from './jsxs/Individual.jsx';
import { Contact } from './jsxs/Contact.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/about" component={ About } />
          <Route path="/contact" component={ Contact } />
          <Route path="/app/:slug" component={ Individual } />
        </Switch>
      </BrowserRouter>
    );
  }
}
