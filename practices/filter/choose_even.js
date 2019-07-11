'use strict';

const isEven =(number) => {
  return number%2==0;
}

function choose_even(collection) {

 return collection.filter(
  isEven
  );
  //implement here
}

module.exports = choose_even;
