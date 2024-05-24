ex11
let user="ratan lal"
if(user =="ratan lal"){
    console.log("hello ",user)
}
else if(user=="chaman lal")
{console.log("hello",user)}
else if(user==" gulzari lal")
{console.log("hello",user)}
else{console.log("invalid username")}

ex12
let friensName = ["ruby","sana"];

friensName.forEach(frienName => console.log(`hello ${frienName},how are you?`));

ex13
let friensName = ["ruby","sana"];

friensName.forEach(frienName => console.log(`hello ${frienName},how are you?`));

ex14

let guestList = ["Hamza", "Usama", "Ayesha", "Areeba"];

guestList.forEach(oneGuest => console.log(`assalam ${oneGuest}, would you like to dinner with me?`));

ex15

let guestlist = ["hamza","usman","ayesha","areeba"];

let dontcome = guestlist[0];

console.log(dontcome,"nahi aa sakte");

guestlist.splice(0,1,"sana");

guestlis
t.forEach(guest =>console.log(`salam ${guest},would you like to dinner with me? `));

ex16

let guestList = ["Hamza", "Usman", "ayesha","areeba"];
let dontcome = guestList[0];

console.log(dontcome, "nahi aa sakty han");

guestList.splice(0, 1, "najma");

console.log("goodNews ! we have found a Bigger Table for Dinner");
guestList.unshift("Ali");

guestList.push("Zain");

let middleIndex:number = Math.floor (guestList.length/2);

guestList.splice(middleIndex, 0, "ruby");

console.log("updated List of our Guests");

guestList.forEach(oneguest => console.log(`assalam ${oneguest} would you like to dinner with me?`));

ex17

let guestList = ["Hamza", "Usama", "Ayesha", "Areeba"];

let dontCome = guestList[0];

console.log(dontCome, "nahi aa sakty han");

guestList.splice(0,1, "Amir");
console.log("Goog News! we have found a bigger table for Dinner.");
guestList.unshift("Ali");
guestList.push("zain");

let middleindx: number = Math.floor(guestList.length /2);

guestList.splice(middleindx, 0, "Usma");
console.log("Updated List of our guest");
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));


console.log("unfortunately, the new dinner table wont arrive on time,so:can only two guest to dinner with me");
while(guestList.length > 2){ 
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} I cant invite you to dinner`);
}    
    console.log("invitations to the last 2 Guests");
    guestList.forEach(lasttwo => console.log(`lucly ${lasttwo},you are still invited to dinner`));
    guestList.pop();
    guestList.pop();
    console.log("Empty List:,guestList");
ex18

let countriesToVisit: string[] = ["china", "Denmark", "Brazil","argentina"];

console.log("Orginal order:", countriesToVisit);

console.log("Alphabatical order:",[...countriesToVisit].sort());
console.log("still in orginal order:", countriesToVisit);
console.log("Reverse order:",[...countriesToVisit].reverse());
console.log("still in orginal order:", countriesToVisit);
console.log("orginal Array Reverse:",countriesToVisit);
console.log("Back to orginal order:",countriesToVisit.reverse());
console.log("sorted in Alphabetical order:",countriesToVisit);
console.log("orginal Array Reverse:",countriesToVisit);

ex19

let guestlist = ["hamza","areeba","usama","ayesha"];
let lengthGuests: number= guestlist.length;
console.log(`We are Inviting total ${lengthGuests} guests.`);


ex20

let programingLanguage:string[] = ["typeScript", "JavaScript", "Python", "PHP"];

console.log("List of programing Language:");
programingLanguage.forEach(language => console.log(language));





