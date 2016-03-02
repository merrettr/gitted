'use strict';

import Repo from 'client/components/repo';

const {
  ListGroup,
  ListGroupItem
} = ReactBootstrap;

export default React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe('repos');

    return {repos: Repos.find({}).fetch()};
  },

  onRepoClicked(repo) {
    console.log(repo);
  },

  renderRepo(repo) {
    return (
      <ListGroupItem
        className="card"
        key={repo._id}
        style={{marginBottom: '.5em'}}
        onClick={this.onRepoClicked}>
        <Repo
          key={repo._id}
          repo={repo}
        />
      </ListGroupItem>
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