let reel1 = ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"]
let reel2 = ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"]
let reel3 =  ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"]

let rand1;
let rand2;
let rand3;



//1 spin = 1 coin
let initialCash = 20;

function play() {

// checking if the user has cash
if(initialCash === 0){
    console.log(' no more cassssshhh')
    return
}

initialCash = initialCash -1;
console.log('initial cash: '+ initialCash)
//select a random value for each reel
spinReel();


//if the element in the position 0 match and are === cherries, it win 50 coins 


};

function spinReel() {
rand1 = reel1[Math.floor(Math.random() * reel1.length)];
console.log(rand1)

rand2 = reel2[Math.floor(Math.random() * reel2.length)];
console.log(rand2)

rand3 = reel3[Math.floor(Math.random() * reel3.length)];
console.log(rand3)
//compare the position 0 of each array
compareSlots();



}

function compareSlots(){
    if(rand1 === "cherry" && rand2 === "cherry" && rand3 === "cherry"){
        initialCash = initialCash + 50;

    }
    else if((rand1 === "cherry" && rand2 === "cherry" && rand3 !== "cherry") || (rand2 === "cherry" && rand3 === "cherry" && rand1 !== "cherry" )){
        initialCash = initialCash + 40;
    }
    else if(rand1 === "apple" && rand2 === "apple" && rand3 === "apple"){
        initialCash = initialCash + 20;
    }
    else if((rand1 === "apple" && rand2 === "apple" && rand3 !== "apple") || (rand2 === "apple" && rand3 === "apple" && rand1 !== "apple" )){
        initialCash = initialCash + 40;
    }
    else if(rand1 === "banana" && rand2 === "banana" && rand3 === "banana"){
        initialCash = initialCash + 15;
    }
    else if((rand1 === "banana" && rand2 === "banana" && rand3 !== "banana") || (rand2 === "banana" && rand3 === "banana" && rand1 !== "banana" )){
        initialCash = initialCash + 40;
    }
    else if(rand1 === "lemon" && rand2 === "lemon" && rand3 === "lemon"){
        initialCash = initialCash + 50;
    }

    console.log(initialCash)
}
