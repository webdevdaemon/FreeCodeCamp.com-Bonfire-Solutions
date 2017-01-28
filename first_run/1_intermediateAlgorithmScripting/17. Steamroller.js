// Steamroller

// My Solution::

function steamrollArray(arr) {
    // create empty output array
    var output = [];
    // write a function, accept array (ray) as an input
    function deeper(ray) {
        ray.map(function(a) {
            // if any index contains an array, run the function again to go one level deeper
            if   (Array.isArray(a)) { deeper(a); }
            // if the index is not an array, push the value to the output array
            else { output.push(a); }
        });
    }
    // run the function, return the output... and... KABOOOOOOM! you've go code.
    deeper(arr); return output;
}
