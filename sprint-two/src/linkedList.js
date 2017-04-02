var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null && list.tail === null) {
      list.tail = node;
      list.head = node;
    } else {
      list.head.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var currentHeadValue = list.head.value;
    list.head = list.head.next;
    return currentHeadValue;
  };

  list.contains = function(target) {
    //console.log(list.head);
    var flag = false;
    var firstNode = list.head;

    var check = function(node) {

      if (node.value === target) {
        flag = true;
      }

      //base case
      if (node.next === null) {
        return flag;
      }

      check(node.next);
    };
    check(firstNode);
    return flag;
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(1); but O(n) with not reference.
 */
