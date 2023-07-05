// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function exercise3(text){
    return new Promise((resolve, reject)=>{
        if (text.length >= 10){
            resolve(text)
        }else{
            reject(text)
        }
    })
    .then(()=>{
        console.log("Big word")
    })
    .catch(()=>{
        console.log("Small Number")
    })
}

exercise3("This is a bit of a long string")
exercise3("word hard")

