var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var num = 0;
while (num < 8) {
  console.log(ingredients[num]);
  num++;
}


// Write a for loop that prints out the contents of ingredients:
for (num=0; num < 8; num++) {
  console.log(ingredients[num]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(num=8; num >= 0; num--) {
  console.log(ingredients[num]);
}