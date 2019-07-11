'use strict';

const isChooseMultiplesOfThree =(number)=>{
  return number%3==0;
}
function choose_multiples_of_three(collection) {
  return collection.filter(
    isChooseMultiplesOfThree
    );
  //implement here
}

module.exports = choose_multiples_of_three;
