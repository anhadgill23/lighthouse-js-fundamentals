
function lastIndexOf (array, num){
  var result = 0;
  var foundMatch = false;
  for(var i=array.length - 1 ; i >= 0; i--){
    if(array[i] === num){
      result = i;
      foundMatch = true;
      break;
    }
  }
  if (foundMatch === true){
    return result;
  }
  else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
