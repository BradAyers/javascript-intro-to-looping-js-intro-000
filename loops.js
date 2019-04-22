function forLoop(array) {
  var newArray = array;
  for (i = 1; i<26; i++) {
    newArray = [...newArray,`"I am ${i} strange loop${i === 0 ? '' : 's'}."`];
  }
  return newArray;
}
