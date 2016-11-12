import Ember from 'ember';

export default Ember.Service.extend({
  dates: [],

  add(date) {
    this.get('dates').clear();
    this.get('dates').pushObject(date);
  }
});
