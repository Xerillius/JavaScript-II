// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

function firstItem(arr, cb){
  cb(arr);
};
firstItem(items, cb = (item) => { console.log(item[0]) });


function getLength(arr, cb) {
  cb(arr.length);
}
getLength(items, cb = arr => { console.log(arr) });

function last(arr, cb) {
  cb(arr.slice(-1)[0]);
}
last(items, cb = arr => { console.log(arr) });

function sumNums(x, y, cb) {
  cb(x + y);
}
sumNums(2, 5, cb = (param) => { console.log(param) });

function multiplyNums(x, y, cb) {
  cb(x * y);
}
multiplyNums(4, 3, cb = (param) => { console.log(param) });

function contains(item, list, cb) {
  list.includes(item) ? cb(true) : cb(false);
}
contains('Notebook', items, cb = (param) => { console.log(param) });

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
