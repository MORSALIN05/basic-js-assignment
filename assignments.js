/*assignment Four use only Lovely JavaScript*/

//problem 1: Radian to degree converter function.
let errorMsg1 = 'Pls Enter only Number';
function radianToDegree(Radian) {
    if (!isNaN(Radian)) {
        const Degrees = Radian * (180 / Math.PI);
        return Degrees;
    }
    else return errorMsg1;

}
console.log(radianToDegree('o'), ' Degree celcius');

//problem 2: Is JavaScript File or not return true or false.
let myString = 'javascript.js';
const myString2 = 5;
let errorMsg = 'enter string';
//console.log(myString2);
function isJavaScriptFile(myString2) {

    if (typeof myString2 === 'string') {
        const newString = myString2.includes('.js');
        return newString;
    }
    else { return errorMsg; }


    //else
    //console.log('please eneter only string')
    //return newString;
}
const matchFile = isJavaScriptFile(myString2);
console.log(matchFile);
//isJavaScriptFile('JavaScript.js');

//Problem 3: calculate Total Oil Price that have to pay.
const errorMsg2 = 'Pls! input right parameter';
function oilPrice(diesel, petrol, octane) {
    if (!isNaN(diesel && petrol && octane)) {
        const dieselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;
        let totalDieselPrice = diesel * dieselPrice;
        let totalPetrolPrice = petrol * petrolPrice;
        let totalOctanePrice = octane * octanePrice;
        const totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
        return totalOilPrice;
    }
    else return errorMsg2

}
const Total = oilPrice(1, 2, 'ab');
console.log('Total Oil Price =', Total);

//Problem 4: Calculate the number for publicBusFare.

function publicBusFare(people) {
    const reservedBus = 50;
    const microBus = 11;
    const restOfThePeople = people - (reservedBus + microBus);
    let publicBusCost = restOfThePeople * 250;
    return publicBusCost;
}
console.log('publicBusFare = ', publicBusFare(71));

//Problem 5: Find if Best friend or not with use object as parameter!

function isBestFriend(objectFirst, objectSecond) {
    console.log('Is Best friend');
    if (objectFirst.name === objectSecond.friend && objectFirst.friend === objectSecond.name) { return true; }
    else { return false; }

}
// object initialization
object1 = {
    name: 'Tom', friend: 'Rock'
}
object2 = {
    name: 'Rock', friend: 'Tom'
}

object3 = {
    name: 'Rakib', friend: 'Tarik'
}
object4 = {
    name: 'Tarik', friend: 'Rakib'
}
const bestFriend = isBestFriend(object1, object2);
console.log(bestFriend);
