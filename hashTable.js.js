const HashTable = function () {
  //   this._limit = 8;
  //   this._storage = LimitedArray(this._limit);
  // };

  // HashTable.prototype.insert = function(k, v) {
  //   const index = getIndexBelowMaxForKey(k, this._limit);
  //   this._storage.set(index, v);
  // };

  // HashTable.prototype.retrieve = function(k) {
  //   const index = getIndexBelowMaxForKey(k, this._limit);
  //   return this._storage.get(index);

  // };

  // HashTable.prototype.remove = function(k) {
  //   const index = getIndexBelowMaxForKey(k, this._limit);
  //   this._storage[index] = undefined;
  // };

  //To prevent excessive collisions, make your hashTable double in size as soon as 75 percent of the spaces have been filled
  //To save space, make sure the hashTable halves in size when space usage falls below 25 percent

  class HashTable {
    constructor() {
      this._limit = 8;
      this._storage = LimitedArray(this._limit);
      this._numOfData = 0;
    }

    insert(k, v) {
      const index = getIndexBelowMaxForKey(k, this._limit);
      const data = {};
      data[k] = v;
      let bucket = this._storage.get(index);
      if (!bucket) {
        bucket = [];
      }

      let hasKey = false;
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][k]) {
          bucket[i][k] = v;
          hasKey = true;
          break;
        }
      }
      if (!hasKey) {
        bucket.push(data);
        this._numOfData++;
      }

      this._storage.set(index, bucket);

      /* Advanced1 */
      if (this._numOfData >= this._limit * 0.75) {
        // console.log('in insert', this._numOfData, this._limit)
        this.changeSize((val) => val * 2);
      }
    }

    retrieve(k) {
      const index = getIndexBelowMaxForKey(k, this._limit);
      // console.log('in retrieve', this._storage.get(index), this._numOfData);
      const bucket = this._storage.get(index);
      if (!bucket) {
        return undefined;
      }

      const data = bucket.find((ele) => {
        if (ele[k]) {
          return true;
        }
        return false;
      });

      if (data) {
        return data[k];
      }
      return undefined;
    }

    remove(k) {
      const index = getIndexBelowMaxForKey(k, this._limit);
      const bucket = this._storage.get(index);
      bucket.forEach((val) => {
        if (val[k]) {
          val[k] = undefined;
          this._numOfData--;
        }
      });

      this._storage.set(index, bucket);
      // console.log('in remove', bucket, this._numOfData)

      /* Advanced2 */
      if (this._numOfData < this._limit * 0.25) {
        // console.log('in remove', this._numOfData, this._limit)
        this.changeSize((val) => val / 2);
      }
    }

    changeSize(callback) {
      const dataArr = [];
      for (let i = 0; i < this._limit; i++) {
        const tmpBucket = this._storage.get(i);
        if (tmpBucket) {
          dataArr.push(
            ...tmpBucket.filter((val) => {
              const key = Object.keys(val)[0];
              if (val[key]) {
                return true;
              }
              return false;
            }),
          );
        }
      }
      this._limit = callback(this._limit);
      this._numOfData = 0;

      // console.log(this._limit)
      this._storage = LimitedArray(this._limit);
      for (let i = 0; i < dataArr.length; i++) {
        const key = Object.keys(dataArr[i])[0];
        this.insert(key, dataArr[i][key]);
      }
    }
  }
};
