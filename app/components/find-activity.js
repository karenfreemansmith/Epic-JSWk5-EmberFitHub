import Ember from 'ember';

export default Ember.Component.extend({
  editActivity: false,
  actions: {
    activityFormShow() {
      this.set('editActivity', true);
    },
    saveActivity() {
      var params = {
        description: this.get('description') ? this.get('description') : "",
        goalamount: this.get('goalamount') ? this.get('goalamount') : "",
        units: this.get('units') ? this.get('units') : "",
      };
      this.sendAction('saveActivity', params);
    }
  }

});
