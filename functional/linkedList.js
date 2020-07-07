class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      var temp = new Node(value);
      this.tail.next = temp;
      this.tail = temp;
    }
  }
  removeHead() {
    if (this.head === null) {
      return null;
    } else {
      var result = this.head.value;
      var temp = this.head.next;
      this.head = temp;
      return result;
    }
  }
  contains(target) {
    if (this.head.value === target || this.tail.value === target) {
      return true;
    }
    var pointer = this.head.next;
    var answer = false;
    while (pointer) {
      if (pointer.value === target) {
        answer = true;
        break;
      } else if (pointer.value === null) {
        answer = false;
        break;
      }
      pointer = pointer.next;
    }
    return answer;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
