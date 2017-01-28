// Diff Two Arrays

// My Solution::

function diffArray(arr1, arr2) {
    // prep empty output array
    var output = [];
    // combine the arrays
    var concat = arr1.concat(arr2);
    // sort the array
    var sorted = concat.sort();
    // filter the array, testing each index to it's neighboring indexes (BEFORE & AFTER) for a match
    sorted = sorted.map(function(val) {
        // index of the first known instance of val in concat array
        var valIndex = sorted.indexOf(val);
        // previous index's value
        var prev = sorted[valIndex - 1];
        // following index's value
        var post = sorted[valIndex + 1];
        // use if/else to weed out the indexes that test as negative to both prev and post
        if (val !== prev && val !== post) {
            // push any index that doesnt have a match at either position to the output array
            output.push(val);
            console.log(output);
        } else {
            // waste the loop if a match is found
            console.log("matched");
        }
        //return input value to map function - preserving the array for mapping of remaining indexes
        return val;
    });
    // print the output array... and... KABOOM!!!
    console.log("final answer... " + output);
    return output;
}
