var repeatNumbers = function(data) {
  // Put your solution here
  var newArray = [];
  var num;

  for(var i=0;i<data.length;i++){

    num = data[i][0];

    for (var j=0; j<data[i][1]; j++){
      newArray.push(num);
    }
  }

  //return newArray;
  //console.log(newArray);
  //console.log(data);
  //console.log(data[0][0]);

};

//console.log(repeatNumbers([[1, 10]]));
//console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));