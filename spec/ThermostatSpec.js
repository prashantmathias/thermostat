'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

    it('starts at 20', function() {
      expect(thermostat.temperature).toEqual(20)
    });

  it('has a starting temperature of 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases temperature with the up button', function() {
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases temperature with the down button', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
 });
