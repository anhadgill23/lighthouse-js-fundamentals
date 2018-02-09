var repeatNumbers = function(data) {
  // Put your solution here

  newArray = [];

  for (var j=0; j < data.length; j++){


    for (var i=0; i < data[j][1]; i++){
      newArray.push(data[j][0]);

    }
  }
  return(newArray);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));