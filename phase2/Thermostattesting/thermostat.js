class Thermostat {
  constructor() {
    this.temperature = 20;
    this.mode = true;
  }
  getTemperature() {
    return this.temperature;
  }
  up() {
    if (this.mode === true && this.temperature >= 25) {
      this.temperature = 25;
    } else if (this.temperature >= 32) {
      this.temperature = 32;
    } else {
      this.temperature += 1;
    }
  }

  down() {
    if (this.temperature <= 10) {
      this.temperature = 10;
    } else {
      this.temperature -= 1;
    }
  }

  setPowerSavingMode(bool) {
    this.mode = bool
  }

  rest(){
    this.temperature = 20
  }
  getEnergyUsage() {
    if (this.temperature < 18){
      return 'Low usage';
    } else if (this.temperature <= 25){
      return 'Medium usage';
    }else if (this.temperature) {
      return 'High usage' ;
    }
  }
}



module.exports = Thermostat;
