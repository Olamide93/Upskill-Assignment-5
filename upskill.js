//-------------QUESTION 1
//Create a function that will be able to convert figures from Fahrenheit to Celsius.
function farToCel(fahrenheit){
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
console.log(farToCel(212));     //output = 100


//-------------QUESTION 2
//Create a function that will calculate the average of numbers in an array.
function aveArray(arr){
    let sum = 0;
    for (i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let average = sum / arr.length
    return average
}

// let arr = [1, 2, 3, 4, 5];
// let average = aveArray(arr);
// console.log(average);
            //or
console.log(aveArray([1, 2, 3, 4, 5]));     //output = 3


//------------QUESTION 3
//Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
function divByXandY(number, x, y){
    if(number % x == 0 && number % y == 0 && x > 0 && y > 0){
        return " true, number divisible by x and y";
    }
    else{
        return "false, number not divisible";
    }
}
console.log(divByXandY(12, 4, 3));      //output = true, number divisible by x and y


//------------QUESTION 4
//Create a function that will output the first 100 prime numbers.
// gen100Primes = (n) => {
//     let primeNumbers = [];
//     for( let i = 0; i <= n; i++){
//         primeNumbers.push(i);
//     }
//     return primeNumbers.filter((number) => isPrime(number)).slice(0, 100);
// }
// console.log(gen100Primes(1000));    //output = error

function generatePrimes(num) {
    let primes = [];
    let n = 2;
    
    while (primes.length < num) {
      let isPrime = true;
      
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          isPrime = false;
          break;
        }
      }
      
      if (isPrime) {
        primes.push(n);
      }
      
      n++;
    } 
    return primes;
} 
console.log(generatePrimes(100));  //output = as required


//-----------------QUESTION 5
//Create a function that will return a boolean specifying if a number is a prime number.
function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i == 0)
        return false
    }
    return true
}
console.log(isPrime(9))     //output = true


//-----------------QUESTION 6
// Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
function getPositiveNumbers(numbers) {
    let positiveNumbers = [];
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        positiveNumbers.push(numbers[i]);
      }
    }
    
    return positiveNumbers;
  }
  
  console.log(getPositiveNumbers([-1, 2, -3, 4, -5]));      //output = [2, 4]


//-----------------QUESTION 7
//Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz"
//instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
// function fizzBuzz(n){
for(let n = 1; n <= 100; n++){
    if(n % 3 == 0 && n % 5 == 0){
        console.log("fizzBuzz")
    }
    else if (n % 3 == 0){
        console.log("Fizz")
    }
    else if (n % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(n)
    }
}                               //output = as required


//-----------------QUESTION 8

//The marketing team is spending way too much time typing in hashtags.
//Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria;
//It must start with a hash symbol, #.
//Ignore all spaces in the input.
//All words must have their first letter capitalized.
//If the final result is going to be longer than 140 characters, it should return false.
//If the input or result is an empty string, it should return false.

                //SOLUTION 1
// function generateHashtags(text) {
//     // Remove all non-word characters and split the text into an array of words
//     const words = text.replace(/[^w]/g, ' ').split(' ');
  
//     // Filter out any words that are less than three characters long
//     const filteredWords = words.filter(word => word.length >= 3);
  
//     // Convert each word to lowercase and add a '#' symbol to the beginning
//     const hashtags = filteredWords.map(word => '#' + word.toLowerCase());
  
//     // Return the array of hashtags
//     return hashtags;
//   }
// const text = "I love programming in JavaScript! It's my favorite language.";
// const hashtags = generateHashtags(text);
// console.log(hashtags); // Output: ["#love", "#programming", "#javascript", "#favorite", "#language"]


                                //OR
            //SOLUTION 2 

function generateHashtags(text){
    const trimmed = text.trim();
    if(!trimmed){
        return false
    }

    const words = trimmed.split(' ');
    const hashtagWords = words.map(
        (word) => word[0].toUpperCase() + word.slice(1)
    );
    const hashtag = `#${hashtagWords.join('')}`;
    if (hashtag.length > 140){
        return false;
    }
    return hashtag;
};
console.log(generateHashtags('This is my last assignment!'))    //output = #ThisIsMyLastAssignment!