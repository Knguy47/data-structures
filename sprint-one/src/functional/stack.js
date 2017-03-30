var Stack = function() {
  var someInstance = {};
  var counter = 0;
  //
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    if(counter > 0){
      var popped = storage[counter - 1]; //storage[1]
      counter--;
      return popped;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};


// var stack2 = Stack();
// console.log(stack2);

// stack.push('a'); //{0: 'a'}   //counter = 1
// stack.pop(); //storage[1]
// stack.pop();
// stack.size() === 0 //
