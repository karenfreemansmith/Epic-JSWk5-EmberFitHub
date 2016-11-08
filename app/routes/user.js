import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.store.findRecord('user', params.user_id);
 },
 actions: {
   saveUser(user, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        user.set(key,params[key]);
      }
    });
    user.save();
    this.transitionTo('users');
  },
    deleteUser(user) {
       user.destroyRecord();
        this.transitionTo('users');
    }
  }
});
