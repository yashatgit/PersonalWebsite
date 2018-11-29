(function($) {

  var getDayGreeting = function() {
    var dateHour = new Date()
      .getHours();

    if (dateHour === '12') {
      return 'Noon!';
    } else if (dateHour < '12') {
      return 'Morning!';
    } else {
      return 'Evening!';
    }
  }

  $('.greeting')
    .html('Good ' + getDayGreeting())

})(jQuery);
