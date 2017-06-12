//Simple arguments and return
var square = x => x * x ;
console.log(square(9));

//Arrow func do not bind "this" nor arguments
var user = {
    name : 'Mario',
    sayHi : () => {
        console.log(`Hola! ${this.name}`);
        console.log(arguments); // Shows the global argument instead of method argument
    },
    sayHiAlt () {
        console.log(`Hola! ${this.name}`);
        console.log(arguments); // Shows the global argument instead of method argument
    }
}

user.sayHiAlt(1,2,3,4);
user.sayHi(1,2,3,4);