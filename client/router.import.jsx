'use strict';

import App from 'client/components/app';
import Repos from 'client/components/repos';
import Repo from 'client/components/repo';

const {Router, Route, hashHistory} = ReactRouter;

Meteor.startup(() => {
  ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/repos" component={Repos}>
          <Route path="/repo/:repoId" />
        </Route>
      </Route>
    </Router>),
    document.getElementById('render-target')
  );
});