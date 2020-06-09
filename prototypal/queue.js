const Queue = function () {
  const qobj = Object.create(queueMethods);
  qobj.storage = {};
  return qobj;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  const keys = Object.keys(this.storage);
  const topNum = keys.length === 0 ? 0 : Math.max(...keys);
  this.storage[topNum + 1] = value;
  return value;
};

queueMethods.dequeue = function () {
  const keys = Object.keys(this.storage);
  const firstNum = keys.length === 0 ? 0 : Math.min(...keys);
  const dequeueValue = this.storage[firstNum];
  delete this.storage[firstNum];
  return dequeueValue;
};
queueMethods.size = function () {
  return Object.keys(this.storage).length;
};
