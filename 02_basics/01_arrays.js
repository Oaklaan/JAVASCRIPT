const array = [0, 1, 2, 3, 4, 5]
const myHeroes =["kk", "kk2"];


const mynewarray = new Array(1, 2, 3, 4, 5)
const mynewarray2 = mynewarray.join()
// array meathods 

// mynewarray.push(6)
// mynewarray.push(7)
// mynewarray.pop(7)   //removes last index unit

mynewarray.unshift(6)
mynewarray.shift()


// console.log(mynewarray);
// console.log( mynewarray2);

console.log("A", mynewarray)

const mynewarray3 = mynewarray.slice(1, 3)

console.log("b", mynewarray3);  

const mynewarray4 = mynewarray.splice(1, 3)
console.log("c", mynewarray4);