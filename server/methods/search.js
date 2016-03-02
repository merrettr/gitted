'use strict';

/**
 * Methods for searching through content
 */
Meteor.methods({
  search(query) {
    return Meteor.wrapAsync(new Github().search)(query);
  }
});