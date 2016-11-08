import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('meal');
  },
  actions: {
    saveMeal(params) {
      var newMeal = this.store.createRecord('meal', params);
      newMeal.save();
      this.transitionTo('meals');
    }
  }

});
