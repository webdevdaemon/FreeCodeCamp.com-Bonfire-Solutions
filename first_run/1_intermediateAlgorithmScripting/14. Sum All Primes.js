// Sum All Primes

// My Solution::

function sumPrimes(num) {
    // create TWO empty arrays, one for the "Sieve", & one for the resulting sequence of primes
    // assign var to ZERO - to use as a starting point for the solution/sum accumulator
    var pr = [],
        addArr = [],
        sum = 0;\

    ////// THE SIEVE OF ERATOSTHENES //////
    function printPrime(prMax) {
        // 1) to find all primes below the input, the sieve uses a for loop to build an array
        // 2) the length of the array equaling the number of integers between 2 and the input value
        // 3) instead of a sequence of numbers, every index will initially be set to TRUE (boolean)
        for (var i = 2; i <= prMax; i++) { pr[i] = true; }
        // 4) determine the square root of the input, assign a var
        var end = Math.sqrt(prMax);
        // 5) this is where the magic of this algorithm happens, all ineligable integers are set to FALSE
        // this is accomplished by eliminating multiples of each integer from our array by marking them FALSE
        // starting with 2*2, then 3*3, and so on, until TRUE will only be found at prime indexes of the array
        for (i = 2; i <= end; i++) {
            if (pr[i] === true) {
                for (var j = i * i; j <= prMax; j += i) { pr[j] = false; }
            }
        }
        // 6) lastly, the algorithm pushes the number value of every TRUE index to the second array
        // providing the sequence of digits needed to find the sum of all primes
        for (i = 2; i <= prMax; i++) {
            if (pr[i] === true) { addArr.push(i); }
        }
    } //////// END OF SIEVE /////////
    // finally, call the function using the input value as the sieve's input to get the array of primes
    printPrime(num);
    // next, map through the array of primes, adding each value to the sum as Array.map progresses
    addArr.map(function(r) { sum += r; });
    // LASTLY, return the final value of the sum accumulator as the output of this function... KABOOM!!!
    return sum;
}
