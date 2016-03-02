'use strict';

const githubapi = Meteor.npmRequire('octonode');

class Github {
  constructor() {
    this.client = githubapi.client();

    this.search = this.search.bind(this);
  }

  search(query, callback) {
    this.client.search().repos({
      q: query
    }, callback);
  }
}

this.Github = Github;