Pomodoros = new Mongo.Collection("Pomodoros", {});

var ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
};

Pomodoros.allow({
  insert: ownsDocument,
  update: ownsDocument,
  remove: ownsDocument,
});
