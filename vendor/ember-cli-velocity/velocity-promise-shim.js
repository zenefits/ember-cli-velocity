+(function($, Ember){
  // Overwrite Velocity Promise to use Ember Promise
  // so that Velocity animation would be in Ember run loop.
  $.Velocity.Promise = Ember.RSVP.Promise;
})(jQuery, Ember);
