import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('food', params.food_id);
  },
  actions: {
    updateFood(food, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          food.set(key,params[key]);
        }
      });
      food.save();
      this.transitionTo('foods');
    },
    deleteFood(food) {
      food.destroyRecord();
      this.transitionTo('foods');
    }
  }
});
