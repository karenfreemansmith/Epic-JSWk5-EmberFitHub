import Ember from 'ember';

export default Ember.Component.extend({
  loggedOut: false,
  actions: {
    logInFormShow() {
      this.set('loggedOut', true);
    },
    userLogIn() {
      var params = {
        email: this.get('email'),
        password: this.get('password'),
      };
      this.set('loggedOut', false);
      this.sendAction('userLogIn', params);
    }
  }
});
