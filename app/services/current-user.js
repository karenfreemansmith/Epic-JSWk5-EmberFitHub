import Ember from 'ember';

export default Ember.Service.extend({
  users: [],

  add(user) {
    this.get('users').clear();
    this.get('users').pushObject(user);
  }
});
