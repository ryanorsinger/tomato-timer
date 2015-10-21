if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  // Poms.allow({
  //   insert: function (userId, pomodoro) {
  //       return pomodoro.owner === userId;
  //   },
  //   remove: function (userId, pomodoro) {
  //       return pomodoro.owner === userId;
  //   }
  // });
}
