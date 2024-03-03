function Stopwatch() {
  let duration = 0;
  let startTime = 0;
  let stopTime = 0;
  let running = false;

  Object.defineProperties(this, {
    duration: {
      get: function () {
        return duration;
      },
      set: function (v) {
        duration = v;
      },
    },
    startTime: {
      get: function () {
        return startTime;
      },
      set: function (v) {
        startTime = v;
      },
    },
    stopTime: {
      get: function () {
        return stopTime;
      },
      set: function (v) {
        stopTime = v;
      },
    },
    running: {
      get: function () {
        return running;
      },
      set: function (v) {
        running = v;
      },
    },
  });
}

Stopwatch.prototype.reset = function () {
  this.duration = 0;
  this.startTime = 0;
  this.stopTime = 0;
  this.running = false;
};

Stopwatch.prototype.start = function () {
  if (this.running) {
    throw new Error("Stopwatch has already started");
  }
  this.running = true;
  this.startTime = Date.now(); // mmSeconds
};

Stopwatch.prototype.stop = function () {
  if (!this.running) {
    throw new Error("Stopwatch is not started");
  }
  this.running = false;
  this.stopTime = Date.now();

  const seconds = (this.stopTime - this.startTime) / 1000;
  this.duration += seconds;
};
