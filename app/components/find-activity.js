import Ember from 'ember';

export default Ember.Component.extend({
  editActivity: false,
  actions: {
    activityFormShow() {
      this.set('editActivity', true);
    },
    updateActivity(activity) {
      var params = {
        description: this.get('description'),
        goalamount: this.get('goalamount'),
        units: this.get('units')
      };
      this.set('editActivity', false);
      this.sendAction('updateActivity', activity, params);
    },
    deleteActivity(activity) {
      if(confirm('Are you sure you want to delete this activity?')) {
        this.sendAction('deleteActivity', activity);
      }
    }
  }

});
