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
    let newMap = new MyArray();
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
    // debugger
    let newArr = new MyArray();
    for (let i = this.length - 1, y = 0; i >= 0; i--, y++) {
      newArr[y] = this[i];
    }
    for (let i = 0; i < newArr.length; i++) {
      this[i] = newArr[i];
    }
    return newArr;
  }

  concat(value) {
    let newArray = [];
    for (let i = 0; i < this.length + value.length; i++) {
      if (i < this.length) {
        newArray[i] = this[i];
      } else {
        newArray[i] = value[i - this.length];
      }
    }
    return newArray;
  }
}
const newMyArr = new MyArray();

for (let i = 0; i < 10; i++) {
  newMyArr.push(i);
}
