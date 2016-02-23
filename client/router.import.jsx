'use strict';

import App from 'client/components/app';
import Repos from 'client/components/repos';

const {Router, Route, hashHistory} = ReactRouter;

Meteor.startup(() => {
  ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/repos" component={Repos}/>
      </Route>
    </Router>),
    document.getElementById('render-target')
  );
});