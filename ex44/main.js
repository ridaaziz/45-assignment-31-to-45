function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy sandwich");
}
//call the function 3 times with 3 different number of orguments
makeSandwich("chicken", "cheese", "Mayo", "Egg");
makeSandwich("bread", "Butter");
makeSandwich("bread", "butter", "mayo", "cheese", "Egg");
