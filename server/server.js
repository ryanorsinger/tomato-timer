Poms.allow({
  insert: function (userId, pomodoro) {
      return pomodoro.owner === userId;
  },
  remove: function (userId, pomodoro) {
      return pomodoro.owner === userId;
  }
});
