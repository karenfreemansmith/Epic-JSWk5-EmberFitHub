import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.store.findRecord('activity', params.activity_id);
 },
 actions: {
   updateActivity(activity, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        activity.set(key,params[key]);
      }
    });
    activity.save();
    this.transitionTo('activities');
  },
    deleteActivity(activity) {
       activity.destroyRecord();
        this.transitionTo('activities');
    }
  }
});
