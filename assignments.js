/*assignment Four use only Lovely JavaScript*/

//problem 1: Radian to degree converter function.

function radianToDegree(Radian) {    //calculate radian to degree
    const errorMsg1 = 'Pls Enter only Number';
    if (!isNaN(Radian)) {        //check if it's a number
        const Degrees = Radian * (180 / Math.PI);  //Formula
        return Degrees;
    }
    else return errorMsg1;   //return if not get a number

}
console.log(radianToDegree(1));  //output

//problem 2: Is JavaScript File or not return true or false.
// let myString = 'javascript.js';
// const myString2 = 5;
// let errorMsg = 'enter string';
//console.log(myString2);
function isJavaScriptFile(detectJsExtension) {

    let errorMsg = 'enter string for jsFile';
    if (typeof detectJsExtension === 'string') //check if string or not
    {
        const newString = detectJsExtension.includes('.js'); //has '.js'
        return newString;
    }
    else { return errorMsg; }

}
const matchFile = isJavaScriptFile('yiew.js');
console.log(matchFile);
//isJavaScriptFile('JavaScript.js');

//Problem 3: calculate Total Oil Price that have to pay.

function oilPrice(diesel, petrol, octane) {  //calcuate oil price
    const errorMsg2 = 'Pls! input right parameter';
    if (!isNaN(diesel && petrol && octane)) {   //check numeric or not
        const dieselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;
        let totalDieselPrice = diesel * dieselPrice; //calcuate total diesel price & same as below
        let totalPetrolPrice = petrol * petrolPrice;
        let totalOctanePrice = octane * octanePrice;
        const totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;   //sum total oil price
        return totalOilPrice;
    }
    else return errorMsg2  //if wrong input

}
let Total = oilPrice(1, 2, 3); // Set function to a variable
console.log(Total); // Output Oil price

//Problem 4: Calculate the number for publicBusFare.

function publicBusFare(people) {    //function to calcualte PublicBusFare
    const msg = 'Pls! Enter only Numeric number';
    if (typeof people == 'number') {
        const reservedBus = 50;  //fixed capacity for reserved bus
        const microBus = 11;    //and for micro bus
        let restOfThePeople = people - (reservedBus + microBus); // Calculate rest of the people who can't take Reserved bus or micro
        let publicBusCost = restOfThePeople * 250;
        return publicBusCost;
    }
    else return msg;
}
console.log(publicBusFare(63)); //output for public bus cost


//Problem 5: Find if Best friend or not with use object as parameter!

//function for finding best Friend
function isBestFriend(objectFirst, objectSecond) {

    const errorMsg3 = 'Pls! Enter Object only';
    //console.log('Is Best friend');

    //check the parameter that 'Object' type or not
    if (typeof objectFirst && typeof objectSecond === 'object') {
        // Check if the two object match the criteria
        if (objectFirst.name === objectSecond.friend && objectFirst.friend === objectSecond.name) return true;
        else return false;
    }
    else return errorMsg3;

}
// object declaration
const object0 = 3;
const object5 = 4;
const object1 = {
    name: 'Tom', friend: 'Rock'
}
const object2 = {
    name: 'Rock', friend: 'Tom'
}

const object3 = {
    name: 'Rakib', friend: 'Tarik'
}
const object4 = {
    name: 'Tarik', friend: 'Rakib'
}
let bestFriend = isBestFriend(object1, object2);
console.log(bestFriend); //output of function
