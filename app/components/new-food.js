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
        food: this.get('new-food') ? this.get('new-food') : "",
        calories: this.get('new-calories') ? this.get('new-calories') : "",
        protein: this.get('new-protein') ? this.get('new-protein') : "",
        carbs: this.get('new-carbs') ? this.get('new-carbs') : "",
        fat: this.get('new-fat') ? this.get('new-fat') : "",
        category: this.get('menuFood')
      };
      this.sendAction('addNewFood', params);
    },
 }
});
