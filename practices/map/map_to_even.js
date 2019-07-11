'use strict';
const multipleMap = number=>{
  return number*2;
}
function map_to_even(collection){
  return collection.map(multipleMap);
}
module.exports = map_to_even;
