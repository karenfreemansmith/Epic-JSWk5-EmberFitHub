import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  type: DS.attr(),
  goalamount: DS.attr(),
  units: DS.attr()
});
