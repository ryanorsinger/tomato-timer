// Event handler listening for #new-pomodoro form is submitted
Template.pomodoroInput.events({
  'submit #new-pomodoro' : function(e) {
    // Prevent the default form submit behavior
    e.preventDefault();

    var newPomodoro = {
      startDate: new Date(),
      goal: e.target.goal.value,
      owner: Meteor.userId(),
    };

    // Insert the new object into the Poms collection.
    Poms.insert(newPomodoro);

    // Reset the input field
    e.target.goal.value = '';
  },
});

