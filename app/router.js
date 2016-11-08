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
  this.route('stats');
  this.route('food', {path: '/food/:food_id'});
  this.route('activity', {path: '/activity/:activity_id'});
  this.route('meal', {path: '/meal/:meal_id'});
});

export default Router;
