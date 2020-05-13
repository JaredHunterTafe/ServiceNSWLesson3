let me =
    {
    name: "Jared",
    age: 26
    }
console.log(me)
me.age++
console.log(me) 


me.hobbies = [
    "DnD", 
    "Gaming", 
    "Rugby"
]

me.pets = [
{
    name: "Raven",
    age: 5,
    species: "Cat"
},{
    name: "Sam",
    age: 16,
    species: "Dog"  
}
]

// console.log(me.pets)

// console.log(`my hobbies are ${me.hobbies [0]} , ${me.hobbies [1]} and ${me.hobbies [2]}`);

let hobbies = "my hobbies are "
for (let i = 0; i < me.hobbies.length; i++) {
    let hobby = me.hobbies[i];
    hobbies += hobby;  
    if (i == me.hobbies.length - 2) {
        hobbies += " and ";
    }else if (i == me.hobbies.length - 1){
        hobbies += "."
    } else {
        hobbies += ", ";
    }
   
    hobbies += ", "
}

console.log(hobbies)    