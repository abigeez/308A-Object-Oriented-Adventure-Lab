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
  constructor(name,health,inventory) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll (mod = 100) {
const result = math.floor(math.random()* 200) + 1 + mod;
console.log(`${this.name} rolled a ${result}.`);
  }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

////// part 3///////
class Adventurer extends Character {
  constructor (name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}


