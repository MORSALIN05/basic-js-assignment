let myString = '.hello guyies';
console.log(myString);
function isJavaScriptFile(myString) {
    let newString = myString.includes('.h');
    //console.log(newString);
    return newString;
}
const matchFile = isJavaScriptFile(myString);
console.log(matchFile);
console.log('isObjectTest');

const variable1 = { name: 'Tom' };
const variable2 = 4;

if ((typeof (variable1 && variable2) === 'object') &&
    ((variable1 && variable2) !== null) &&
    (!Array.isArray(variable1 && variable2))) {
    // 👇️ this runs
    //console.log('✅ Value is an object');
} else {
    //console.log('⛔️ Value is not an object');
}
//new test
if (typeof variable1 === typeof variable2) {
    console.log('✅ Value is an object');
}
else console.log('⛔️ Value is not an object');
