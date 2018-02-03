function range (start, end, step){
  if (start === undefined || end === undefined || step === undefined){
    return [];
  }

  else if (start > end){
    return [];
  }
  else if (step < 0){
    return [];
  }
  else {
    var newArray = [];
    for (start=start; start<= end; start += step){
    newArray.push(start);
  }
    return newArray;
}
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
