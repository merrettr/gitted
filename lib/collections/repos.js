Repos = new Mongo.Collection('repos');

Repos.schema = new SimpleSchema({
  vendor: {type: String},
  url: {type: String},
  name: {type: String},
  owner: {type: String}
});

Repos.helpers({
  owner() {
    // get repository owner object
  }
});

