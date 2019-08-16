// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const stuff = "things";
const returnStuff = () => {return stuff};
console.log(returnStuff());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return cb = () => { return count++ };
};
const newCounter = counter();
newCounter();
newCounter();
console.log(count);
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  let cb = {
    increment: function() { return count++ },
    decrement: function() { return count-- }
  };
  return cb;
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
const factory = counterFactory();

factory.increment();
console.log("Post Incremenet: " + count);
factory.decrement();
console.log("Post Decrement: " + count);