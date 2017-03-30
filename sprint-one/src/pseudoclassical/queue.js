var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.lastestKey = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.lastestKey] = value;
  this.lastestKey++;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  if (this.counter > 0) {
    var removed = this.storage[this.lastestKey - this.counter];
    this.counter--;
    return removed;
  }
};

Queue.prototype.size = function() {
  return this.counter;
};




// queue.enqueue('a'); //> {0: 'a'}                 counter = 1         latestKey = 1   //0 <-Key
// queue.enqueue('b'); //> {0: 'a', 1: 'b'}         counter = 2         latestKey = 2   //0 <-Key
// queue.dequeue();    //> {1: 'b'}                 counter = 1         latestKey = 2
// queue.enqueue('c'); //> {1: 'b', 2: 'c'}         counter = 2         latestKey = 3
// queue.enqueue('d'); //> {1: 'b', 2: 'c', 3: 'd'} counter = 3         latestKey = 4
// queue.dequeue();    //> {2: 'c', 3: 'd'}         counter = 2         latestKey = 4
