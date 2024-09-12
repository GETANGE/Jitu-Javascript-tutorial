let number = [1, 2, 3, 4, 5, 6, 7, 8]
let number_2 = [1, 2,3, 4, 5, 6, 7, 8, 9]

number.forEach(function(num){
    num >= 5 ? console.log(Math.sqrt(num)) : console.log("Not greater than 5")
})

for (let i = 0; i < number_2.length; i++){
    if(number_2[i] > 4){
        console.log(Math.sqrt(number_2[i], "\n"));
        break;
    }
}

// while the condition id true, immediately execute the code.
let x= 0;
while (x <= 20) {
    console.log(x);
    x++;
}
console.log("Program terminated successfully")

// Do....While
// behaves like then ..... catch
let password = 'password'
let passwordInput ;

do{
    let currentPassword = 'password';
    passwordInput = currentPassword;
}while (password !== passwordInput) {
    return console.log("incorrect password")
}

let marks = 0;
let grade = '';

function myGrade(marks) {
    if (marks > 89 && marks <= 100) {
        grade = 'A';
    } else if (marks > 70 && marks <= 88) {
        grade = 'B';
    } else if (marks > 50 && marks <= 69) {
        grade = 'C';
    } else if (marks > 30 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    return grade;
}

console.log(myGrade(56)); // Outputs: C