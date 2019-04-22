function forLoop(array) {
  var newArray = array;
  for (var i = 1; i<26; i++) {
    newArray = [...newArray,`I am ${i} strange loop${i === 1 ? '' : 's'}.`];
  }
  return newArray;
}