import Ember from 'ember';

export default Ember.Component.extend({
  addNewActivity: false,
  actions: {
    activityFormShow() {
      this.set('addNewActivity', true);
    },
    saveActivity() {
      var params = {
        description: this.get('description'),
        goalamount: parseFloat(this.get('amount')),
        units: this.get('units'),
      };
      this.set('addNewActivity', false);
      this.sendAction('saveActivity', params);
    }
  }
});
