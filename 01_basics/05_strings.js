const name = "krushna"
const repoCount = 50

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('krushna-kk')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

const newString = gameName.substring(0,5)

console.log(newString);

const anotherString = gameName.slice(-5,7)
console.log(anotherString);  

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
console.log(gameName.split('-'));

