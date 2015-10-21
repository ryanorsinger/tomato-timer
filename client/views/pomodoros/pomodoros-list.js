Template.pomodorosList.helpers({
  allPomodoros: function () {
    return Poms.find({owner: Meteor.userId()}, {sort: {startDate: -1}});
  }
});
