var repeatNumbers = function(data) {
for (var i = 0; i < data.length; i++){
  for (var j = 0; j < data[i].length; j++){
    console.log(data[j])
  }
}

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));