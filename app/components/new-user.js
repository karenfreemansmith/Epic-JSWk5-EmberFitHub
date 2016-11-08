import Ember from 'ember';

export default Ember.Component.extend({
  addNewUser: false,
  actions: {
    userFormShow() {
      this.set('addNewUser', true);
    },
    saveUser() {
      var params = {
        firstname: this.get('firstname'),
        lastname: this.get('lastname'),
        username: this.get('username'),
        email: this.get('email'),
        password: this.get('password'),
        goal: this.get('goal'),
        image: this.get('image'),
      };
      this.set('addNewUser', false);
      this.sendAction('saveUser', params);
    }
  }
});
