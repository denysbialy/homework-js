class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullName(){
    `${this.name} ${this.surname}`;
  }
  isAdult(){
     this.age >= 18;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName !== "string") {
      throw TypeError("Type is not string");
    }
    if (newName.trim() === "") {
      throw RangeError("name is not defined");
    }
    this._name = newName;
  }
  get surname() {
    return this._surname;
  }
  set surname(newSurname) {
    if (typeof newSurname !== "string") {
      throw TypeError("Type is not string");
    }
    if (newSurname.trim() === "") {
      throw RangeError("surname is not defined");
    }
    this._surname = newSurname;
  }

  get age() {
    return this._age;
  }
  set age(newAge) {
    if (isNaN(newAge)) {
      throw TypeError("age is not number");
    }
    if (newAge > 120 || newAge < 0) {
      throw RangeError("Invalid age, create correct age");
    }
    this._age = newAge;
  }
}

class Moder {
  constructor(name, surname, age, email) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
  }
  getFullName = () => `${this.name} ${this.surname}`;
  isAdult = () => this.age >= 18;
  createMessage = (message) => `Создать сообщение: ${message} `;
  deleteMessage = () => "Удалить сообщение";

  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName !== "string") {
      throw TypeError("Type is not string");
    }
    if (newName.trim() === "") {
      throw RangeError("name is not defined");
    }
    this._name = newName;
  }
  get surname() {
    return this._surname;
  }
  set surname(newSurname) {
    if (typeof newSurname !== "string") {
      throw TypeError("Type is not string");
    }
    if (newSurname.trim() === "") {
      throw RangeError("surname is not defined");
    }
    this._surname = newSurname;
  }

  get age() {
    return this._age;
  }
  set age(newAge) {
    if (isNaN(newAge)) {
      throw TypeError("age is not number");
    }
    if (newAge > 120 || newAge < 0) {
      throw RangeError("Invalid age, create correct age");
    }
    this._age = newAge;
  }

  get email() {
    return this._email;
  }
  set email(newEmail) {
    if (typeof newEmail !== "string") {
      throw TypeError("Type is not email");
    }
    if (newEmail === "") {
      throw RangeError("email is not defined");
    }
    this._email = newEmail;
  }
}

const moder = new Moder("Ivan", "Ivanov", 12, "test@test.test");
