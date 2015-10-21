if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });

  Template.pomodorosList.helpers({
    allPomodoros: function () {
      // find().fetch() gets back the collection of objects
      // return Poms.find().fetch();
      // Poms.find({}, {sort: {startDate: -1}});

      let userId = Meteor.userId();

      return Poms.find({ owner: userId }, {sort: {startDate: -1}});
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
        goal: e.target.goal.value,
        owner: Meteor.userId(),
      };

      // Insert the new object into the Poms collection.
      Poms.insert(pomodoro);

      // Reset the input field
      e.target.goal.value = '';
    },
  });
}
