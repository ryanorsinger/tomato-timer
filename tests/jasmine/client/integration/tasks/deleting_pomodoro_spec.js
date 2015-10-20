describe('Tasks', function () {
  describe('deleting a pomodoro', function () {
    beforeEach(function (done) {
      var userData = {
        email: "davey@example.com",
        password: "password",
        profile: {name: "davey"}
      };

      Accounts.createUser(userData, function () {
        Meteor.loginWithPassword("davey@example.com", "password", function () {
          Tracker.flush();
          done();
        });
      });
    });

    beforeEach(function (done) {
      $("input:text").val("A brand new task");
      $("input:submit").click();

      Tracker.flush();
      done();
    });

    afterEach(function (done) {
      _.each(Pomodoros.find().fetch(), function(pomodoro) {
        Pomodoros.remove(pomodoro._id);
      });
      done();
    });

    afterEach(function (done) {
      Meteor.logout( function () {
        done();
      });
    });

    it('deletes it from the current section', function (done) {
      var pomodoroList = $(".pomodoro-list").text();
      expect( pomodoroList ).toContain("A brand new task");

      $(".pomodoro-list").find('input.delete').click();
      Tracker.flush();

      var updatedList = $(".pomodoro-list").text();
      expect( updatedList ).not.toContain("A brand new task");
      done();
    });
  });
});
