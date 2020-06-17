const stackMethods = {
  push(value) {
    const keys = Object.keys(this.storage);
    const topNum = keys.length === 0 ? 0 : Math.max(...keys);

    this.storage[topNum + 1] = value;

    return value;
  },

  pop() {
    const keys = Object.keys(this.storage);
    const topNum = keys.length === 0 ? 0 : Math.max(...keys);

    const popValue = this.storage[topNum];
    delete this.storage[topNum];

    return popValue;
  },

  size() {
    const stackSize = Object.keys(this.storage).length;
    return stackSize;
  },
};

const Stack = function () {
  const stackObj = Object.create(stackMethods);
  stackObj.storage = {};

  return stackObj;
};
