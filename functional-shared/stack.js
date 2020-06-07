const stackMethods = {};

stackMethods.push = function (value) {
  const keys = Object.keys(this.stackValue);
  const topNum = keys.length === 0 ? 0 : Math.max(...keys);

  this.stackValue[topNum + 1] = value;

  return value;
};

stackMethods.pop = function () {
  const keys = Object.keys(this.stackValue);
  const topNum = keys.length === 0 ? 0 : Math.max(...keys);

  const popValue = this.stackValue[topNum];
  delete this.stackValue[topNum];

  return popValue;
};

stackMethods.size = function () {
  const stackSize = Object.keys(this.stackValue).length;
  return stackSize;
};

const Stack = function () {
  const storage = {};
  storage.stackValue = {}; // 실제 스택 값 저장소

  for (let key in stackMethods) {
    storage[key] = stackMethods[key];
  }
  return storage;
};
