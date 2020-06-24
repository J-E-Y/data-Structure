const BinarySearchTree = function (value) {
  //빈 객체 생성
  let binary = {};
  binary.value = value;
  binary.left = null;
  binary.right = null;

  //methods
  binary.insert = function (value) {
    //함수 설명: value를 받아서 nst 노드를 만든 후 value 크기에 따라 좌/우에 배치
    if (!this.value) {
      this.value = value;
    }

    let bst = new BinarySearchTree(value);
    if (this.value >= bst.value) {
      //왼쪽
      if (this.left === null) {
        //value 넣어주기
        this.left = bst;
      } else {
        //다시 비교
        this.left.insert(value);
      }
    }
    if (this.value < bst.value) {
      //오른쪽
      if (this.right === null) {
        //value 넣어주기
        this.right = bst;
      } else {
        //다시 비교
        this.right.insert(value);
      }
    }
  };

  function register(binaryTree, currentTree) {
    if (binaryTree.value < currentTree.value) {
      if (currentTree.left !== null) {
        register(binaryTree, currentTree.left);
      } else {
        currentTree.left = binaryTree;
      }
    } else {
      if (currentTree.right !== null) {
        register(binaryTree, currentTree.right);
      } else {
        currentTree.right = binaryTree;
      }
    }
  }

  binary.contains = function (target) {
    if (binary.value === target) return true;
    if (binary.value > target) {
      //그럼 왼쪽 비교
      return !!binary.left && binary.left.contains(target);
    }
    if (binary.value < target) {
      //그럼 오른쪽 비교
      return !!binary.right && binary.right.contains(target);
    }
  };

  binary.depthFirstLog = function (func) {
    //함수 설명: bst를 돌면서 모든 value를 func 처리한 값으로 변경
    if (binary.value) binary.value = func(binary.value);
    if (binary.left) {
      binary.left.depthFirstLog(func);
    }
    if (binary.right) {
      binary.right.depthFirstLog(func);
    }
  };
  return binary;
};
