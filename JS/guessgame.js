const max = parseInt(prompt("enter the max value"));
const random = Math.ceil(Math.random() * max)

let guess = prompt("guess the number or type quit")

while(guess != "quit"){

    guess = parseInt(guess);
if(guess == random){
    console.log("u are right", random);
    break;
}

else{
    guess = prompt("too pls try again or type quit");
}

}