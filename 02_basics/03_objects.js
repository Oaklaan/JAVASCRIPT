//singleton   

//object literals
const mysym = Symbol("key1")

const jsuser = {
    "name": "krushna",
    [mysym] : "mykey1",
    id: 123,
    state: "maharstra",
    isLoggedIn: false,
    lastlogindays: ["monday", "tuesday"]
}

console.log(jsuser.name)
console.log(jsuser["name"])
// console.log(typeof jsuser.mysym)
console.log(jsuser[mysym])







// console.log(jsuser["name"])
 