class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.counterMice = 0;
    this.successChance = 0.5;
  }

  meow() {
    return "MEEEOOOW";
  }
  eat() {
    if (counterMice === 0) {
      return "Nothing to eat";
    }
    return `${this.name} eating`;
  }
  sleep() {
    return `${this.name} sleeping`;
  }
  catchingMice() {
    if (Math.random() > 0.7) {
      return `${this.name} catching mice: ${++this.counterMice}`;
    }
    return "Failed hunt";
  }
  poop() {
    this.counterMice = 0
    return 'Cat pooped';
  }
}

class strayCat extends Cat {
  constructor(name) {
    super(name, "Stray");
    this.miceEaten = 0;
  }
  eat() {
    if (this.counterMice > this.miceEaten) {
      return `${this.name} eating ${++this.miceEaten} mice`;
    } else {
      return `${this.name} needs to go hunting`;
    }
  }
  catchingMice() {
    if (Math.random() > 0.5) {
      return `${this.name} catching mice: ${++this.counterMice}`;
    }
    return "Failed hunt";
  }
}

const cat = new strayCat("Barsik", "Pers");
const cat2 = new Cat("Barsik2", "Persid");
