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


  }


});
