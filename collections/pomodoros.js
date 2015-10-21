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

// Collection declaration. Notice that this is global.
// Creates mongo collection on server
// Creates a cache-like "minimongo" in memory on the client
Poms = new Mongo.Collection('pomodoros', {
    transform: function (doc) { return _.extend(Object.create(pomodoro), doc); }
});

var isDocumentOwner = function(userId, doc) {
    // Truthy-falsy protecting against raising the exception
    return doc && doc.owner === userId;
}

Poms.allow({
  insert: isDocumentOwner,
  update: isDocumentOwner,
  remove: isDocumentOwner,
});

Meteor.methods({
  createPomodoro: function (pomodoro) {
    check(pomodoro, {
      userId: String,
      startDate: Date,
      goal: String
    });

    console.log("Adding pomodoro:", pomodoro);

    var pomodoroId = Poms.insert(pomodoro);

    // Find it again to get the transformed version so we can use remaining()
    pomodoro = Poms.findOne(pomodoroId);

    if (!this.isSimulation) {
      Meteor.setTimeout(function () {
        // Ensure that the pomodoro hasn't been deleted in the meantime...
        if (Poms.findOne(pomodoroId)) {
          console.log("Pomodoro ended:", pomodoro.goal);
        }
      }, pomodoro.remaining());
    }
  }
});
