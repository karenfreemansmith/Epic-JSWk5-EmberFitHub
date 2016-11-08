import Ember from 'ember';

export default Ember.Component.extend({
  editMeal: false,
  actions: {
    mealFormShow() {
      this.set('editMeal', true);
    },
    saveMeal() {
      var params = {
        description: this.get('description') ? this.get('description') : "",
        mealtime: this.get('mealtime') ? this.get('mealtime') : "",
        foods: this.get('foods') ? this.get('foods') : "",
      };
      this.sendAction('saveActivity', params);
    }
  }
});
