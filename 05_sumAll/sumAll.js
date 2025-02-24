const sumAll = function(start, stop) {
  if (
    typeof start !== 'number' ||
    typeof stop !== 'number' ||
    start < 0 ||
    stop < 0 ||
    start % 1 !== 0 ||
    stop % 1 !== 0
    ) {
    return 'ERROR'
  }
  let sum = 0
  if (start > stop){
    newStart = stop
    stop = start
    start = newStart
  }
  for (let i = start; i <= stop; i++){
    sum += i
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;
