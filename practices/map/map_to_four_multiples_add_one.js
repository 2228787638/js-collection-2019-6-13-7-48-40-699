'use strict';
const mapToFourMultiplesAdd = number =>{
  return number*4+1;
}
var map_to_four_multiples_add_one = function(collection){
  return collection.map(mapToFourMultiplesAdd);
};

module.exports = map_to_four_multiples_add_one;
