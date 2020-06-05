const Stack = function () {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  let count = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    storage[count] = value;
    count++;

    return value;
  };

  someInstance.pop = function () {
    const popValue = storage[count - 1];
    delete storage[count - 1];
    count--;
    if (count < 0) count = 0;

    return popValue;
  };

  someInstance.size = function () {
    return count;
  };

  return someInstance;
};
