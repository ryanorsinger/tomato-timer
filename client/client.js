Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

// client: start a pomodoros subscription
Meteor.subscribe("pomodoros");
