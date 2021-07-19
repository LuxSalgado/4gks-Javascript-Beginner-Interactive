// Your code here:
var bottles = 99;

function sing () {
    if (bottles > 1){
        console.log(bottles+" bottles of milk on the wall, "+bottles+" bottles of milk. Take one down and pass it around, "+(bottles-1)+" bottles of milk on the wall.");
        bottles--;
    } else if (bottles == 1) {
        console.log(bottles+" bottle of milk on the wall, "+bottles+" bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        bottles--;
    } else if (bottles == 0) {
        console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.")
        bottles--;
    }
}

while (bottles >= 0) {
    sing();
}
