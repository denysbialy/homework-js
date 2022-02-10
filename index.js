function MyArray() {
  // this.length = 0;
  
  // this.push = function (value) {
  //   this[this.length] = value;

  //   this.length++;
  //   return this.length;
  // };

  // this.pop = function () {
  //   if (this.length !== 0) {
  //     this.length--;
  //   }
  //   let deleteValue = this[this.length];
  //   delete this[this.length];
  //   return deleteValue;
  // };

  this.forEach = function (callback) {
    debugger
    for (let i = 0; i < this.length; i++) {
      this[i] = callback;
      // console.log(this[callback[i]]);
      return callback;
    }
  };
  
}

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

const newMyArr = new MyArray();

