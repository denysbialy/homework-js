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
    let thisLength = this.length - 1;
    for (let i = 0; i < Math.round(thisLength / 2); i++) {
      let temp = this[i];
      this[i] = this[thisLength - i];
      this[thisLength - i] = temp;
    }
    return this;
  }

  concat(...value) {
    // let newArray = this;
    let temp = 0;
    for (let i = 0; i < value.length; i++) {
      debugger;

      temp = temp + value[i].length;
      
      for (let j = this.length; j < this.length + temp; j++) {
        
        this[j] = value[i][j - this.length];
      }
    }
    // this.length + value.length;
    return this;
  }
}
let q1 = [1, 2, 3, 4];
let q2 = [5, 6, 7, 8];
const newMyArr = new MyArray();

for (let i = 0; i < 10; i++) {
  newMyArr.push(i);
}
