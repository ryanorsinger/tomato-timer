describe('formattedRemaining', function () {
  it('returns 0:00 when done', function () {
    var pom = {
      startDate:  new Date(),
      goal:       "a goal",
      done:       function () { return true; },
    };

    var result = formattedRemaining(pom);
    expect(result).toBe("0:00");
  });

  it('returns the correct remaining time', function () {
    var pom = {
      startDate:  new Date(),
      goal:       "a goal",
      done:       function () { return false; },
      remaining:  function () { return 100000; },
    };

    var result = formattedRemaining(pom);
    expect(result).toBe("1:40");
  });
});
