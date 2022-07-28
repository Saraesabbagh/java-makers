const Thermostat = require('./thermostat');

describe('thermostat', () => {
  const thermostat = new Thermostat();

  describe('getTemperature',  () => {
    it('gets the temperature of the thermostat', () => {
      const thermostat =  new Thermostat();
      expect(thermostat.getTemperature()).toEqual(20);
    })
  })

  describe('up',  () => {
    it('raises the temperature of the thermostat by 1 degree', () => {
      const thermostat = new Thermostat();
      thermostat.up();
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(22);
    })
  })
  describe('down', () => {
    it('lowers the temperature by one degree', () => {
      const thermostat = new Thermostat();
      thermostat.down();
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(18);
    })
    it('does not allow the temperature to go below 10', () =>{
      const thermostat = new Thermostat();
      for (let i=0 ; i <20 ; i++) {
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toEqual(10)
    })
  })
  describe('power saving mode', () =>{
    it('is on by defualt and set top temperature of 25', () => {
      const thermostat = new Thermostat();
      for (let i = 0 ; i < 20 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(25)
    })
    it('is off and so maximum temp is 32', () => {
      const thermostat = new Thermostat();
      thermostat.setPowerSavingMode(false);
      for (let i=0 ; i < 20 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32)
    })
  })
  describe('reset mode', () => {
    it('resets the temperature to 20', () => {
      const thermostat = new Thermostat();
      for (let i = 0; i < 7; i++) {
        thermostat.up();
      }
      thermostat.rest();
      expect(thermostat.getTemperature()).toEqual(20)
    })
  })
  describe('energy usage', () => {
    it('checks the usage of thermostat is medium', () => {
      const thermostat = new Thermostat();
      expect(thermostat.getEnergyUsage()).toBe('Medium usage')
    })
    it('checks the energy usage of the thermostat is low', () => {
      const thermostat = new Thermostat();
      for (let i = 0 ; i < 10 ; i++){
        thermostat.down();
      }
      expect(thermostat.getEnergyUsage()).toBe('Low usage')
    })
    it('checks the energy of the thermostat is high', () => {
      const thermostat = new Thermostat();
      thermostat.setPowerSavingMode(false);
      for (let i = 0 ; i < 20 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getEnergyUsage()).toBe('High usage')
    })
  })
})