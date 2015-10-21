// Publish the entire pomodoro collection
Meteor.publish("pomodoros", function (){
  return Poms.find({});
});
