const tinderuser = {}

tinderuser.id = 1234 
tinderuser.name = "krushna"
tinderuser.isLoggedIN = false 

// console.log(tinderuser);

const regulrname = { //  objects ke andar object
        email: "krushnaksoshtwar619@gmail.com",
        fullname: {
        username:{
            firstname: "krushna",
            lastname: "koshtwar"
        }
    } 
}

// console.log(regulrname.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

// const onj3 = Object.assign({}, obj1, obj2)
const onj3 = {...obj1, ...obj2}

// console.log(onj3);


// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLoggedIN'));

const profile = {
    id: 123,
    name: "krushna",
    year: "2jan/2026"

}
const {name: petname } = profile 
console.log(petname); 


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// } *json format* 



















