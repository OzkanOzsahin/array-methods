//A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"},
    {name: "Superman", alter_ego: "Clark Kent"},
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    // Here goes your function
    const findSpiderMan = function(superheroes) {
        return superheroes.find(function(superhero) {
          return superhero.name === "Spiderman";
        });
      };
    
    console.log(findSpiderMan(superheroes))
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

    //B

    const doubleArrayValues = function(array) {
        let newArray = [];
        array.forEach(number => {
            newArray.push(number * 2); 
        });
        return newArray;       
    };

   

    console.log("Double 1,2,3,:", doubleArrayValues([1, 2, 3]));
    
// C Write a JavaScript function that checks if there is a number (integer) in the array that is greater than 10.


const containsNumberBiggerThan10 = function(array) {
return array.some(number => {
return number > 10;
});
};
console.log("Ik ben groter dan 10", 
containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

// D   
function isItalyInTheGreat7(array) {
  return array.includes("Italy");

}

console.log("Is Italy in it?:", isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])
);

// E 

const tenfold = function (array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 10);
});
return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11 ]))
// result should be [10, 40, 30, 60, 90, 70, 110]

// Of met een .map method
const tenfoldMap = function(array) {
  return array.map(number => {
    return number * 10;
  });
};
console.log("tenfold", tenfoldMap([1, 4, 3, 6, 9, 7, 11]));

//F Write a JavaScript function that checks if all values ​​in the array are below 100, and return True or False.

function isBelow100(array) {
return array.every(number => {
return number < 100;
});
}
console.log("Below 100?:",
isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
console.log("Below 100, should be true", isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98])
);

// G 

const numbers = [1, 81, 4, 53, 3, 6, 11, 77, 84, 98, 101, 206, 234];

const bigSum = function(array) {
  return array.reduce((acc, number) => {
    return acc + number;
  });
};
console.log("Big sum, add all numbers in array:", bigSum([1, 81, 4, 53, 3, 6, 11, 77, 84, 98, 101, 206, 234]));
console.log("Big sum, add all numbers in array:", bigSum(numbers));




// result should be 1118