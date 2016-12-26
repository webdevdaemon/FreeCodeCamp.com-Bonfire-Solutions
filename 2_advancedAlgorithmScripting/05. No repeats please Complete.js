// 05. No repeats please Complete

function permAlone(str) {
    // create empty output array and carry var to hold a value for future use
    var out = [];
    var carry;
    // create a RegX to find consecutive characters.
    var regX = /(.)\1+/g;
    // split the string into an array of characters.
    var arr = str.split('');
    // immediately return 0 if input ONLY contains 2 or more identical characters.
    if (str.match(regX) !== null && str.match(regX)[0] === str) return 0;
    // create a function to swap values in an array.
    function swap(index1, index2) {
        carry = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = carry;
    }
    // create function to generate arrays of number combos, use an integer as the input.
    function generate(int) {
        if (int === 1) {
            // if input equals 1, push the joined array to the out array immediately
            out.push(arr.join(''));
        } else {
            // if int > 1, use a for loop to swap values throughout the full length of the array
            // make sure to increment AFTER each iteration (++i NOT i++)
            for (var i = 0; i != int; ++i) {
                generate(int - 1);
                swap(int % 2 ? 0 : i, int - 1);
            }
        }
    }
    // run generate function using length of arr as input integer
    generate(arr.length);

    // use regX to filter any strings w/ consecutive chars
    // return the length of the output array as the final function output
    return out.filter(function(string) {
        return !string.match(regX);
    }).length;
}
