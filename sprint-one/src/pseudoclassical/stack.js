var Stack = function() {
  this.counter = 0;
  this.storage = {};
};

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    var removed = this.storage[this.counter - 1];
    this.counter--;
    return removed;
  }
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Stack.prototype.size = function() {
  return this.counter;
};