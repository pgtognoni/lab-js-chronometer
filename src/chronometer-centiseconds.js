class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;  
    }, 10);

    if(printTimeCallback) setInterval(printTimeCallback, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor((this.currentTime/100) / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime/100) % 60);
  }

  getCentiseconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return `0${value}`
    } else return `${value}`
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiSeconds}`
  }
}
