import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr(),
  lastname: DS.attr(),
  username: DS.attr(),
  password: DS.attr(),
  goal: DS.attr(),
  email: DS.attr(),
  image: DS.attr(),
  meals: DS.hasMany('meal', {async: true}),
  activities: DS.hasMany('activity', {async: true})
});
