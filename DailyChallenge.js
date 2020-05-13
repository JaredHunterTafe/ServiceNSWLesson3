
// Create a function that takes an 2 arguments, an array of objects and a string character (eg. "a" or "b", etc.). The function should return all the objects in the array where the property name of that object contains the string character.

let people = [
    {
        name: "Jane",
        age: 25
    },
    {
        name: "Bob",
        age: 40
    },
    {
        name: "Dana",
        age: 46
    },
    {
        name: "Jade",
        age: 19
    },
    {
        name: "Jim",
        age: 12
    }
]

function serachByChar(array, searchTerm){
let resultArray = []
for (let i = 0; i < array.length; i++) {
    let element = array[i];
   
    let found = false;
    for(let i = 0; i < element.name.length; i){
        let letter = element.name[i];
        if(i == searchTerm()){
            found = true

        }
    

    if (found) {
        resultArray.push(element);
    }
    return resultArray;
}
}
console.log(searchByChar(people, "a"))