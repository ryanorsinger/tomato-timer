// Collection declaration. Notice that this is global.
// Creates mongo collection on server
// Creates a cache-like "minimongo" in memory on the client
Poms = new Mongo.Collection('pomodoros', {});

if (Meteor.isClient) {

  Template.pomodorosList.helpers({
    allPomodoros: function () {
      // find().fetch() gets back the collection of objects
      // return Poms.find().fetch();
      return Poms.find({}, {sort: {startDate: -1}});
    }
  });

  Template.pomodorosList.events({
    'click input[value="Delete"]' : function (e) {
      Poms.remove(this._id);
    }
  });

  // Event handler listening for #new-pomodoro form is submitted
  Template.pomodoroInput.events({
    'submit #new-pomodoro' : function(e) {
      // Prevent the default form submit behavior
      e.preventDefault();

      var pomodoro = {
        startDate: new Date(),
        goal: e.target.goal.value
      };

      Poms.insert(pomodoro);

      e.target.goal.value = '';
    },
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
