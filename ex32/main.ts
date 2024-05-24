let current_users = ["Usman", "Ali", "Areeba", "Zain", "Usama"]
//Array of new users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"]
new_users.forEach(new_one_user => { 


//loop through new_users to check for usernames avaibility
let our_condition = (current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())) 
//print defferent message using If.Else statment

if(our_condition){ 
    console.log(`sorry ${new_one_user} is already taken!`)


}else{ 
    console.log(`This Username ${new_one_user} is available`)
}

})


 
 
 
 


