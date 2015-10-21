Template.pomodorosList.events({
  'click input[value="Delete"]' : function (e) {
    Poms.remove(this._id);
  }
});

