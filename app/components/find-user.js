import Ember from 'ember';

export default Ember.Component.extend({
  editUser: false,

  actions: {
    userFormShow() {
      this.set('editUser', true);
    },
    saveUser() {
      var params = {
        username: this.get('username'),
        password: this.get('password'),
        email: this.get('email'),
        firstname: this.get('firstname'),
        lastname: this.get('lastname'),
        image: this.get('image'),
        goal: this.get('goal'),
      };
      this.set('editUser', false);
      this.sendAction('saveUser', params);
    }
  }
});
