import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    updateUser(model, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          model.set(key,params[key]);
        }
      });
      console.log(model);
      model.save();
      this.transitionTo('users');
    },
    deleteUser(model) {
      model.destroyRecord();
      this.transitionTo('users');
    }
  }
});
