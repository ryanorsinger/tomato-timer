Template.pomodoroItem.helpers({
  formattedRemaining: function () {
    return formattedRemaining(this);
  },
  relativeStartDate: function() {
    return moment(this.startDate).fromNow();
  }
});

Template.pomodoroItem.events({
  'click .delete' : function (e) {
    Pomodoros.remove(this._id);
  }
});
