import Ember from 'ember';

export default Ember.Component.extend({
  editUser: false,

  actions: {
    userFormShow() {
      this.set('editUser', true);
    },
    deleteUser(user) {
      if(confirm('Are you sure you want to delete this user?')) {
        this.sendAction('deleteUser', user);
      }
    },
    updateUser(user) {
      var params = {
        username: this.get('username'),
        email: this.get('email'),
        password: this.get('password'),
        firstname: this.get('firstname'),
        lastname: this.get('lastname'),
        image: this.get('image'),
        goal: this.get('goal')
      };
      this.set('editUser', false);
      this.sendAction('updateUser', user, params);
    }
  }
});
