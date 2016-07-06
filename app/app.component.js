(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<moodring-form></moodring-form>',
      directives: [app.MoodringFormComponent]
    })
    .Class({
      constructor: function(){}
    });
})(window.app || (window.app = {}));
