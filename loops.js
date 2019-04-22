function forLoop(array) {
  //var newArray = array;
  for (var i = 1; i<26; i++) {
    array = [...array,`I am ${i} strange loop${i === 1 ? '' : 's'}.`];
  }
  return array;
}
