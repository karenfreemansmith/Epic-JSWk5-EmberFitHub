import Ember from 'ember';

export default Ember.Component.extend({
  menuFood: null,
	menuFoods: Ember.String.w('coffee tea baby_bottle beer tropical_drink sake wine_glass herb green_apple cherries corn rice bento pizza hamburger meat_on_bone ramen spaghetti sushi fries curry stew lollipop cookie cake candy icecream question'),
  model() {
    return this.store.findAll('food');
  },
  actions: {
    selectFood(menuFood) {
      this.set('menuFood', menuFood);
      console.log(menuFood);
      return menuFood;
    },
    addNewFood() {
      var params = {
        foodname: this.get('foodname') ? this.get('foodname') : "",
        calories: this.get('calories') ? this.get('calories') : "",
        protein: this.get('protein') ? this.get('protein') : "",
        carbs: this.get('carbs') ? this.get('carbs') : "",
        fat: this.get('fat') ? this.get('fat') : "",
        category: this.get('menuFood')
      };
      this.sendAction('addNewFood', params);
    },
 }
});
