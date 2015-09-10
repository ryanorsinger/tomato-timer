Pomodoros = new Mongo.Collection("Pomodoros", {});

var ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
};

Pomodoros.allow({
  insert: ownsDocument,
  update: ownsDocument,
  remove: ownsDocument,
});

Meteor.methods({
  createPomodoro: function (pomodoro) {
    check(pomodoro, {
      userId: String,
      startDate: Date,
      goal: String
    });
    
    console.log("Adding pomodoro:", pomodoro);
    
    var pomodoroId = Pomodoros.insert(pomodoro);

    if (!this.isSimulation) {
      Meteor.setTimeout(function () {
        // Ensure that the pomodoro hasn't been deleted in the meantime...
        if (Pomodoros.findOne(pomodoroId)) {
          console.log("Pomodoro ended:", pomodoro.goal);
        }
      }, 25 * 60 * 1000);
    }
  }
});
