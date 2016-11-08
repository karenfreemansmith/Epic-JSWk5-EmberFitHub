import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateFood: false,
  actions: {
    showUpdateFood() {
      this.set('showUpdateFood', true);
    },
    updateFood() {
      var params = {
        food: this.get('edit-food') ? this.get('edit-food') : "",
        calories: this.get('edit-calories') ? this.get('edit-calories') : "",
        protein: this.get('edit-protein') ? this.get('edit-protein') : "",
        carbs: this.get('edit-carbs') ? this.get('edit-carbs') : "",
        fat: this.get('edit-fat') ? this.get('edit-fat') : "",
        category: this.get('edit-category') ? this.get('edit-category') : "",
      };
      this.sendAction('updateFood', params);
    }
  }
});
