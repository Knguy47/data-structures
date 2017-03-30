var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.counter = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {};

stackMethods.pop = function() {
  if (this.counter > 0) {
    var removed = this.storage[this.counter - 1];
    this.counter--;
    return removed;
  }
};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.size = function() {
  return this.counter;
};