FlowRouter.route('/', {
  name: "home",
  action: function() {
    BlazeLayout.render("layout", {content: "pomodorosList"});
  }
});

FlowRouter.route('/new', {
    name: "new",
    action: function() {
        BlazeLayout.render("layout", {content: "pomodoroInput"})
    }
})

FlowRouter.route('/about', {
  name: "about",
  action: function() {
    BlazeLayout.render("layout", {content: "about"});
  }
});
