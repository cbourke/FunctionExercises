//1. Temperature conversion functions

//2. Temperature conversion functions in an object

//3. Logarithm function

//4. ROI function

//5. Numerical Comparator function

//6. Person/name comparator function

//7. find the max value in an array of numbers

//8. Generalized getMax function


//a person array to test your generalized getMax function
var personArray = [
  {
    firstName: "Joe",
    lastName:  "Schmoe"
  },
  {
    firstName: "Adrian",
    lastName:  "Smith"
  },
  {
    firstName: "Joe",
    lastName:  "Maddon"
  },
  {
    firstName: "Ralph",
    lastName:  "Smith"
  },
  {
    firstName: "Fionna",
    lastName:  "Apple"
  },
  {
    firstName: "Kathy",
    lastName:  "Zeta"
  }
];

//testing your generalized getMax Function:
var maxNumber = getMax([1, 8, 4, 3, 1, 40, 32, 1, 10], cmpNumeric);
console.log("Maximum Number: " + maxNumber);
var maxPerson = getMax(personArray, cmpPerson);
console.log("Maximum Person: " + maxPerson);
