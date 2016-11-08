import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('food');
  },
  actions: {
    addNewFood(params) {
      var newFood = this.store.createRecord('food', params);
      newFood.save();
      console.log(params);
      this.transitionTo('foods');
    },
    updateFood(food, params) {
     Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         food.set(key,params[key]);
       }
     });
     food.save();
     this.transitionTo('foods');
   },

  }


});
