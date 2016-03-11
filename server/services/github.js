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
    }, Meteor.bindEnvironment((error, results) => {
      (results.items || []).forEach(result => {
        Owners.insert(result.owner, (error, id) => {
          result.ownerId = id;
          result.vendor = 'github';

          Repos.insert(result, (error, id) => {
            result._id = id;
          });
        });
      });

      callback(null, results.items);
    }));
  }
}

this.Github = Github;