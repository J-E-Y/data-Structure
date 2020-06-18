const Queue = function () {
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  const keys = Object.keys(this.storage);
  const topNum = keys.length === 0 ? 0 : Math.max(...keys);

  this.storage[topNum + 1] = value;

  return value;
};

Queue.prototype.dequeue = function () {
  const keys = Object.keys(this.storage);
  const firstNum = keys.length === 0 ? 0 : Math.min(...keys);

  const dequeueValue = this.storage[firstNum];
  delete this.storage[firstNum];

  return dequeueValue;
};

Queue.prototype.size = function () {
  const queueSize = Object.keys(this.storage).length;
  return queueSize;
};
