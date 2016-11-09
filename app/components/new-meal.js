import Ember from 'ember';

export default Ember.Component.extend({
  addNewMeal: false,
  actions: {
    mealFormShow() {
      this.set('addNewMeal', true);
    },
    saveMeal() {
      var params = {
        description: this.get('description'),
        mealtime: this.get('mealtime')  ? this.get('mealtime') : "",
        foods: this.get('foods'),
      };
      this.set('addNewMeal', false);
      this.sendAction('saveMeal', params);
    }
  }
});
