Template.pomodorosList.helpers({
  allPomodoros: function () {
    return Pomodoros.find({userId: Meteor.userId()}, {sort: {startDate: -1}});
  }
});

Template.pomodorosList.events({
  'submit #new-pomodoro' : function (e) {
    e.preventDefault();

    var pomodoro = {
      userId: Meteor.userId(),
      startDate: new Date(),
      goal: e.target.goal.value,
    };

    Pomodoros.insert(pomodoro);
  },
  'click .delete' : function (e) {
    Pomodoros.remove(this._id);
  }
});
