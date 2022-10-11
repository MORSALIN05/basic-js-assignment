let myString = '.hello guyies';
console.log(myString);
function isJavaScriptFile(myString) {
    let newString = myString.includes('.h');
    //console.log(newString);
    return newString;
}
const matchFile = isJavaScriptFile(myString);
console.log(matchFile);
