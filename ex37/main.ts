//makeing a function shirt
function make_shirt(size: string="Large ", printMessage:string = "I Love TypeScript"){

    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`)
}
//calling a funcyion with by-defualt values
make_shirt();

//calling a function now with Medium size and default message
make_shirt("Medium")
//calling a function now with small size and also diffault message
make_shirt("Small", "I Love JavaScript")