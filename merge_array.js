
function merge (array_1, array_2) {
  var array_3 = [];
for (var x = 0; x < array_1.length; x ++) {
  array_3.push(array_1[x]);
}
for (var y = 0; y < array_2.length; y ++) {
  array_3.push(array_2[y]);
}
return array_3.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
