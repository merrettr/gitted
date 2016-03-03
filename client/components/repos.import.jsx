'use strict';

import Item from 'client/components/item';

const {
  ListGroup,
  ListGroupItem
} = ReactBootstrap;

const {
  LinkContainer
} = ReactRouterBootstrap;

export default React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe('Repos');

    return {repos: Repos.find({}).fetch()};
  },

  renderRepo(repo) {
    return (
      <LinkContainer
        key={repo._id}
        to={{pathname: `/repos/${repo._id}`}}>
        <div>

          <ListGroupItem
            className="card"
            style={{marginBottom: '.5em'}}
            onClick={() => {}}>
              <Item repo={repo} />
          </ListGroupItem>

        </div>
      </LinkContainer>
    );
  },

  render() {
    return (
      <div>
        <ListGroup>
          {this.data.repos.map(this.renderRepo)}
        </ListGroup>
      </div>
    );
  }
});