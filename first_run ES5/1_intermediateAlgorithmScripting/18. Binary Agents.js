// Binary Agents

// My Solution::

function binaryAgent(str) {
    return str.split(" ").map(function(bin) {
        return String.fromCharCode(parseInt(bin, 2)); }).join("");
}

// return the result of the following operations as the output for this function - (return)
// split the binary string into an array, using the spaces as markers - str.split(" ")
// map the resulting array, executing 2 js functions on each before returning it to the new output array - .map()
// first, parse/convert each index/string into an integer - parseInt()
// second, convert the binary integer into a string of text - String.fromCharCode()
// return the new, readable text version of each index to it's rightful place in the array - .map( function(bin){ return... })
// join the new array of readable strings from the map function's output - join()
// the output of binaryAgent will be a new, readable string of text - KAPOWWW!!!
