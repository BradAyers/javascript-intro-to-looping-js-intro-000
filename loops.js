function forLoop(array) {
  //var newArray = array;
  for (var i = 0; i<25; i++) {
    array = [...array,`I am ${i} strange loop${i === 0 ? '' : 's'}.`];
  }
  return array;
}
