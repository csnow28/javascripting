/* const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback
    }
  }
};  */
// use a forEach() to loop through the names to see if there is a match to 'Waldo', and if so,
// return the found() callback.

const findWaldo = function(names, found) {
  names.forEach(function(names, index) {
    if (names === "Waldo") {
      found(index);
    }
  });
};

const actionWhenFound = function(index) {

  console.log("Found Waldo at:", index);
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
findWaldo(["Momo", "Rusty", "Maple", "Waldo", "Poppy"], actionWhenFound);
findWaldo(["Momo", "Rusty", "Maple", "Poppy"], actionWhenFound);
