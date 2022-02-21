class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.countrMice = 0;
  }

  meow() {
    return "MEEEOOOW";
  }
  eat() {
    return `${this.name} eating`;
  }
  sleep() {
    return `${this.name} sleeping`;
  }
  catchingMice() {
    return `${this.name} catching mice: ${++this.countrMice}`;
  }
}

class strayCat extends Cat {
  constructor(name) {
    super(name, "Stray");
    this.miceEaten = 0;
  }
  eat() {
    if (this.countrMice > this.miceEaten) {
      
      return `${this.name} eating ${++this.miceEaten} mice`;
    } else {
      return `${this.name} needs to go hunting`;
    }
  }
}

const cat = new strayCat("Barsik", "Pers");
