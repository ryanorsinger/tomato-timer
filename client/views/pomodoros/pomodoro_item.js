Template.pomodoroItem.events({
  'click .delete' : function (e) {
    Pomodoros.remove(this._id);
  }
});
