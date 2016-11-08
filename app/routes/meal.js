import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveMeal(meal, params) {
     Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         meal.set(key,params[key]);
       }
     });
     meal.save();
     this.transitionTo('meals');
   },
     deleteMeal(meal) {
        meal.destroyRecord();
         this.transitionTo('meals');
     }
   }
});
