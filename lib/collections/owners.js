'use strict';

class OwnersCollection extends GittedCollection {
  insert(owner, callback) {
    // map from githubs name login to our name username
    owner.username = owner.username || owner.login;
    super.insert(owner, callback);
  }

  update(selector, modifier, options, callback) {
    // map from githubs name login to our name username
    modifier.$set.username = modifier.$set.username || modifier.login;
    super.update(selector, modifier, options, callback);
  }
}

this.Owners = new OwnersCollection('owners');

Owners.schema = new SimpleSchema({
  id: {type: String},
  username: {type: String},
  url: {type: String},
  avatar_url: {type: String}
});

Owners.attachSchema(Owners.schema);