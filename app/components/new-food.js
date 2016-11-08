import Ember from 'ember';

export default Ember.Component.extend({
  model() {
    return this.store.findAll('food');
  },
  actions: {
    addNewFood() {
     var params = {
       food: this.get('new-food') ? this.get('new-food') : "",
       calories: this.get('new-calories') ? this.get('new-calories') : "",
       protein: this.get('new-protein') ? this.get('new-protein') : "",
       carbs: this.get('new-carbs') ? this.get('new-carbs') : "",
       fat: this.get('new-fat') ? this.get('new-fat') : "",
       category: this.get('new-category') ? this.get('new-category') : "",
     };
     this.sendAction('addNewFood', params);
   }
 }
});
