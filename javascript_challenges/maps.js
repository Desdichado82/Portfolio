//Syntax let map = new Map([iterable]);
// the Map() accepts an optional iterable object whose elements are key-value pairs.

// create a new map object 

let john = {name:'john Doe'},
    lily = {name:'lily Bush'},
    peter = {name:'Peter Drucker'};

//Assuming that you have to create a map of users and roles. in this case ,you use the following code:

let userRoles = new Map();

// the userRoles is an instance of the Map object and its type is an object as illustrated in the following

console.log(typeof(userRoles));// object 
console.log(userRoles instanceof Map); // true

// Add elements to the map

userRoles.set(john,'admin');

//the set() method maps user John with the admin role .

userRoles.set(lily, 'editor')
.set(peter,'subscriber');

//initialise a map with a iterable object 

//As mentioned earlier, you can pass an iterable object to the map() constructor :

let userRoles = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);

// Get an element from a map by key 

// if you want to see the roles of john , you use the get() method
userRoles.get(john); // admin 

// if you pass a key that is not in map, the get() method will return undefined 

let foo = {name:'Foo'};
userRoles.get(foo); // undefined 

// check the existence of an element by key 
//to check if a key exists in the Map, you use the Has() Method

userRoles.has(foo);// false 
userRoles.has(lily); // true 


// get the number of elements in the map 

console.log(userRoles.size); // 3

// iterate over map keys 

/*
 To get the keys of a map object , you use the keys() method .
 The Keys() returns a new iterator object that contains the keys of elements in the map.

 The following example displays the username of the users in the userRoles map object.



*/

for(let user of userRoles.keys()){
    console.log(user.name);
}

// John Doe 
// Lily Bush 
// Perter Drucker 

// Iterate over map values 

//You can user the values() method to get an iterator object that contains values for all the elements in the Map
for(let role of userRoles.values()){
    console.log(role);
}

// admin 
// editor 

//subscriber 

/*
Iterate over map elements 
the entries() method returns an iterator object that contains an array of [key,value] of each element in th e
map object:

*/

for(let elem of userRoles.entries()){
    console.log(`${elem[0].name}:${elem[1]}`);
}

// John doe : admin 
// Lily bush: editor 
// Peter Drucker: subscriber 

// to be more natural , you can use desrtuctering as follows

for(let[user,role] of userRoles.entries()){
    console.log(`${user.name}:${role}`);
}

// in addition for of loop , you can use the forEach() method of the map object:

userRoles.forEach((role,user)=>
console.log(`${user.name}:${role}`));

//Convert map keys or values to a array 

/* Sometimes ,you want to work with an array instead of an iterable object , in this case , you can 
use the spread operator. for example*/

// converts keys for each element into arrays

var keys = [...userRoles.keys()];
console.log(keys);

// output 
/*
    [ { name: 'John Doe' },
  { name: 'Lily Bush' },
  { name: 'Peter Drucker' } ]
*/

// the following converts the values of elements into arrays 

let roles = [...userRoles.values()];
console.log(roles);

[ 'admin', 'editor', 'subscriber' ]


// Delete an element by key 

userRoles.delete(john);

//Delete all elements in the map 

//to delete all entries in the Map object , you use clear() method: 

userRoles.clear();

console.log(userRoles.size); // 0

/*
    WeakMap
A WeakMap is similar to a Map except the keys of a WeakMap must be objects. It means that when a reference to a key (an object) is out of scope, the corresponding value is automatically released from the memory.

A WeakMap only has subset methods of a Map object:

 get(key)
 set(key, value)
 has(key)
 delete(key)
Here are the main difference between a Map and a WeekMap:

Elements of a WeakMap cannot be iterated.
Cannot clear all elements at once.
Cannot check the size of a WeakMap.
In this tutorial, you have learned how to work with the JavaScript Map object and its useful methods to manipulate entries in the map.
*/

