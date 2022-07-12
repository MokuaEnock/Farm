/*var year = 2015;
yString = (year).toString()
if (year % 4 == 0){console.log( yString + " " +" is a leap year.");}
else{console.log( yString+ " " +"is not a leap year.");}*/

//Arrays
var visited =['Kenya', 'Tanzania', 'Uganda', 'Somalia'];

//add item 
visited.push('Zambia');
console.log(visited);

//find length
console.log(visited.length)

// unshift 
visited.unshift("Congo")
console.log(visited)

//joining arrays
var visited2 = ['Egypt', 'Jordan', 'Indiaa']
console.log(visited.concat(visited2))

//finding index
console.log(visited.indexOf('Kenya'))

//turning arrays into a string
console.log(visited.join())

//Objects
var info = {
    name : "Mokua",
    age : 21,
    school : "Moringa",
    place : "Chokaa"
}
console.log(info)
console.log(info.name)

//adding new values to an object
info.gender = "Male"
console.log(info)

//delete
delete info.school
console.log(info)
var car = {
    brand : "Toyota",
    model : "Hilux",
    type : "Pickup",
    yom : 2016,
    lookAlikes : {
        brand : "Toyota",
        model : "Vivo",
        type : "truck",
        yom : "2014"
    }   
};

console.log(car.lookAlikes.model)

//array of objects
var kiro = {
    name: "Kiro",
    age: 15,
    favoriteAnimals: ["Duck", "Monkey", "Whale"]
   };
   var patty = {
    name: "Patty",
    age: "17",
    favoriteAnimals: ["Snake", "Lion", "Zebra"]
   };
   var sandy = {
    name: "Sandy",
    age: "16",
    favoriteAnimals: ["Flamingo", "Chicken", "Gecko"]
   };