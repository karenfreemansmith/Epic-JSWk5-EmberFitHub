import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  mealtime: DS.attr(),
  foods: DS.attr()
  // foods: DS.hasMany('food', {async: true}),
  // user: DS.belongsTo('user', { async: true })
});
