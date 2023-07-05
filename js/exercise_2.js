//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age){
    this.name = name
    this.age = age

    // I don't really understand why it needs to take a variable 
    // if it's only incrementing by one year and can access this.age regardless 
    // so I made two methods
    this.addAge=()=>{
        this.age ++
    }

    this.addMultipleYears=(years)=>{
        this.age += years
    }

    this.printInfo=()=>{
        console.log(`This person's name is ${this.name}, they are ${this.age}.`)
    }
}

let personOne = new Person("Bob", 31)
let personTwo = new Person("Beverly", 67)


personOne.addAge()
personOne.addAge()
personOne.addAge()
personOne.printInfo()

personTwo.addMultipleYears(3)
personTwo.printInfo()