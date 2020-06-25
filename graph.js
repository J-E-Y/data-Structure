class Graph {
  constructor() {
    this.node = {};
    this.edge = {};
  }

  // Add a node to the graph, passing in the node's value.
  addNode(node) {
    this.node[node] = node;
  }

  // Return a boolean value indicating if the value passed to contains is represented in the graph.
  contains(node) {
    for (var key in this.node) {
      if (this.node[key] === node) {
        return true;
      }
    }

    return false;
  }

  // Removes a node from the graph.
  removeNode(node) {
    for (var key in this.edge) {
      if (this.edge[key].includes(node)) {
        this.edge[key] = undefined;
      }
    }

    this.node[node] = undefined;
  }

  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
  hasEdge(fromNode, toNode) {
    var target = {
      1: `${fromNode},${toNode}`,
      2: `${toNode},${fromNode}`,
    };
    if (this.edge[target[1]] || this.edge[target[2]]) {
      return true;
    }
    return false;
  }

  // Connects two nodes in a graph by adding an edge between them.
  addEdge(fromNode, toNode) {
    if (
      !this.node.hasOwnProperty(fromNode) &&
      !this.node.hasOwnProperty(toNode)
    ) {
      return false;
    }

    var target = {
      1: `${fromNode},${toNode}`,
      2: `${toNode},${fromNode}`,
    };
    if (
      !this.edge.hasOwnProperty(target[1]) &&
      !this.edge.hasOwnProperty(target[2])
    ) {
      this.edge[`${fromNode},${toNode}`] = [fromNode, toNode];
    }
  }

  // Remove an edge between any two specified (by value) nodes.
  removeEdge(fromNode, toNode) {
    var target = {
      1: `${fromNode},${toNode}`,
      2: `${toNode},${fromNode}`,
    };
    if (this.edge.hasOwnProperty(target[1])) {
      this.edge[target[1]] = undefined;
    } else if (this.edge.hasOwnProperty(target[2])) {
      this.edge[target[2]] = undefined;
    }
    return false;
  }

  // Pass in a callback which will be executed on each node of the graph.
  forEachNode(cb) {
    for (var key in this.node) {
      cb(key);
    }
  }
}
