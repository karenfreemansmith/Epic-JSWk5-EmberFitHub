import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		linktoActivities() {
			this.transitionTo('activities');
		},
		linktoFood() {
			this.transitionTo('foods');
		}
	}
});
