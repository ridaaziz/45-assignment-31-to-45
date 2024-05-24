function creat_Car(manufacturer, model, ...options ){ 
//Initialize a car object with manufacturer and modle
let car = { 
    manufacturer: manufacturer,
    model: model
};
//add additional options to the car object
options.forEach(options => { 
    let [key, value] = options.split(":");
    car[key.trim()] = value.trim();
});
return car;

}
//call the function to creat a car object
let my_car = creat_Car("toyota", "corrolla" , "color: Black");

//print the variable to ensure for the informition is stored is stored correctly in the car object
console.log(my_car);