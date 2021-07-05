function analyze(array) {
  let length = 0;
  let min = array[0];
  let max = array[0];
  let average = 0;
  while (array[length] !== undefined) {
    min = array[length] < min ? array[length] : min;
    max = array[length] > max ? array[length] : max;
    average += array[length];
    length++;
  }
  average = average / length;
  return { average, min, max, length };
}

module.exports = analyze;
