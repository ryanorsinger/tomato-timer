describe('Templates', function () {
  describe('pomodorosList', function () {

    beforeEach(function() {
      this.container = document.createElement("DIV");
      this.view = Blaze.renderWithData(Template.pomodorosList, {}, this.container);
    });

    it("should show", function() {
      var $view;
      $view = $(this.container).find(".pomodoro-list");
      expect($view).toHaveText("No completed Pomodoros yet");
    });
  });
});
