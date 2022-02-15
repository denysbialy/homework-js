class MyArray {
  constructor() {
    this.length = 0;
  }
  push(...value) {
    for (let i = 0; i < value.length; i++) {
      this[this.length++] = value[i];
    }
    return this.length;
  }

  pop() {
    if (this.length !== 0) {
      this.length--;
    }
    let deleteValue = this[this.length];
    delete this[this.length];
    return deleteValue;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  map(callback) {
    let newMap = this;
    for (let i = 0; i < this.length; i++) {
      newMap[i] = callback(this[i], i, this);
    }
    return newMap;
  }

  unshift(...value) {
    for (let i = this.length + value.length - 1; i >= 0; i--) {
      this[i] = this[i - value.length];
      if (i < value.length) {
        this[i] = value[i];
        this.length++;
      }
    }
    return this.length;
  }

  shift() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    return this.length--;
  }

  reverse() {
    let temp = {};
    let temp2 = {};

    for (let i = 0; i < this.length; i++) {
      temp[i] = this[i];
      
    }
    for (let j = this.length-1, k=0; j >= 0; j--, k++) {
      temp[j] = this[k];
    }
    return this;
  }

  // reverse() {
  //   for (let i = 0; i < this.length; i++) {
  //     let temp = this[i];

  //     this[i] = this[this.length-1];
  //     this[this.length - 1] = temp;
  //   }
  //   return this;
  // }

  concat(...value) {
    let newArray = this;

    for (let i = 0; i < this.length + value[[0].length]; i++) {
      if (i < this.length) {
        newArray[i] = this[i];
      } else {
        newArray[i] = value[i - this.length];
      }
    }
    this.length + value.length;
    return newArray;
  }
}
const newMyArr = new MyArray();

for (let i = 0; i < 11; i++) {
  newMyArr.push(i);
}
