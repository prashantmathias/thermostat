$(document).ready(function() {
  var thermostat = new Thermostat();

  $.getJSON("http://localhost:4567", function(data) {
    $('#temperature').text(data.temp);
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=07aa6b07981215d47a8f48a9b46c37cc&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
    // $.post("http://localhost:4567/temp", {
    //   temp: thermostat.temperature
    // })
  };

  updateTemperature();

  $('#increase-temperature').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#decrease-temperature').click(function () {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function () {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function () {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

});
