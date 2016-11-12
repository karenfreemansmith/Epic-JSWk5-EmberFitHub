import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  currentDate: Ember.inject.service()
});
