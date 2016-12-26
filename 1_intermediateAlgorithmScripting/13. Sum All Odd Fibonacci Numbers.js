// Sum All Odd Fibonacci Numbers

// My Solution::

function sumFibs(num) {
    // starting point for index incrementor (used to progress through fib sequence, index-by-index)
    var i = 1;
    // starting point for fib value that will be incremented and pushed to build fib array
    var nFib = 1;
    // starting point for fib sequence with first value already present (1)
    var fib = [1];
    // starting point for the solution
    var sum = 0;
    // use while loop to build fib sequence array
    while (nFib <= num) {
        // build fib sequence by first pushing current nFib to fib array
        fib.push(nFib);
        // then add prev number/indexVal (from fib) to nFib before looping again
        nFib = fib[i] + fib[i - 1];
        // use simple incrementation to progress through fib array as you build it
        i++;
    }
    // map through fib, adding only the odd values to the sum
    fib.map(function(val) {
        // to test for oddness, make sure val % 2 does NOT equal (!==) 0
        if (val % 2 !== 0) { sum += val; }
    });
    // after map adds each odd number to sum, return sum as the function output
    return sum;
}
