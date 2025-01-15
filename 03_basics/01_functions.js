function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}

// sayMyName()

function addTwoNUmbers(num1 , num2){
    let result = num1 + num2;
    return result;
}

const result = addTwoNUmbers(3,5);
// console.log(result);

function loginUSerMsg(username){
    return `${username} just logged in`;
}

const values = loginUSerMsg("Shivam");

// console.log(values);

function calculatecartprice(...num1){
    return num1;
}

console.log(calculatecartprice(200,400,500,2000));