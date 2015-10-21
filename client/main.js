Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

formattedRemaining = function (pomodoro) {
  if (pomodoro.done()) {
    return "0:00";
  }
  var remainingAsSeconds = Math.floor(pomodoro.remaining() / 1000);
  var minutes = Math.floor(remainingAsSeconds / 60).toString();
  var seconds = remainingAsSeconds % 60;
  var leadingZero = seconds < 10 ? '0' : '';
  return minutes.toString() + ":" + leadingZero + seconds;
};
