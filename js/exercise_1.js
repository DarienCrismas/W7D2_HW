//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function exercise1(person){
    for(let i = 0; i < Object.keys(person).length; i++){
        if(Array.isArray(Object.values(person)[i])){
            console.log(Object.values(person)[i])
        }else{
            console.log(`${Object.keys(person)[i]}: ${Object.values(person)[i]}`)
        }
    }
}
exercise1(person3)
