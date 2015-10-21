// Collection declaration. Notice that this is global.
// Creates mongo collection on server
// Creates a cache-like "minimongo" in memory on the client
Poms = new Mongo.Collection('pomodoros', {});

var isDocumentOwner = function(userId, pomodoro) {
    return userId && pomodoro.owner === Meteor.userId();
}

Poms.allow({
  insert: isDocumentOwner,
  update: isDocumentOwner,
  remove: isDocumentOwner,
});
