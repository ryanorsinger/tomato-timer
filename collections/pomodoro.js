var pomodoro = {
  endDate: function () {
    var endDateMoment = moment(this.startDate).add(moment.duration(POMODORO_LENGTH, 'minutes'));
    return endDateMoment.toDate();
  },
  remaining: function () {
    return this.endDate().getTime() - Date.now();
  },
  done: function () {
    return this.remaining() < 0;
  },
};

Pomodoros = new Mongo.Collection("Pomodoros", {
  transform: function (doc) { return _.extend(Object.create(pomodoro), doc); }
});

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
    
    // Find it again to get the transformed version so we can use remaining()
    pomodoro = Pomodoros.findOne(pomodoroId);

    if (!this.isSimulation) {
      Meteor.setTimeout(function () {
        // Ensure that the pomodoro hasn't been deleted in the meantime...
        if (Pomodoros.findOne(pomodoroId)) {
          console.log("Pomodoro ended:", pomodoro.goal);
        }
      }, pomodoro.remaining());
    }
  }
});
