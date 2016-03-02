if(Repos.find({}).fetch().length === 0) {
  Repos.insert(
    {
      vendor: 'github',
      url: 'https://github.com/facebook/flow',
      name: 'flow',
      owner: 'facebook'
    });
  Repos.insert({
      vendor: 'github',
      url: 'https://github.com/emberjs/ember.js/',
      name: 'ember.js',
      owner: 'emberjs'
    });
}

Meteor.publish('Repos', () => Repos.find());