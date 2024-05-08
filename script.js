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




  //////////////////////////// Create a Promise that resolves after one second.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Guess this worked!");
    }, 1000);
  });
  // Add some then() methods to handle additional tasks.
  myPromise
    .then((x) => {
      console.log(x + " Again?");
      //
      const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("New Guess this worked!");
        }, 1000);
      });
      newPromise
        .then((y) => {
          console.log(y + " " + x);
        })
        .catch((err) => {
          console.log(err);
        });
      //
      return x;
    })
    .then((x) => {
      console.log(x + " Third time!");
      return x;
    })
    .then((x) => console.log(x + " Promises are cool."))
    .catch((err) => {
      console.error(err);
    });

    ////// class ex

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Guess this worked!");
        }, 10);
      });
      const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("New Guess this worked!");
        }, 10);
      });
      const newPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("2 New Guess this worked!");
        }, 10);
        // reject("rejecteddd");
      });
      Promise.all([myPromise, newPromise, newPromise2])
        .then((x) => {
          console.log(x[0]);
        })
        .catch((err) => {
          console.log(err);
        });


        /////class ex//////
        // Create a Promise that resolves after one second.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Guess this worked!");
    }, 100);
  });
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("New Guess this worked!");
    }, 10);
  });
  const newPromise2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve("2 New Guess this worked!");
    // }, 20);
    reject("rejecteddd");
  });
  Promise.any([myPromise, newPromise, newPromise2])
    .then((x) => {
      console.log(x);
    })
    .catch((err) => {
      console.log(err);
    });



    //////


    // Create a Promise that resolves after one second.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Guess this worked!");
    }, 100);
  });
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("New Guess this worked!");
    }, 10);
  });
  const newPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2 New Guess this worked!");
    }, 20);
    // reject("rejecteddd");
  });
  Promise.race([myPromise, newPromise, newPromise2])
    .then((x) => {
      console.log(x);
    })
    .catch((err) => {
      console.log(err);
    });


    ///////
    /// Create a promise that resolves a string
const myPromises = new Promise((resolve,reject) => {
console.log('Whasssup');
resolve();
})

.then((x) => {
  console.log()
}


)


// Use .then() and .catch() to handle the success or failure of the promise


// Create a new promise

const myPromisesTwo = new Promise((resolve,reject) => {


})
// Use composition tools, Promise.all Promise.any Promise.race, to handle the success or failure of the promise array
// Remember that composition tools take in an array of promises