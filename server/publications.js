'use strict';

// all repos
Meteor.publish('Repos', () => Repos.find());

// search repos
Meteor.publish('Search', (query) => {
  function test(callback) {
    setTimeout(() => {
     console.log('here');
     callback(null, []);
     }, 3000);
  }

  //const x = Meteor.wrapAsync(test)();
  //console.log(x);
  //return x;
  throw new Error({error: 'message'});
});