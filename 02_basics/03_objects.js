//singleton   

//object literals
const mysym = Symbol("key1")

const jsuser = {
    "name": "krushna",
    [mysym] : "mykey1",
    id: 123,
    state: "maharstra",
    isLoggedIn: false,
    lastlogindays: ["monday", "tuesday"],
    email: "krushnakoshatwar@gmail.com"
}

// console.log(jsuser.name)
// console.log(jsuser["name"])
// console.log(typeof jsuser.mysym)
// console.log(jsuser[mysym])
// console.log(jsuser["name"])

jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(jsuser)
jsuser.email = "hitesh@microsoft.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello JS user");
}
jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsuser.greeting());


