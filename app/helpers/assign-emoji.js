import Ember from 'ember';

export function assignEmoji(params) {
  var food = params[0];
  console.log(food);
  var grabCategory = food;
	if(grabCategory !== null) {
    // grabCategory.set('food.category');
    // console.log(food.category);
    return Ember.String.htmlSafe('<span class="EMOJI"><i class="em em-'+food+'"></i></span>');
	} else {
    return Ember.String.w('catfood');
  }
}

// whoa, write to AND serve from firebase

export default Ember.Helper.helper(assignEmoji);
