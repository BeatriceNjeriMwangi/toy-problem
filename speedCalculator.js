const prompt = require("prompt-sync")();

//speed calculator function
function speedCalculator(){
    const speedInput = prompt('Enter the speed of the car: ');
    //covert string to number
    const speed = parseFloat(speedInput);
    //if speed is less or equal to 70
    if (speed<=70){
        return "OK"
    }
    //if speed exceeds 70 calculate merits for every 5km/s above speed limit
    else if(speed>70){
        merit =Math.floor((speed - 70)/5);
        if(merit>12){
            return "License suspended"
        }
        //prints merit points calculated
        return `points: ${merit}`;


    }
}
//call the function and log results
console.log(speedCalculator(
))
//run the code on console using node speed detector.js