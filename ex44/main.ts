function makeSandwich(...items:string[]){ 
    console.log("\nMaking a sandwich with the following items: \n");
items.forEach(singleItem => console.log(singleItem));
console.log("\nNow Enjoy sandwich");
}
//call the function 3 times with 3 different number of orguments
makeSandwich("chicken", "cheese", "Mayo", "Egg");

makeSandwich("bread", "Butter");

makeSandwich("bread", "butter", "mayo", "cheese", "Egg");