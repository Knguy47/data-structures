var Tree = function(value) {
  var newTree = {};

  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
  // console.log(this.children);
};

treeMethods.contains = function(target) {
  var isThere = false;

  var check = function(tree) {
    if (tree.value === target) {
      isThere = true;
      return isThere;
    } else {
      for (var i = 0; i < tree.children.length; i++) {
        check(tree.children[i]);
      }
    }
    //if (this.children.length !== 0) {
    //console.log(this.children.length);
    return isThere;
  };
  return check(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(n)= linear;
 */
