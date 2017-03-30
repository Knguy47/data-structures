var Queue = function() {
  var someInstance = {};

  var counter = 0;
  var currentIndex = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter + currentIndex] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      var dequeued = storage[currentIndex];
      currentIndex++;
      counter--;
      return dequeued;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};


/*
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    if(key !== 0){
     var removed = storage[0];
     delete storage[0];

     for(var i = 0; i < Object.keys(storage).length; i++){
       storage[i] = storage[i + 1];
     }
     key--;
     return removed;
    }
  };

  someInstance.size = function() {
     return key;
  };

  return someInstance;
};*/

/*
var queue = Queue();

queue.enqueue('a'); //{0: 'a'}
queue.enqueue('b'); //{0: 'a', 1: 'b'}
queue.dequeue();    //{1: 'b'} ===> {0: 'b'}  /// counter is now 1 //
queue.enqueue('c'); //{0: 'b', 1: 'c'}
var anwser = queue.dequeue() === 'b'; //{0: 'c'}
*/