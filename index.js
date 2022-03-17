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
    if (Math.random() > successChance + 0.2) {
      return `${this.name} catching mice: ${++this.counterMice}`;
    }
    return "Failed hunt";
  }
  poop() {
    this.counterMice = 0;
    return "Cat pooped";
  }
}

class StrayCat extends Cat {
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
    if (Math.random() > successChance) {
      return `${this.name} catching mice: ${++this.counterMice}`;
    }
    return "Failed hunt";
  }
}

const cat = new strayCat("Barsik", "Pers");
const cat2 = new Cat("Barsik2", "Persid");

const letterEncryption = new Map([
  ["t", "y"],
  ["y", "n"],
  ["n", "t"],
]);

function funcEncryption(string) {
  const letters = string.split("");
  const result = [];
  for (const letter of letters) {
    result.push(letterEncryption.get(letter));
  }
  return result.join("");
}
