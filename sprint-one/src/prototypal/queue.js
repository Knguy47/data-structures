var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.counter = 0;
  queue.storage = {};
  queue.currentIndex = 0;
  return queue;
};

var queueMethods = {};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter + this.currentIndex] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    var removed = this.storage[this.currentIndex];
    this.counter--;
    this.currentIndex++;
    return removed;
  }
};

queueMethods.size = function() {
  return this.counter;
};
