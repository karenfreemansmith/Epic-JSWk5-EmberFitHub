import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('activity');
  },
  actions: {
    saveActivity(params) {
      var newActivity = this.store.createRecord('activity', params);
      newActivity.save();
      this.transitionTo('activities');
    }
  }
});
