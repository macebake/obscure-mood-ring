(function(app) {

  function updateMood(location){
    if (location === "London"){
      $("body").toggleClass("bg-change-london");
    } else if (location === "San Francisco"){
      $("body").toggleClass("bg-change-sf");
    } else if (location === "Dublin"){
      $("body").toggleClass("bg-change-dublin");
    }
  }

  app.MoodringFormComponent = ng.core
    .Component({
      selector: 'moodring-form',
      templateUrl: 'app/moodring-form.component.html'
    })
    .Class({
      constructor: function() {
        this.location = ['London', 'San Francisco', 'Dublin'];

        this.model = new app.Moodring('Macey');

        this.submitted = false;
      },
      onSubmit: function() {
        var location = $('#location option:selected').text();
        this.submitted = true;
        updateMood(location);
      }
    });

})(window.app || (window.app = {}));
