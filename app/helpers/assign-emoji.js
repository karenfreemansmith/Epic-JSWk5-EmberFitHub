import Ember from 'ember';

export function assignEmoji(params) {

  var food = params[0];
	if(food.get('emojiFood') != null) {
    console.log("passed the emoji");
    // return Ember.String.htmlSafe('<span>Yay</span>');
	}
}

export default Ember.Helper.helper(assignEmoji);
