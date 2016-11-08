import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('meals');
  this.route('foods');
  this.route('goals');
  this.route('activities');
  this.route('food', {path: '/food/:food_id'});
});

export default Router;
