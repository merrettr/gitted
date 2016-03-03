'use strict';

this.Repos = new GittedCollection('repos');

Repos.schema = new SimpleSchema({
  id: {type: String},
  ownerId: {type: String, regEx: SimpleSchema.RegEx.Id},
  vendor: {type: String},
  url: {type: String},
  name: {type: String}
});

Repos.attachSchema(Repos.schema);

Repos.helpers({
  /**
   * Get repository owner object
   */
  owner() {
    return Owners.findOne({ownerId: this._id});
  }
});

