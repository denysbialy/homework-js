function MyArray() {
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
    let deletValue = this[this.length];
    delete this[this.length];
    return deletValue;
  };
}

const newMyArr = new MyArray();
