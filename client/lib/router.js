FlowRouter.route('/', {
  name: "home",
  action: function() {
    BlazeLayout.render("layout", {content: "pomodorosList"});
  }
});

FlowRouter.route('/about', {
  name: "about",
  action: function() {
    BlazeLayout.render("layout", {content: "about"});
  }
});
