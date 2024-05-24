function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array of magician names
var magician_names = ["samad", "Asif", "usama"];
//making a copy of orignal arraythrogh.slice()function
var copy_magician_names = magician_names.slice();
//modify the copied array to include "the Gread" with thier names
let = copy_great_magicians = make_great(copy_magician_names);
//show both arrays orginal and copiesd
//orignal
console.log("orginal Array");
show_magicians(magician_names);
//copies
console.log("copied Array");
show_magicians(copy_great_magicians);
