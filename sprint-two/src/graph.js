
 //<vertice
// Instantiate a new graph
var Graph = function() {
  this.vertices = [];       // [[1],[2],[3]]
  this.edges = {};    // [1,2]
};


// Add a node to the graph, passing in the node's value
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var isThere = false;
  this.forEachNode(function(vertex, i) {
    if (vertex === node) {
      isThere = true;
      return true;
    }
  });

  return isThere;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var vertices = this.vertices;

  this.forEachNode(function(vertex, index) {
    if (vertex === node) {
      vertices.splice(index, 1);
    }
  });

  delete this.edges[node];

  for (var key in this.edges) {
    if (this.edges[key].includes(node) === true) {
      var index = this.edges[key].indexOf(node);
      this.edges[key].splice(index, 1);
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var isThere = false;
  if (this.edges[fromNode]) {
    isThere = this.edges[fromNode].includes(toNode);
  }
  return isThere;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexFromNode = this.edges[fromNode].indexOf(toNode);
  var indexToNode = this.edges[toNode].indexOf(fromNode);
  this.edges[fromNode].splice(indexFromNode, 1);
  this.edges[toNode].splice(indexToNode, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.vertices.length; i++) {
    cb(this.vertices[i], i);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
O(n);
 */
