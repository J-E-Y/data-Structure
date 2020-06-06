const Queue = function () {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    // let keyNum = someInstance.size() === 0 ? 0 : someInstance.size();
    let max = 0;
    if (someInstance.size() > max) {
      // Object.keys 대신
      for (let key in storage) {
        if (max < Number(key)) {
          max = Number(key);
        }
      }
      max = max + 1;
    }
    storage[max] = value;

    return value;
  };

  someInstance.dequeue = function () {
    // storage { 0 : john, 1 : tim, 2 : esther }
    var deqValue;
    var min = null;
    for (let key in storage) {
      if (min === null) {
        min = Number(key);
      }
      if (min > Number(key)) {
        min = Number(key);
      }
    }
    deqValue = storage[min];
    delete storage[min];

    return deqValue;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};
