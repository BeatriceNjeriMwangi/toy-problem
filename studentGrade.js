const prompt = require('prompt-sync')()
//student grade function
function studentGrade(marks){
    const userInput = prompt('Enter the student grade: ')
    //converts string user input to floating number
    marks = parseFloat(userInput);
    //marks for students
    if (marks >79 && marks <= 100){
        return "A";
    }else if (marks >=60 && marks <=79){
        return "B";
    }else if (marks >=49 && marks <=59){
        return "C";
    }else if (marks >=40 && marks <=49){
        return "D";
    }else if (marks<39){
        return "E";
    }else if (marks>100){
        return "Invalid entry";

    }

}

//call function
const grade = studentGrade()
console.log("Your grade is:" +  grade)