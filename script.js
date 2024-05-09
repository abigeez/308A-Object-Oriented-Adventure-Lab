//////hw///

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};
adventurer.inventory.forEach((item) => {
  console.log(item);
});
adventurer.companion.companion2 = {
  name: "Frank",
  type: "Flea",
  belongings: ["hat", "sunglasses"],
};
console.log(adventurer);
adventurer.roll();

/////part 2//////
const name1 = new Character();

class Character {
  constructor(name,) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll () {
    
  }
}




