describe('Templates', function () {
  describe('pomodorosList', function () {

    describe('when empty', function () {
      it("shows the empty message", function() {
        this.container = document.createElement("DIV");
        this.view = Blaze.renderWithData(Template.pomodorosList, {}, this.container);
        var $view = $(this.container).find(".pomodoro-list");

        expect($view).toHaveText("No completed Pomodoros yet");
      });
    });

    describe('when a pomodoro exists', function () {
      it("shows the pomodoro", function() {
        spyOn(Template.pomodorosList.__helpers, " allPomodoros").and.callFake(function () {
          return [{startDate: new Date(), goal: "new goal"}];
        });

        this.container = document.createElement("DIV");
        this.view = Blaze.renderWithData(Template.pomodorosList, {}, this.container);
        var $view = $(this.container).find(".pomodoro-list");

        expect($view).toContainText("new goal");
      });

      it("has a delete button", function() {
        spyOn(Meteor, "user").and.returnValue({});

        spyOn(Template.pomodorosList.__helpers, " allPomodoros").and.callFake(function () {
          return [{startDate: new Date(), goal: "new goal"}];
        });

        this.container = document.createElement("DIV");
        this.view = Blaze.renderWithData(Template.pomodorosList, {}, this.container);
        var $view = $(this.container).find(".pomodoro-list");

        expect($view).toContainElement('input.delete');
      });
    });

  });
});
