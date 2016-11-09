import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateFood: false,
  actions: {
    showUpdateFood() {
      this.set('showUpdateFood', true);
    },
    updateFood(food) {
      console.log(food);
      var params = {
        foodname: this.get('foodname'),
        calories: this.get('calories'),
        protein: this.get('protein'),
        carbs: this.get('carbs'),
        fat: this.get('fat'),
        category: this.get('category'),
      };
      this.sendAction('updateFood', food, params);
    },
    deleteFood(food) {
      if(confirm('Are you sure you want to delete this food?')) {
        this.sendAction('deleteFood', food);
      }
    }
  }
});
