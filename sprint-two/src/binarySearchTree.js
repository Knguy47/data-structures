var BinarySearchTree = function(value) {
  var newTree = Object.create(treeMeth);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

var treeMeth = {};

treeMeth.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if ( value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

treeMeth.contains = function(value) {
  var result = false;

  if (this.value === value) {
    return true;
  } else if ( value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      result = this.right.contains(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      result = this.left.contains(value);
    }
  }
  return result;
};


treeMeth.depthFirstLog = function(cb) {
  //console.log(cb)
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  } else if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions? O(log(n))
 */

// start a binary tree - top - mom - newTree. value = value, we can set left and right to null

// when we insert - parameter value - we also to check that the given value is greater or less than the tree value