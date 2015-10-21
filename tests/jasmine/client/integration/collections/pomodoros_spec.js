describe('Collections', function () {
  describe('Pomodoros', function () {
    afterEach( function (done) {
      _.each(Pomodoros.find().fetch(), function (pomo) {
        Pomodoros.remove(pomo._id);
      });
      done();
    });

    it('creates a pomodoro', function (done) {
      var id = Pomodoros.insert({userId: '1', goal: "a goal"});

      var pomodoros = Pomodoros.find().fetch();
      expect(pomodoros.length).toBe(1);
      done();
    });

    it('endDate is 25 minutes after startDate', function (done) {
      var id = Pomodoros.insert({userId: '1', goal: "a goal", startDate: new Date()});

      var pomodoros = Pomodoros.find().fetch();
      var pom = pomodoros[0];
      
      var endDateMoment = moment(pom.startDate).add(moment.duration(POMODORO_LENGTH, 'minutes'));

      expect(pom.endDate()).toEqual(endDateMoment.toDate());
      expect(pomodoros.length).toBe(1);
      done();
    });

    it('knows when it is done', function () {
      var startMoment = moment().subtract(moment.duration(POMODORO_LENGTH + 1, 'minutes'));
      var id = Pomodoros.insert({userId: '1', goal: "a goal", startDate: startMoment.toDate()});

      var pomodoros = Pomodoros.find().fetch();
      var pom = pomodoros[0];

      expect(pom.done()).toBe(true);
      expect(pomodoros.length).toBe(1);
    });
  });
});
