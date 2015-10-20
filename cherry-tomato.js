Pomodoros = new Mongo.Collection("Pomodoros", {});

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  Template.pomodorosList.helpers({
    allPomodoros: function () {
      return Pomodoros.find({}, {sort: {startDate: -1}});
    }
  });

  Template.pomodorosList.events({
    'submit #new-pomodoro' : function (e) {
      e.preventDefault();

      var pomodoro = {
        startDate: new Date(),
        goal: e.target.goal.value,
      };

      Pomodoros.insert(pomodoro);
    },
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
