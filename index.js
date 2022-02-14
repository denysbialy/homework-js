class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullName = () => `${this.name} ${this.surname}`;
  isAdult = () => this.age >= 18;
}

const user1 = new User("Viktor", "Rasputin", 44);
const user2 = new User("Wiktor", "Diperov", 12);
