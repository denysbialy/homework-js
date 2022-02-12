function MyArray(arr) {
  this.length = 0;

  this.push = function (value) {
    this[this.length] = value;

    this.length++;
    return this.length;
  };

  this.pop = function () {
    if (this.length !== 0) {
      this.length--;
    }
    let deleteValue = this[this.length];
    delete this[this.length];
    return deleteValue;
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  this.map = function (callback) {
    let newMap = [];
    for (let i = 0; i < this.length; i++) {
      newMap[i] = callback(this[i], i, this);
    }
    return newMap;
  };

  this.unshift = function (value) {
    // debugger
    for (let i = this.length; i > 0; --i) {
      this[i] = this[i - 1];
    }
    this[0] = value;
    this.length++;
    return this.length;
  };

  this.shift = function () {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return this.length;
  };
}

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
let array = [1, 2, 3, 4, 5];
const newMyArr = new MyArray();

for (let i = 0; i < 10; i++) {
  newMyArr.push(i);
}

// function func(...numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return result;
// }

// const sum = (...numbers) => numbers.reduce((summa, current) => summa + current);
