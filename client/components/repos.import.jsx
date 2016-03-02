'use strict';

import Item from 'client/components/item';

const {
  ListGroup,
  ListGroupItem
} = ReactBootstrap;

export default React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe('Repos');

    return {repos: Repos.find({}).fetch()};
  },

  onItemClicked(repo) {
    console.log(repo);
  },

  renderRepo(repo) {
    return (
      <ListGroupItem
        className="card"
        key={repo._id}
        style={{marginBottom: '.5em'}}
        onClick={this.onItemClicked}>
        <Item
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