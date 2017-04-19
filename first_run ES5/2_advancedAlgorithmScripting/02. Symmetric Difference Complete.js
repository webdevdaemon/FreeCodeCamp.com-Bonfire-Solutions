// 02. Symmetric Difference Complete

function sym(argz) {
    // first things first, create an empty array for the output
    var output = [];
    // Build FUNCTIONS:
    // 1: function to remove multiples of any one value from an array, leaving the first occurence
    function noMulti(arr0) {
        return arr0.filter(function(val0, dex0, ray0) {
            if (val0 === ray0[dex0 - 1] && val0 === ray0[dex0 + 1]) {
                return false; } else if (val0 !== ray0[dex0 - 1] && val0 === ray0[dex0 + 1]) {
                return false; } else {
                return true; }
        });
    }
    // 2: function to find symDiff between two arrays/arguments
    function symDiff(arr1, arr2) {
        var arr = arr1.concat(arr2).sort();
        return arr.filter(function(val, dex, ray) {
            var out = val !== ray[dex - 1] && val !== ray[dex + 1] ? true : false;
            return out;
        });
    }
    // Execute OPERATIONS:
    // create an array from the arguments object, removing duplicate values from each individual arg/array
    var args = Array.from(arguments).map(function(a) {
        return noMulti(a); });
    // assign output to the symDiff of the first two args/arrays - Must be OUTSIDE the following for loop
    // output will serve as the "accumulator" array, holding the new symDiff result as each arg/array is added
    output = symDiff(args[0], args[1]);
    // use a for loop to find the symDiff between the current output array, and each additional argument/array
    for (var i = 2; i < args.length; i++) {
        output = symDiff(output, args[i]);
    }
    // return output as function output... and... BOOMSHAKALAKA!!!
    return output;
}
