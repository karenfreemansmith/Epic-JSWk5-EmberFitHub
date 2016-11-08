import Ember from 'ember';

export default Ember.Component.extend({
	vehicle: null,
	vehicles: Ember.String.w('coffee tea beer tropical_drink'),
	actions: {
		selectVehicle(vehicle) {
			this.set('vehicle', vehicle);
		}
	}
});
