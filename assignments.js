/*assignment Four use only Lovely JavaScript*/

//problem 1: Radian to degree converter function.

function radianToDegree(Radian) {
    const Degrees = Radian * (180 / Math.PI);
    return Degrees;
}
console.log(radianToDegree(32));

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
//Problem 3: calculate Total Oil Price.
//Problem 4: Calculate the number for publicBusFare.
//Problem 5: Find if Best friend or not with use object as parameter!
