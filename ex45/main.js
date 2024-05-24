function creat_Car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Initialize a car object with manufacturer and modle
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //add additional options to the car object
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the function to creat a car object
var my_car = creat_Car("toyota", "corrolla", "color: Black");
//print the variable to ensure for the informition is stored is stored correctly in the car object
console.log(my_car);
