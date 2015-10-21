// Collection declaration. Notice that this is global.
// Creates mongo collection on server
// Creates a cache-like "minimongo" in memory on the client
Poms = new Mongo.Collection('pomodoros', {});

var isDocumentOwner = function(userId, doc) {
    // Truthy-falsy protecting against raising the exception
    return doc && doc.owner === userId;
}

Poms.allow({
  insert: isDocumentOwner,
  update: isDocumentOwner,
  remove: isDocumentOwner,
});
