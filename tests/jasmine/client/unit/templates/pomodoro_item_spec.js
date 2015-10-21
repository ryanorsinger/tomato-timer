describe('Templates', function () {
  describe('pomodorosItem', function () {
    it("shows the pomodoro", function() {
      this.container = document.createElement("DIV");
      this.view = Blaze.renderWithData(
        Template.pomodoroItem,
        {startDate: new Date(), goal: "another goal"},
        this.container
      );
      var $view = $(this.container);
      expect($view).toContainText("another goal");
    });

    it("has a delete button", function() {
      spyOn(Meteor, "user").and.returnValue({});
      this.container = document.createElement("DIV");
      this.view = Blaze.renderWithData(
        Template.pomodoroItem,
        {startDate: new Date(), goal: "another goal"},
        this.container
      );
      var $view = $(this.container);
      expect($view).toContainElement('input.delete');
    });
  });
});
