describe('Collections', function () {
  describe('Pomodoros', function () {
    afterEach( function (done) {
      _.each(Pomodoros.find().fetch(), function (pomo) {
        Pomodoros.remove(pomo._id);
      });
      done();
    });

    it('should be created', function () {
      var id = Pomodoros.insert({goal: "a goal"});

      var pomodoros = Pomodoros.find().fetch();
      expect(pomodoros.length).toBe(1);
    });
  });
});
