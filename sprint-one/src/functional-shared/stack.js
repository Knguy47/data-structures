var Stack = function() {
  var stack = {};
  stack.storage = {};
  stack.counter = 0;
  _.extend(stack, stackMethods);
  console.log(stack);
  return stack;
};

var stackMethods = {};

stackMethods.pop = function(){
  if (this.counter > 0) {
    var removed = this.storage[this.counter - 1];
    this.counter--;
    return removed;
  }
}

stackMethods.push = function(value){
 //console.log(this.result);
 this.storage[this.counter] = value;
 this.counter++;

}

stackMethods.size = function(){
  return this.counter;
}


// result[0] = value;

// stack.push('a'){
//   results[stack.counter] = value;
// };
/*
-Use the keyword this in your methods

-Use _.extend to copy the methods onto the instance
Don't:
*/


// var stack1= Stack();  //<--------------

// stack1 = {
//   storage: {},
//   counter: 0,
//   pop: func(),
//   push: function(value){
//  //console.log(this.result);
//  this.storage[this.counter] = value;
//  this.counter++;

// }

// stack1.push('a');