/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
Note that numbers can be a little wonky because they are manipulated using the IE64 Floating Point Binary Format, 1/10 isn't really 1/10 etc.
*/

// Write your code below this line!

let newID = parseInt("10000000" + oldID, 10);

let ageIsValid = Number.isInteger(currentAge);

let randomNumber = Math.random() * 20

let randomInteger = Math.floor(randomNumber)

let randomUserID = parseInt("10000000" + randomNumber, 10);
