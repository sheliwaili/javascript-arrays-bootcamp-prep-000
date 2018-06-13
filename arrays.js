//variable for a candy bar
{var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}

//not modify, but return new array
function addElementToBeginningOfArray(array, element) {

var numbersequence = ["2", "3", "4"]

//should add 1 to beginning of array without modifying the original
<<<<<<< HEAD
return [element, ...array];
}

//modifying the original array
function destructivelyAddElementToBeginningOfArray(array, element) {

//should add 1 to beggining of array by modifying the original
array.unshift(element)

return array
=======
return ["1", ...addElementToBeginningOfArray];
}

//modifying the original array
function destructivelyAddElementToBeginnigOfArray(array, element) {

var numbersequence1 = ["2", "3", "4"];

//should add 1 to beggining of array by modifying the original
destructivelyAddElementToBeginnigOfArray.unshift("1")
>>>>>>> 01feef2b8c9d912c3fb7c0363036dc172624f61b
}

//add to end without modifying
function addElementToEndOfArray(array, element) {

<<<<<<< HEAD
//modify without changing
return [...array, element];
=======
var numbersequence2 = ["1", "2", "3"]

//modify without changing
return [...addElementToEndOfArray, "4"];
>>>>>>> 01feef2b8c9d912c3fb7c0363036dc172624f61b
}

//modify while changing
function destructivelyAddElementToEndOfArray(array, element) {

<<<<<<< HEAD
//add element at end while modifying original array
array.push(element)

return array
=======
var numbersequence3 = ["1", "2", "3"]

//add element at end while modifying original array
destructivelyAddElementToEndOfArray.push("4")
>>>>>>> 01feef2b8c9d912c3fb7c0363036dc172624f61b
}

function accessElementInArray(array, index) {

<<<<<<< HEAD
return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {


array.shift(element)

return array
}

function removeElementFromBeginningOfArray(array, element) {

return array.slice(1)

=======
var lowerbody = ["butts", "hips", "thighs"];

console.log(accessElementInArray[1]);
}

function destructivelyRemoveElementFromBeginningOfArray(array, index) {

var cats = ["Milo", "Garfield", "Otis"]

cats.shift(1)

return cats
}

function removeElementFromBeginningOfArray(array, index) {

var cats = ["Milo", "Garfield", "Otis"]

cats.slice(-2)

return cats
>>>>>>> 01feef2b8c9d912c3fb7c0363036dc172624f61b
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  
<<<<<<< HEAD
 array.pop()
  
  return array
}

function removeElementFromEndOfArray(array, element) {
 
  return array.slice(0, array.length -1)
  
=======
  var iceCreams = ["chocolate", "vanilla", "raspberry"]
  
  iceCreams.pop()
  
  return iceCreams
}

function removeElementFromOfArray(array, element) {
 
  var iceCreams = ["chocolate", "vanilla", "raspberry"]
  
  iceCreams.slice(0, iceCreams.length -1)
  
  return iceCreams
>>>>>>> 01feef2b8c9d912c3fb7c0363036dc172624f61b
}

