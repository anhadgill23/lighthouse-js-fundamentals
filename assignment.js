
function loopyLighthouse(range, multiples, words) {

for (var num = range[0]; num <= range[1]; num++){
  if (num % multiples[0] === 0 && num % multiples[1] === 0){
    console.log(words[0].concat(words[1]))
  }
  else if(num % multiples[0] === 0){
    console.log(words[0])
  }
  else if (num % multiples[1] === 0){
    console.log(words[1])
  }
  else {
    console.log(num);
  }
}
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);



/*
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
Your loopyLighthouse function should log to the console all
the numbers from 15 to 90, except replacing multiples of 2
with "Batty", multiples of 5 with "Beacon", and multiples
of 2 and 5 with "BattyBeacon".
*/
