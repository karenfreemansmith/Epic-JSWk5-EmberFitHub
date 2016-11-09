import DS from 'ember-data';

export default DS.Model.extend({
  food: DS.attr(),
  calories: DS.attr(),
  protein: DS.attr(),
  carbs: DS.attr(),
  fat: DS.attr(),
  category: DS.attr(),
  meals: DS.hasMany('meal', {async: true}),
});
