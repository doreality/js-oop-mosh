function Stopwatch() {
  let duration = 0;
  let startTime = 0;
  let stopTime = 0;
  let isStart = false;

  this.reset = function () {
    duration = 0;
    startTime = 0;
    stopTime = 0;
    isStart = false;
  };

  this.start = function () {
    if (isStart) {
      throw new Error("Stopwatch has already started");
    }
    isStart = true;
    startTime = Date.now(); // mmSeconds
  };

  this.stop = function () {
    if (!isStart) {
      throw new Error("Stopwatch is not started");
    }
    isStart = false;
    stopTime = Date.now();

    const seconds = (stopTime - startTime) / 1000;
    duration += seconds;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
