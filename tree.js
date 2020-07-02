class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    this.children.push(new Tree(value));
  }
  contains(target) {
    var result = false;
    for (var i = 0; i < this.children.length; i++) {
      var nextTree = this.children[i];
      if (nextTree.value === target) {
        result = true;
        break;
      } else {
        if (nextTree.children.length !== 0) {
          result = nextTree.contains(target);
          if (result) {
            break;
          }
        }
      }
    }

    return result;
  }
}
