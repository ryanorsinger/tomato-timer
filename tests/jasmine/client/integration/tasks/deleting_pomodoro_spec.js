describe('Tasks', function () {
  describe('deleting a pomodoro', function () {
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
