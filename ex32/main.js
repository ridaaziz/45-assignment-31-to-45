var current_users = ["Usman", "Ali", "Areeba", "Zain", "Usama"];
//Array of new users
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
new_users.forEach(function (new_one_user) {
    //loop through new_users to check for usernames avaibility
    var our_condition = (current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); }));
    //print defferent message using If.Else statment
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
