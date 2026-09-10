if (true) {
    let a = 23
    const b = 50
    var c = 40
}

// console.log(a);
// console.log(b);
// console.log(c);

// something (var) inside the curly barces is local scope if u console var it will provide that value even if u not provide the var declaaration . var outside the curly braces is called the global scope. 

function one(){

const username = "krushna"
    function two(){
        const website = "kk.com"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

// in this we have called the one() function outside & console.log(username) is a local scope calling outside its own function so it will print the value .

if (true){
    const username = "krushna"
    if (username === "krushna"){
        const website = " youtube"
        //console.log(username + website);
        
    }
     //console.log(website);
    
}

// console.log(username);

//--------------------------------------- 