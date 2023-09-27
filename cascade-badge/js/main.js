//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 


function reverseParty(pokemonArr){
   console.log( pokemonArr.reverse())
}
reverseParty(['bulba','charamnder', 'pika'])

/*
function listOfPokemon(pokemonArr){

    let reversedArr = [];

    for(let i = 0; i < pokemonArr.length; i++ ){
    const reversedNames = pokemonArr[i].split('').reverse().join('');
    reversedArr.push(reversedNames)
    }

    return reversedArr
}

let pokemon = ['bulba','charamnder', 'pika']

console.log(listOfPokemon(pokemon))
*/

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function compareSqaureAndCube(a ,b){
    return a.reduce((acc, c) => acc + c ** 2, 0 ) > b.reduce((acc, c) => acc + c ** 3, 0 );
}

console.log(compareSqaureAndCube([2,2,2],[2,2,2]))


// reduce takes in a accumalator and a current value
//reduce returns a singular value

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultiple(arr){
    return arr.filter((e,i) => e  % i === 0 )
}

// filter returns an array

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfValues(arr){
    return arr.reduce((acc, c) => acc + Number(c), 0)
}

console.log(sumOfValues(['5', 4, '3', 2]))

/*
const s = r => r.reduce(( a,c) => +a+ +c)

the + infront of the variables makes it a number

SPACE IS IMPORTANT IT WILL NOT WORK IF THERE IS NO SPACE

console.log(s(['5', 4, '3', 2]))

*/

