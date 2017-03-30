var Queue = function() {
  var queue = {};
  queue.storage = {};
  queue.counter = 0;
  queue.currentIndex = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter + this.currentIndex] = value;
  this.counter++;
}
queueMethods.dequeue = function() {
  if (this.counter > 0) {
    var removed = this.storage[this.currentIndex];
    this.counter--;
    this.currentIndex++;
    return removed;
  }

}

  queueMethods.size = function() {
    return this.counter;
  }

// counter 2
//
// index
// currentIndex 1

/*
-Use the keyword this in your methods

-Use _.extend to copy the methods onto the instance
Don't:
*/